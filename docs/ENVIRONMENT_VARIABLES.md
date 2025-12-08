# Environment Variables Configuration Guide

## Overview
This guide explains how to configure environment variables for the Link Restaurant Platform.

## Environment Files

### `.env.local` (Local Development)
- Used for local development
- **Never commit this file** (already in .gitignore)
- Contains sensitive credentials

### `.env.local.example` (Template)
- Template file showing required variables
- Safe to commit to Git
- Copy this to create your `.env.local`

### `.env.production` (Production)
- Used in production builds
- Managed by your hosting platform (Vercel, etc.)

## Quick Setup

### Step 1: Copy Template
```bash
cp .env.local.example .env.local
```

### Step 2: Fill in Values
Edit `.env.local` with your actual credentials.

## Required Environment Variables

### Supabase Configuration

#### `NEXT_PUBLIC_SUPABASE_URL`
- **Required**: Yes
- **Type**: Public (client-side accessible)
- **Description**: Your Supabase project URL
- **Example**: `https://abcdefghijklmnop.supabase.co`
- **Where to find**: Supabase Dashboard → Settings → API → Project URL

#### `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Required**: Yes
- **Type**: Public (client-side accessible)
- **Description**: Supabase anonymous/public key
- **Example**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **Where to find**: Supabase Dashboard → Settings → API → anon public
- **Note**: Safe to use in browser, has Row Level Security

#### `SUPABASE_SERVICE_ROLE_KEY`
- **Required**: No (optional for admin operations)
- **Type**: Secret (server-side only)
- **Description**: Supabase service role key with full access
- **Example**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **Where to find**: Supabase Dashboard → Settings → API → service_role
- **⚠️ Warning**: Never expose this in client-side code!

### Database Configuration

#### `DATABASE_URL`
- **Required**: No (Supabase client handles this)
- **Type**: Secret
- **Description**: Direct PostgreSQL connection string
- **Example**: `postgresql://postgres:password@db.xxxxx.supabase.co:5432/postgres`
- **Where to find**: Supabase Dashboard → Settings → Database → Connection string
- **Use case**: Direct database access, migrations, scripts

### Application Settings

#### `NODE_ENV`
- **Required**: No (auto-set by Next.js)
- **Type**: Public
- **Description**: Environment mode
- **Values**: `development`, `production`, `test`
- **Default**: `development`

#### `NEXT_TELEMETRY_DISABLED`
- **Required**: No
- **Type**: Public
- **Description**: Disable Next.js telemetry
- **Values**: `1` (disabled), `0` (enabled)
- **Default**: `0`

## Optional Environment Variables

### Authentication (Future)

```env
# JWT Secret for authentication
JWT_SECRET=your-super-secret-jwt-key-here

# Session configuration
SESSION_SECRET=your-session-secret-here
SESSION_MAX_AGE=86400  # 24 hours in seconds
```

### Email Service (Future)

```env
# SendGrid
SENDGRID_API_KEY=SG.xxxxx
SENDGRID_FROM_EMAIL=noreply@linkrestaurant.com

# Or Resend
RESEND_API_KEY=re_xxxxx
```

### Payment Gateway (Future)

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Razorpay (for India)
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxx
```

### File Storage (Future)

```env
# AWS S3
AWS_ACCESS_KEY_ID=xxxxx
AWS_SECRET_ACCESS_KEY=xxxxx
AWS_REGION=ap-south-1
AWS_S3_BUCKET=link-restaurant-uploads

# Or Cloudinary
CLOUDINARY_CLOUD_NAME=xxxxx
CLOUDINARY_API_KEY=xxxxx
CLOUDINARY_API_SECRET=xxxxx
```

### Analytics (Future)

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Mixpanel
NEXT_PUBLIC_MIXPANEL_TOKEN=xxxxx
```

## Environment Variable Naming Conventions

### Public Variables (Client-Side)
- **Prefix**: `NEXT_PUBLIC_`
- **Example**: `NEXT_PUBLIC_SUPABASE_URL`
- **Access**: Available in browser
- **Use**: Non-sensitive configuration

### Private Variables (Server-Side Only)
- **No prefix**
- **Example**: `SUPABASE_SERVICE_ROLE_KEY`
- **Access**: Server-side only
- **Use**: Sensitive credentials, API keys

## Accessing Environment Variables

### In Server Components
```typescript
// All variables accessible
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
```

### In Client Components
```typescript
// Only NEXT_PUBLIC_* variables accessible
const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// ❌ This will be undefined:
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
```

### In API Routes
```typescript
// All variables accessible
export async function GET(request: NextRequest) {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  // ...
}
```

## Validation

Create `lib/env.ts` for type-safe environment variables:

```typescript
// Validate required environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
] as const

export function validateEnv() {
  const missing = requiredEnvVars.filter(
    (key) => !process.env[key]
  )

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env.local file.'
    )
  }
}

// Type-safe environment variables
export const env = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  app: {
    nodeEnv: process.env.NODE_ENV || 'development',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
  },
} as const
```

## Security Best Practices

### ✅ DO:
- Use `.env.local` for local development
- Keep `.env.local.example` updated
- Use `NEXT_PUBLIC_` prefix only for non-sensitive data
- Rotate keys regularly
- Use different keys for development and production
- Store production secrets in hosting platform (Vercel, etc.)

### ❌ DON'T:
- Commit `.env.local` to Git
- Expose service role keys in client code
- Hardcode credentials in code
- Share credentials in chat/email
- Use production keys in development

## Platform-Specific Setup

### Vercel
1. Go to Project Settings → Environment Variables
2. Add each variable
3. Select environments (Production, Preview, Development)
4. Deploy

### Netlify
1. Go to Site Settings → Build & Deploy → Environment
2. Add each variable
3. Redeploy

### Docker
Create `.env` file:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
```

Use in `docker-compose.yml`:
```yaml
services:
  web:
    env_file:
      - .env
```

## Troubleshooting

### Variables Not Loading
1. Restart dev server: `npm run dev`
2. Check file name is exactly `.env.local`
3. Verify no typos in variable names
4. Check for spaces around `=`

### Undefined in Client
- Ensure variable has `NEXT_PUBLIC_` prefix
- Restart dev server after adding variables

### TypeScript Errors
Add to `next-env.d.ts`:
```typescript
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SUPABASE_URL: string
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string
    SUPABASE_SERVICE_ROLE_KEY?: string
    DATABASE_URL?: string
  }
}
```

## Example `.env.local`

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzg0NjQwMCwiZXhwIjoxOTM5NDIyNDAwfQ.xxxxx
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjIzODQ2NDAwLCJleHAiOjE5Mzk0MjI0MDB9.xxxxx

# Database
DATABASE_URL=postgresql://postgres:your-password@db.abcdefghijklmnop.supabase.co:5432/postgres

# Application
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
```

## Checklist

- [ ] Copied `.env.local.example` to `.env.local`
- [ ] Added Supabase URL
- [ ] Added Supabase anon key
- [ ] (Optional) Added service role key
- [ ] (Optional) Added database URL
- [ ] Verified `.env.local` is in `.gitignore`
- [ ] Restarted dev server
- [ ] Tested connection

---

**Last Updated**: December 2024  
**Sprint**: 1, Week 1  
**Status**: Production Ready
