# PostgreSQL Setup - Complete ✅

## What Was Created

### 1. **Comprehensive Documentation**
- ✅ **`docs/POSTGRESQL_SETUP.md`** - Complete setup guide
  - Docker installation (recommended)
  - Native installation (macOS, Windows)
  - Database tools and GUI options
  - Troubleshooting guide

### 2. **Database Schema** (`database/schema.sql`)
Complete production-ready schema with **15 tables**:

#### Core Tables:
- **restaurants** - Restaurant information and branding
- **users** - Restaurant owners and staff
- **menu_categories** - Menu organization
- **menu_items** - Individual dishes

#### Advanced Features:
- **item_variant_groups** & **item_variants** - Size, crust, base options
- **addon_groups** & **addons** - Toppings, extras
- **menu_item_addon_groups** - Link items to addons
- **restaurant_tables** - Physical tables with QR codes

#### Orders System:
- **orders** - Customer orders with status tracking
- **order_items** - Items in each order
- **order_item_variants** - Snapshot of selected variants
- **order_item_addons** - Snapshot of selected addons

#### Features:
- ✅ UUID primary keys
- ✅ Foreign key constraints
- ✅ Check constraints for data validation
- ✅ 25+ indexes for performance
- ✅ Auto-updating `updated_at` triggers
- ✅ Comprehensive comments

### 3. **Sample Seed Data** (`database/seed.sql`)
Realistic test data including:
- ✅ Sample restaurant "The Cozy Cafe"
- ✅ Restaurant owner account
- ✅ 4 menu categories (Appetizers, Main Course, Desserts, Beverages)
- ✅ 11 menu items with prices
- ✅ Pizza variants (Size: Small/Medium/Large, Crust: Thin/Thick/Cheese Burst)
- ✅ Addon groups (Extra Toppings)
- ✅ 5 restaurant tables with QR tokens
- ✅ Sample order

### 4. **Setup Script** (`database/setup.sh`)
Interactive bash script for easy setup:
- ✅ Docker or native PostgreSQL support
- ✅ Automatic schema creation
- ✅ Optional seed data loading
- ✅ Connection details display

## Database Schema Overview

```
restaurants (Restaurant info)
├── users (Owners & staff)
├── menu_categories
│   └── menu_items
│       ├── item_variant_groups
│       │   └── item_variants
│       └── menu_item_addon_groups
│           └── addon_groups
│               └── addons
├── restaurant_tables (QR codes)
└── orders
    └── order_items
        ├── order_item_variants (snapshot)
        └── order_item_addons (snapshot)
```

## Connection Details

**Default Configuration:**
- **Host**: localhost
- **Port**: 5432
- **Database**: linkdb
- **Username**: linkuser
- **Password**: linkpassword

**Docker Compose:**
```bash
# Start PostgreSQL
docker compose -f docker-compose.dev.yml up -d postgres

# Access database UI
open http://localhost:8080
```

**Native PostgreSQL:**
```bash
# Connect via psql
psql -U linkuser -d linkdb -h localhost
```

## Quick Start

### Option 1: Using Setup Script
```bash
# Run interactive setup
./database/setup.sh

# Choose option 1 (Docker) or 2 (Native)
# Script will create schema and optionally load sample data
```

### Option 2: Manual Setup

**With Docker:**
```bash
# Start PostgreSQL
docker compose -f docker-compose.dev.yml up -d postgres

# Create schema
docker compose -f docker-compose.dev.yml exec -T postgres \
  psql -U linkuser -d linkdb < database/schema.sql

# Load sample data (optional)
docker compose -f docker-compose.dev.yml exec -T postgres \
  psql -U linkuser -d linkdb < database/seed.sql
```

**Native PostgreSQL:**
```bash
# Create database and user
psql postgres -c "CREATE USER linkuser WITH PASSWORD 'linkpassword';"
psql postgres -c "CREATE DATABASE linkdb OWNER linkuser;"

# Create schema
psql -U linkuser -d linkdb -f database/schema.sql

# Load sample data (optional)
psql -U linkuser -d linkdb -f database/seed.sql
```

## Database Tools

### Adminer (Included with Docker)
- **URL**: http://localhost:8080
- **System**: PostgreSQL
- **Server**: postgres
- **Username**: linkuser
- **Password**: linkpassword
- **Database**: linkdb

### Command Line (psql)
```bash
# Connect
psql -U linkuser -d linkdb -h localhost

# Useful commands
\dt              # List tables
\d table_name    # Describe table
\l               # List databases
\q               # Quit
```

## Sample Queries

```sql
-- List all menu items with categories
SELECT 
    c.name as category,
    i.name as item,
    i.base_price,
    i.is_vegetarian
FROM menu_items i
JOIN menu_categories c ON i.category_id = c.id
ORDER BY c.display_order, i.display_order;

-- Get pizza with all variants
SELECT 
    i.name as item,
    vg.name as variant_group,
    v.name as variant,
    v.price_adjustment
FROM menu_items i
JOIN item_variant_groups vg ON vg.menu_item_id = i.id
JOIN item_variants v ON v.variant_group_id = vg.id
WHERE i.name = 'Margherita Pizza';

-- List all tables with QR tokens
SELECT 
    table_number,
    table_name,
    section,
    capacity,
    qr_token
FROM restaurant_tables
ORDER BY table_number;
```

## Next Steps

### Sprint 1, Week 1 Progress:
- ✅ Setup GitHub repo + branch strategy
- ✅ Setup PostgreSQL locally
- ✅ Create database schema (restaurants, users tables) ← **DONE!**
- ⏳ Setup Express.js project structure
- ⏳ Configure environment variables

### Upcoming Tasks:
1. Set up Express.js backend
2. Create database connection module
3. Build authentication endpoints
4. Implement menu management APIs

## Files Created

```
database/
├── schema.sql       # Complete database schema (500+ lines)
├── seed.sql         # Sample test data (200+ lines)
└── setup.sh         # Interactive setup script

docs/
└── POSTGRESQL_SETUP.md  # Comprehensive setup guide (400+ lines)
```

## Success Metrics

✅ **Schema Designed**: 15 tables with relationships  
✅ **Performance Optimized**: 25+ indexes  
✅ **Data Integrity**: Foreign keys, constraints, triggers  
✅ **Sample Data**: Ready for testing  
✅ **Documentation**: Complete setup guide  
✅ **Automation**: One-command setup script  

---

**Status**: ✅ Complete  
**Date**: December 2024  
**Sprint**: 1, Week 1  
**Task**: Setup PostgreSQL locally  
**Lines of Code**: 1,058 lines added
