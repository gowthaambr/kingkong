/**
 * Environment Variables Configuration
 * Type-safe access to environment variables with validation
 */

// Required environment variables
const requiredEnvVars = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
] as const

/**
 * Validate that all required environment variables are set
 * Throws an error if any are missing
 */
export function validateEnv() {
    const missing = requiredEnvVars.filter(
        (key) => !process.env[key]
    )

    if (missing.length > 0) {
        throw new Error(
            `❌ Missing required environment variables:\n` +
            `${missing.map(key => `  - ${key}`).join('\n')}\n\n` +
            `Please check your .env.local file.\n` +
            `See docs/ENVIRONMENT_VARIABLES.md for setup instructions.`
        )
    }

    console.log('✅ Environment variables validated successfully')
}

/**
 * Type-safe environment variables
 * Access environment variables through this object for better type safety
 */
export const env = {
    // Supabase configuration
    supabase: {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    },

    // Database configuration
    database: {
        url: process.env.DATABASE_URL,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },

    // Application configuration
    app: {
        nodeEnv: process.env.NODE_ENV || 'development',
        isDevelopment: process.env.NODE_ENV === 'development',
        isProduction: process.env.NODE_ENV === 'production',
        isTest: process.env.NODE_ENV === 'test',
        telemetryDisabled: process.env.NEXT_TELEMETRY_DISABLED === '1',
    },

    // Future: Authentication
    auth: {
        jwtSecret: process.env.JWT_SECRET,
        sessionSecret: process.env.SESSION_SECRET,
        sessionMaxAge: process.env.SESSION_MAX_AGE
            ? parseInt(process.env.SESSION_MAX_AGE)
            : 86400, // 24 hours default
    },

    // Future: Email
    email: {
        sendgridApiKey: process.env.SENDGRID_API_KEY,
        sendgridFromEmail: process.env.SENDGRID_FROM_EMAIL,
        resendApiKey: process.env.RESEND_API_KEY,
    },

    // Future: Payment
    payment: {
        stripe: {
            secretKey: process.env.STRIPE_SECRET_KEY,
            publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
            webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
        },
        razorpay: {
            keyId: process.env.RAZORPAY_KEY_ID,
            keySecret: process.env.RAZORPAY_KEY_SECRET,
        },
    },

    // Future: Storage
    storage: {
        aws: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
            s3Bucket: process.env.AWS_S3_BUCKET,
        },
        cloudinary: {
            cloudName: process.env.CLOUDINARY_CLOUD_NAME,
            apiKey: process.env.CLOUDINARY_API_KEY,
            apiSecret: process.env.CLOUDINARY_API_SECRET,
        },
    },

    // Future: Analytics
    analytics: {
        googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
        mixpanelToken: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
    },
} as const

/**
 * Check if a specific environment variable is set
 */
export function hasEnvVar(key: string): boolean {
    return !!process.env[key]
}

/**
 * Get environment variable with fallback
 */
export function getEnvVar(key: string, fallback?: string): string {
    return process.env[key] || fallback || ''
}

/**
 * Print environment configuration (safe - no secrets)
 * Useful for debugging
 */
export function printEnvConfig() {
    console.log('\n📋 Environment Configuration:')
    console.log('─'.repeat(50))
    console.log(`Environment: ${env.app.nodeEnv}`)
    console.log(`Supabase URL: ${env.supabase.url ? '✅ Set' : '❌ Missing'}`)
    console.log(`Supabase Anon Key: ${env.supabase.anonKey ? '✅ Set' : '❌ Missing'}`)
    console.log(`Service Role Key: ${env.supabase.serviceRoleKey ? '✅ Set' : '⚠️  Not set (optional)'}`)
    console.log(`Database URL: ${env.database.url ? '✅ Set' : '⚠️  Not set (optional)'}`)
    console.log(`Telemetry: ${env.app.telemetryDisabled ? 'Disabled' : 'Enabled'}`)
    console.log('─'.repeat(50))
    console.log('')
}

// Auto-validate in development
if (env.app.isDevelopment && typeof window === 'undefined') {
    try {
        validateEnv()
    } catch (error) {
        console.error(error)
        // Don't throw in development, just warn
        console.warn('\n⚠️  Please set up your environment variables to continue.\n')
    }
}
