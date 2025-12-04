import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

/**
 * GET /api/orders
 * Fetch orders for a restaurant
 */
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const restaurantId = searchParams.get('restaurant_id')
        const status = searchParams.get('status')
        const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 20

        let query = supabase
            .from('orders')
            .select(`
        *,
        restaurant_tables (
          table_number,
          table_name,
          section
        ),
        order_items (
          *,
          order_item_variants (*),
          order_item_addons (*)
        )
      `)
            .order('created_at', { ascending: false })
            .limit(limit)

        if (restaurantId) {
            query = query.eq('restaurant_id', restaurantId)
        }

        if (status) {
            query = query.eq('status', status)
        }

        const { data, error } = await query

        if (error) {
            console.error('Error fetching orders:', error)
            return NextResponse.json(
                { error: 'Failed to fetch orders', details: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

/**
 * POST /api/orders
 * Create a new order
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate required fields
        const { restaurant_id, table_id, order_items, subtotal, total } = body
        if (!restaurant_id || !order_items || !subtotal || !total) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Generate order number
        const orderNumber = `ORD-${new Date().toISOString().split('T')[0].replace(/-/g, '')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`

        // Create order
        const { data: order, error: orderError } = await supabase
            .from('orders')
            .insert([{
                restaurant_id,
                table_id,
                order_number: orderNumber,
                customer_name: body.customer_name,
                customer_phone: body.customer_phone,
                status: 'pending',
                subtotal,
                tax_amount: body.tax_amount || 0,
                total,
                special_instructions: body.special_instructions
            }])
            .select()
            .single()

        if (orderError) {
            console.error('Error creating order:', orderError)
            return NextResponse.json(
                { error: 'Failed to create order', details: orderError.message },
                { status: 500 }
            )
        }

        // Create order items
        const orderItemsData = order_items.map((item: any) => ({
            order_id: order.id,
            menu_item_id: item.menu_item_id,
            item_name: item.item_name,
            quantity: item.quantity,
            unit_price: item.unit_price,
            total_price: item.total_price,
            special_instructions: item.special_instructions
        }))

        const { error: itemsError } = await supabase
            .from('order_items')
            .insert(orderItemsData)

        if (itemsError) {
            console.error('Error creating order items:', itemsError)
            // Rollback: delete the order
            await supabase.from('orders').delete().eq('id', order.id)
            return NextResponse.json(
                { error: 'Failed to create order items', details: itemsError.message },
                { status: 500 }
            )
        }

        return NextResponse.json(order, { status: 201 })
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
