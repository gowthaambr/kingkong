# PostgreSQL Setup Guide

This guide will help you set up PostgreSQL for the Link Restaurant Platform.

## Option 1: Using Docker (Recommended)

### Prerequisites
- Docker Desktop installed ([Download here](https://www.docker.com/products/docker-desktop))

### Setup Steps

1. **Start PostgreSQL with Docker Compose**
   ```bash
   # Start only PostgreSQL
   docker compose -f docker-compose.dev.yml up -d postgres
   
   # Or start PostgreSQL with Adminer (database UI)
   docker compose -f docker-compose.dev.yml up -d postgres adminer
   ```

2. **Verify PostgreSQL is running**
   ```bash
   docker compose -f docker-compose.dev.yml ps
   ```

3. **Access Database**
   - **Host**: `localhost`
   - **Port**: `5432`
   - **Database**: `linkdb`
   - **Username**: `linkuser`
   - **Password**: `linkpassword`

4. **Access Adminer (Database UI)**
   - Open: http://localhost:8080
   - System: PostgreSQL
   - Server: postgres
   - Username: linkuser
   - Password: linkpassword
   - Database: linkdb

### Useful Commands

```bash
# Stop PostgreSQL
docker compose -f docker-compose.dev.yml stop postgres

# View logs
docker compose -f docker-compose.dev.yml logs -f postgres

# Access PostgreSQL shell
docker compose -f docker-compose.dev.yml exec postgres psql -U linkuser -d linkdb

# Remove PostgreSQL (WARNING: deletes data)
docker compose -f docker-compose.dev.yml down -v
```

---

## Option 2: Native Installation (macOS)

### Using Homebrew

1. **Install PostgreSQL**
   ```bash
   brew install postgresql@16
   ```

2. **Start PostgreSQL service**
   ```bash
   brew services start postgresql@16
   ```

3. **Create database and user**
   ```bash
   # Access PostgreSQL
   psql postgres
   
   # In psql shell, run:
   CREATE USER linkuser WITH PASSWORD 'linkpassword';
   CREATE DATABASE linkdb OWNER linkuser;
   GRANT ALL PRIVILEGES ON DATABASE linkdb TO linkuser;
   \q
   ```

4. **Verify connection**
   ```bash
   psql -U linkuser -d linkdb -h localhost
   ```

### Using Postgres.app

1. **Download Postgres.app**
   - Visit: https://postgresapp.com/
   - Download and install

2. **Start Postgres.app**
   - Open the app
   - Click "Initialize" to create a new server

3. **Create database**
   ```bash
   # Open terminal and run:
   psql
   
   # In psql shell:
   CREATE USER linkuser WITH PASSWORD 'linkpassword';
   CREATE DATABASE linkdb OWNER linkuser;
   GRANT ALL PRIVILEGES ON DATABASE linkdb TO linkuser;
   \q
   ```

---

## Option 3: Native Installation (Windows)

### Using Official Installer

1. **Download PostgreSQL**
   - Visit: https://www.postgresql.org/download/windows/
   - Download PostgreSQL 16

2. **Install**
   - Run installer
   - Set password for postgres user
   - Default port: 5432

3. **Create database and user**
   ```bash
   # Open SQL Shell (psql)
   
   # Login as postgres user
   # Then run:
   CREATE USER linkuser WITH PASSWORD 'linkpassword';
   CREATE DATABASE linkdb OWNER linkuser;
   GRANT ALL PRIVILEGES ON DATABASE linkdb TO linkuser;
   \q
   ```

---

## Database Schema Setup

Once PostgreSQL is running, create the initial schema:

### 1. Create schema file

Create `database/schema.sql`:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Restaurants table
CREATE TABLE restaurants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    logo_url VARCHAR(500),
    primary_color VARCHAR(7) DEFAULT '#FF6B35',
    secondary_color VARCHAR(7) DEFAULT '#004E89',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Users table (restaurant owners/staff)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'owner', -- owner, manager, staff
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Menu categories table
CREATE TABLE menu_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Menu items table
CREATE TABLE menu_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    category_id UUID REFERENCES menu_categories(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    base_price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(500),
    is_vegetarian BOOLEAN DEFAULT false,
    is_vegan BOOLEAN DEFAULT false,
    spice_level INTEGER DEFAULT 0, -- 0-3
    is_available BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Restaurant tables (physical tables)
CREATE TABLE restaurant_tables (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    table_number VARCHAR(50) NOT NULL,
    table_name VARCHAR(100),
    section VARCHAR(100), -- Indoor, Outdoor, etc.
    capacity INTEGER DEFAULT 4,
    qr_code_url VARCHAR(500),
    qr_token VARCHAR(255) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(restaurant_id, table_number)
);

-- Orders table
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    table_id UUID REFERENCES restaurant_tables(id) ON DELETE SET NULL,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    customer_name VARCHAR(255),
    customer_phone VARCHAR(20),
    status VARCHAR(50) DEFAULT 'pending', -- pending, preparing, ready, completed, cancelled
    subtotal DECIMAL(10, 2) NOT NULL,
    tax DECIMAL(10, 2) DEFAULT 0,
    total DECIMAL(10, 2) NOT NULL,
    special_instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order items table
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    menu_item_id UUID REFERENCES menu_items(id) ON DELETE SET NULL,
    item_name VARCHAR(255) NOT NULL, -- Snapshot of item name
    quantity INTEGER NOT NULL DEFAULT 1,
    unit_price DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    special_instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_restaurants_slug ON restaurants(slug);
CREATE INDEX idx_users_restaurant_id ON users(restaurant_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_menu_categories_restaurant_id ON menu_categories(restaurant_id);
CREATE INDEX idx_menu_items_restaurant_id ON menu_items(restaurant_id);
CREATE INDEX idx_menu_items_category_id ON menu_items(category_id);
CREATE INDEX idx_restaurant_tables_restaurant_id ON restaurant_tables(restaurant_id);
CREATE INDEX idx_restaurant_tables_qr_token ON restaurant_tables(qr_token);
CREATE INDEX idx_orders_restaurant_id ON orders(restaurant_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers
CREATE TRIGGER update_restaurants_updated_at BEFORE UPDATE ON restaurants
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_menu_categories_updated_at BEFORE UPDATE ON menu_categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_menu_items_updated_at BEFORE UPDATE ON menu_items
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_restaurant_tables_updated_at BEFORE UPDATE ON restaurant_tables
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### 2. Run the schema

**Using Docker:**
```bash
# Copy schema file to container
docker cp database/schema.sql link-restaurant-db-dev:/schema.sql

# Execute schema
docker compose -f docker-compose.dev.yml exec postgres psql -U linkuser -d linkdb -f /schema.sql
```

**Using native PostgreSQL:**
```bash
psql -U linkuser -d linkdb -f database/schema.sql
```

---

## Database Tools

### Command Line (psql)

```bash
# Connect to database
psql -U linkuser -d linkdb -h localhost

# Common commands in psql:
\dt              # List tables
\d table_name    # Describe table
\l               # List databases
\du              # List users
\q               # Quit
```

### GUI Tools

1. **Adminer** (Included in Docker setup)
   - Lightweight web-based tool
   - Access: http://localhost:8080

2. **pgAdmin** (Free, feature-rich)
   - Download: https://www.pgadmin.org/download/
   - Full-featured PostgreSQL management

3. **TablePlus** (macOS, paid)
   - Download: https://tableplus.com/
   - Beautiful native app

4. **DBeaver** (Free, cross-platform)
   - Download: https://dbeaver.io/
   - Universal database tool

---

## Environment Variables

Create `.env.local` file in project root:

```env
# Database Configuration
DATABASE_URL=postgresql://linkuser:linkpassword@localhost:5432/linkdb
DB_HOST=localhost
DB_PORT=5432
DB_NAME=linkdb
DB_USER=linkuser
DB_PASSWORD=linkpassword

# For Docker
DATABASE_URL=postgresql://linkuser:linkpassword@postgres:5432/linkdb
```

---

## Troubleshooting

### Port 5432 already in use

```bash
# Find process using port 5432
lsof -i :5432

# Kill the process
kill -9 <PID>

# Or change port in docker-compose.dev.yml
ports:
  - "5433:5432"  # Use 5433 on host
```

### Can't connect to database

1. **Check if PostgreSQL is running**
   ```bash
   # Docker
   docker compose -f docker-compose.dev.yml ps
   
   # Native (macOS)
   brew services list
   ```

2. **Check credentials**
   - Username: linkuser
   - Password: linkpassword
   - Database: linkdb

3. **Check firewall/network**
   - Ensure port 5432 is not blocked

### Reset database

**Docker:**
```bash
# Stop and remove volumes
docker compose -f docker-compose.dev.yml down -v

# Start fresh
docker compose -f docker-compose.dev.yml up -d postgres
```

**Native:**
```bash
# Drop and recreate database
psql postgres
DROP DATABASE linkdb;
CREATE DATABASE linkdb OWNER linkuser;
\q
```

---

## Next Steps

1. ✅ PostgreSQL installed and running
2. ✅ Database and user created
3. ⏳ Run schema.sql to create tables
4. ⏳ Set up backend API connection
5. ⏳ Test database connection

---

**Status**: Ready for schema creation  
**Sprint**: 1, Week 1  
**Task**: Setup PostgreSQL locally
