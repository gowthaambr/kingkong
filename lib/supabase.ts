import { createClient } from '@supabase/supabase-js'

// Supabase client for client-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables. Please check your .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Supabase admin client for server-side operations (use with caution)
export const supabaseAdmin = createClient(
    supabaseUrl,
    process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    }
)

// Database types (will be auto-generated later)
export type Database = {
    public: {
        Tables: {
            restaurants: {
                Row: {
                    id: string
                    name: string
                    slug: string
                    email: string
                    phone: string | null
                    address: string | null
                    city: string | null
                    state: string | null
                    zip_code: string | null
                    country: string | null
                    logo_url: string | null
                    primary_color: string
                    secondary_color: string
                    currency: string
                    timezone: string
                    is_active: boolean
                    created_at: string
                    updated_at: string
                }
                Insert: Omit<Database['public']['Tables']['restaurants']['Row'], 'id' | 'created_at' | 'updated_at'>
                Update: Partial<Database['public']['Tables']['restaurants']['Insert']>
            }
            // Add more table types as needed
        }
    }
}
