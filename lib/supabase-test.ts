import { supabase } from './supabase'

/**
 * Test Supabase connection
 * Run this to verify your Supabase setup is working
 */
export async function testSupabaseConnection() {
    try {
        console.log('🔍 Testing Supabase connection...')

        // Test 1: Check if we can connect
        const { data: healthCheck, error: healthError } = await supabase
            .from('restaurants')
            .select('count')
            .limit(1)

        if (healthError) {
            console.error('❌ Connection failed:', healthError.message)
            return false
        }

        console.log('✅ Supabase connection successful!')

        // Test 2: Try to fetch restaurants
        const { data: restaurants, error: fetchError } = await supabase
            .from('restaurants')
            .select('*')
            .limit(5)

        if (fetchError) {
            console.error('❌ Failed to fetch restaurants:', fetchError.message)
            return false
        }

        console.log(`✅ Found ${restaurants?.length || 0} restaurants`)
        if (restaurants && restaurants.length > 0) {
            console.log('Sample restaurant:', restaurants[0])
        }

        return true
    } catch (error) {
        console.error('❌ Unexpected error:', error)
        return false
    }
}

/**
 * Initialize database with sample data
 * Only run this once after setting up Supabase
 */
export async function initializeSampleData() {
    try {
        console.log('🌱 Initializing sample data...')

        // Check if data already exists
        const { data: existing } = await supabase
            .from('restaurants')
            .select('id')
            .limit(1)

        if (existing && existing.length > 0) {
            console.log('⚠️  Sample data already exists. Skipping initialization.')
            return true
        }

        console.log('📝 Sample data should be loaded via SQL Editor in Supabase Dashboard')
        console.log('   1. Go to https://supabase.com/dashboard')
        console.log('   2. Open SQL Editor')
        console.log('   3. Copy contents of database/seed.sql')
        console.log('   4. Paste and run')

        return true
    } catch (error) {
        console.error('❌ Failed to initialize sample data:', error)
        return false
    }
}

// Export for use in API routes or server components
export async function getRestaurants() {
    const { data, error } = await supabase
        .from('restaurants')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching restaurants:', error)
        return []
    }

    return data
}

export async function getRestaurantBySlug(slug: string) {
    const { data, error } = await supabase
        .from('restaurants')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single()

    if (error) {
        console.error('Error fetching restaurant:', error)
        return null
    }

    return data
}
