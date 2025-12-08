import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

/**
 * GET /api/restaurants
 * Fetch all active restaurants
 */
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 10
        const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0

        const { data, error, count } = await supabase
            .from('restaurants')
            .select('*', { count: 'exact' })
            .eq('is_active', true)
            .order('created_at', { ascending: false })
            .range(offset, offset + limit - 1)

        if (error) {
            console.error('Error fetching restaurants:', error)
            return NextResponse.json(
                { error: 'Failed to fetch restaurants', details: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json({
            data,
            pagination: {
                total: count || 0,
                limit,
                offset,
                hasMore: (count || 0) > offset + limit
            }
        })
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

/**
 * POST /api/restaurants
 * Create a new restaurant
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate required fields
        const { name, slug, email } = body
        if (!name || !slug || !email) {
            return NextResponse.json(
                { error: 'Missing required fields: name, slug, email' },
                { status: 400 }
            )
        }

        const { data, error } = await supabase
            .from('restaurants')
            .insert([body])
            .select()
            .single()

        if (error) {
            console.error('Error creating restaurant:', error)
            return NextResponse.json(
                { error: 'Failed to create restaurant', details: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json(data, { status: 201 })
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
