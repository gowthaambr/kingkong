import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

/**
 * GET /api/restaurants/[slug]/menu
 * Fetch complete menu for a restaurant
 */
export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params

        // First, get the restaurant
        const { data: restaurant, error: restaurantError } = await supabase
            .from('restaurants')
            .select('id')
            .eq('slug', slug)
            .eq('is_active', true)
            .single()

        if (restaurantError || !restaurant) {
            return NextResponse.json(
                { error: 'Restaurant not found' },
                { status: 404 }
            )
        }

        // Fetch menu categories with items
        const { data: categories, error: categoriesError } = await supabase
            .from('menu_categories')
            .select(`
        *,
        menu_items (
          *,
          item_variant_groups (
            *,
            item_variants (*)
          )
        )
      `)
            .eq('restaurant_id', restaurant.id)
            .eq('is_active', true)
            .order('display_order', { ascending: true })

        if (categoriesError) {
            console.error('Error fetching menu:', categoriesError)
            return NextResponse.json(
                { error: 'Failed to fetch menu', details: categoriesError.message },
                { status: 500 }
            )
        }

        return NextResponse.json({
            restaurant_id: restaurant.id,
            categories: categories || []
        })
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
