#!/bin/bash

# Supabase Setup Script for Link Restaurant Platform
# This script helps you set up Supabase integration

set -e

echo "🚀 Link Restaurant Platform - Supabase Setup"
echo "=============================================="
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists!"
    echo ""
    read -p "Do you want to overwrite it? (y/n): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Keeping existing .env.local file"
        echo "Please update it manually with your Supabase credentials"
        exit 0
    fi
fi

# Copy template
echo "📝 Creating .env.local from template..."
cp .env.local.example .env.local

echo ""
echo "✅ .env.local file created!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Go to https://supabase.com"
echo "2. Sign in with GitHub"
echo "3. Create a new project:"
echo "   - Name: link-restaurant-platform"
echo "   - Database Password: (create a strong password)"
echo "   - Region: (choose closest to you)"
echo ""
echo "4. Once created, go to Settings → API and copy:"
echo "   - Project URL"
echo "   - anon public key"
echo "   - service_role key (optional)"
echo ""
echo "5. Update .env.local with your credentials"
echo ""
echo "6. Go to SQL Editor in Supabase Dashboard"
echo "7. Copy contents of database/schema.sql"
echo "8. Paste and run in SQL Editor"
echo ""
echo "9. (Optional) Load sample data:"
echo "   - Copy contents of database/seed.sql"
echo "   - Paste and run in SQL Editor"
echo ""
echo "10. Test connection:"
echo "    npm run test:supabase"
echo ""
echo "📖 Full guide: docs/SUPABASE_SETUP.md"
echo ""
