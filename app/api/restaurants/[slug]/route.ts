import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

/**
 * GET /api/restaurants/[slug]
 * Fetch a single restaurant by slug
 */
export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params

        const { data, error } = await supabase
            .from('restaurants')
            .select('*')
            .eq('slug', slug)
            .eq('is_active', true)
            .single()

        if (error) {
            if (error.code === 'PGRST116') {
                return NextResponse.json(
                    { error: 'Restaurant not found' },
                    { status: 404 }
                )
            }
            console.error('Error fetching restaurant:', error)
            return NextResponse.json(
                { error: 'Failed to fetch restaurant', details: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json(data)
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

/**
 * PUT /api/restaurants/[slug]
 * Update a restaurant
 */
export async function PUT(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params
        const body = await request.json()

        const { data, error } = await supabase
            .from('restaurants')
            .update(body)
            .eq('slug', slug)
            .select()
            .single()

        if (error) {
            console.error('Error updating restaurant:', error)
            return NextResponse.json(
                { error: 'Failed to update restaurant', details: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json(data)
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

/**
 * DELETE /api/restaurants/[slug]
 * Soft delete a restaurant (set is_active to false)
 */
export async function DELETE(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params

        const { data, error } = await supabase
            .from('restaurants')
            .update({ is_active: false })
            .eq('slug', slug)
            .select()
            .single()

        if (error) {
            console.error('Error deleting restaurant:', error)
            return NextResponse.json(
                { error: 'Failed to delete restaurant', details: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json({ message: 'Restaurant deleted successfully', data })
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
