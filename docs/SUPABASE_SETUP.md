# Supabase Integration Guide

## Overview
This guide helps you connect your Link Restaurant Platform to Supabase for database hosting and backend services.

## Prerequisites
- GitHub account
- Supabase account (free tier available)
- Node.js installed

## Step 1: Create Supabase Project

### Via Dashboard (Easiest)
1. Go to https://supabase.com
2. Click "Sign in with GitHub"
3. Click "New Project"
4. Fill in project details:
   - **Name**: `link-restaurant-platform`
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to your location
5. Click "Create new project" (takes ~2 minutes)

## Step 2: Get Your Supabase Credentials

Once your project is created:

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (for client-side)
   - **service_role key**: `eyJhbGc...` (for server-side - keep secret!)

3. Go to **Settings** → **Database**
4. Copy the **Connection String**:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres
   ```

## Step 3: Add Credentials to Your Project

Create a `.env.local` file in your project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# Database (for server-side)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres

# Optional: For direct database access
DB_HOST=db.xxxxx.supabase.co
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=[YOUR-PASSWORD]
```

## Step 4: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

## Step 5: Set Up Database Schema

### Method 1: Using Supabase Dashboard (Easiest)

1. Go to **SQL Editor** in Supabase Dashboard
2. Click "New Query"
3. Copy the entire contents of `database/schema.sql`
4. Paste into the editor
5. Click "Run"

### Method 2: Using Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref xxxxx

# Push schema
supabase db push
```

### Method 3: Using Migration Files

```bash
# Initialize Supabase in your project
supabase init

# Create migration from your schema
cp database/schema.sql supabase/migrations/20241205000000_initial_schema.sql

# Push to Supabase
supabase db push
```

## Step 6: Create Supabase Client

Create `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// For server-side operations
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
```

## Step 7: Test Connection

Create `lib/test-supabase.ts`:

```typescript
import { supabase } from './supabase'

export async function testConnection() {
  const { data, error } = await supabase
    .from('restaurants')
    .select('*')
    .limit(1)

  if (error) {
    console.error('Supabase connection error:', error)
    return false
  }

  console.log('Supabase connected successfully!', data)
  return true
}
```

## Step 8: Load Sample Data

In Supabase SQL Editor:

1. Copy contents of `database/seed.sql`
2. Paste and run in SQL Editor
3. Verify data in **Table Editor**

## Step 9: Enable Row Level Security (RLS)

For production security, enable RLS on tables:

```sql
-- Enable RLS on all tables
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
-- ... repeat for all tables

-- Create policies (example for restaurants)
CREATE POLICY "Public restaurants are viewable by everyone"
  ON restaurants FOR SELECT
  USING (is_active = true);

CREATE POLICY "Users can update their own restaurant"
  ON restaurants FOR UPDATE
  USING (auth.uid() IN (
    SELECT id FROM users WHERE restaurant_id = restaurants.id
  ));
```

## Step 10: Set Up GitHub Integration (Optional)

### Enable GitHub Sync:

1. Go to **Settings** → **Integrations**
2. Find **GitHub** integration
3. Click "Connect to GitHub"
4. Authorize Supabase
5. Select repository: `gowthaambr/kingkong`

### Benefits:
- Auto-deploy database migrations from GitHub
- Track schema changes in version control
- Automatic backups

## Step 11: Configure Automatic Migrations

Create `.github/workflows/supabase-deploy.yml`:

```yaml
name: Deploy to Supabase

on:
  push:
    branches:
      - main
    paths:
      - 'database/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Supabase CLI
        uses: supabase/setup-cli@v1
        
      - name: Deploy migrations
        run: |
          supabase link --project-ref ${{ secrets.SUPABASE_PROJECT_REF }}
          supabase db push
        env:
          SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
```

## Step 12: Add GitHub Secrets

In your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:
   - `SUPABASE_PROJECT_REF`: Your project reference ID
   - `SUPABASE_ACCESS_TOKEN`: Generate from Supabase Dashboard

## Useful Supabase Features

### 1. Authentication
```typescript
// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
})

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
})
```

### 2. Real-time Subscriptions
```typescript
const channel = supabase
  .channel('orders')
  .on('postgres_changes', 
    { event: 'INSERT', schema: 'public', table: 'orders' },
    (payload) => {
      console.log('New order:', payload.new)
    }
  )
  .subscribe()
```

### 3. Storage (for images)
```typescript
const { data, error } = await supabase.storage
  .from('menu-images')
  .upload('pizza.jpg', file)
```

## Monitoring & Maintenance

### View Logs
- Go to **Logs** in Supabase Dashboard
- Monitor queries, errors, and performance

### Database Backups
- Automatic daily backups (free tier: 7 days retention)
- Manual backups: **Database** → **Backups** → **Create backup**

### Performance
- **Reports** tab shows query performance
- Add indexes for slow queries

## Troubleshooting

### Connection Issues
```bash
# Test connection
psql "postgresql://postgres:[PASSWORD]@db.xxxxx.supabase.co:5432/postgres"
```

### Schema Sync Issues
```bash
# Pull current schema
supabase db pull

# Compare with local
diff database/schema.sql supabase/migrations/...
```

### RLS Blocking Queries
- Temporarily disable for testing:
  ```sql
  ALTER TABLE table_name DISABLE ROW LEVEL SECURITY;
  ```

## Resources

- **Supabase Docs**: https://supabase.com/docs
- **Next.js Integration**: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
- **SQL Editor**: https://supabase.com/dashboard/project/_/sql
- **API Docs**: Auto-generated at https://supabase.com/dashboard/project/_/api

## Next Steps

1. ✅ Create Supabase project
2. ✅ Add credentials to `.env.local`
3. ✅ Install Supabase client
4. ✅ Push database schema
5. ✅ Load sample data
6. ✅ Test connection
7. ⏳ Set up authentication
8. ⏳ Enable RLS policies
9. ⏳ Configure GitHub integration

---

**Your Supabase project is now connected to your GitHub repository!** 🎉
