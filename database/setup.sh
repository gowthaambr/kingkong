#!/bin/bash

# PostgreSQL Setup Script for Link Restaurant Platform
# This script helps set up the database quickly

set -e

echo "🗄️  Link Restaurant Platform - Database Setup"
echo "=============================================="
echo ""

# Check if PostgreSQL is running
check_postgres() {
    if command -v psql &> /dev/null; then
        echo "✅ PostgreSQL client found"
        return 0
    else
        echo "❌ PostgreSQL client not found"
        echo "Please install PostgreSQL first. See docs/POSTGRESQL_SETUP.md"
        exit 1
    fi
}

# Setup using Docker
setup_docker() {
    echo "🐳 Setting up PostgreSQL with Docker..."
    
    if ! command -v docker &> /dev/null; then
        echo "❌ Docker not found. Please install Docker Desktop first."
        exit 1
    fi
    
    echo "Starting PostgreSQL container..."
    docker compose -f docker-compose.dev.yml up -d postgres
    
    echo "Waiting for PostgreSQL to be ready..."
    sleep 5
    
    echo "Creating schema..."
    docker compose -f docker-compose.dev.yml exec -T postgres psql -U linkuser -d linkdb < database/schema.sql
    
    echo ""
    echo "Load sample data? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        echo "Loading sample data..."
        docker compose -f docker-compose.dev.yml exec -T postgres psql -U linkuser -d linkdb < database/seed.sql
        echo "✅ Sample data loaded"
    fi
    
    echo ""
    echo "✅ PostgreSQL setup complete!"
    echo ""
    echo "Connection details:"
    echo "  Host: localhost"
    echo "  Port: 5432"
    echo "  Database: linkdb"
    echo "  Username: linkuser"
    echo "  Password: linkpassword"
    echo ""
    echo "Access Adminer (Database UI): http://localhost:8080"
}

# Setup using native PostgreSQL
setup_native() {
    echo "💻 Setting up PostgreSQL natively..."
    
    echo "Creating database and user..."
    psql postgres -c "CREATE USER linkuser WITH PASSWORD 'linkpassword';" 2>/dev/null || echo "User already exists"
    psql postgres -c "CREATE DATABASE linkdb OWNER linkuser;" 2>/dev/null || echo "Database already exists"
    psql postgres -c "GRANT ALL PRIVILEGES ON DATABASE linkdb TO linkuser;"
    
    echo "Creating schema..."
    psql -U linkuser -d linkdb -f database/schema.sql
    
    echo ""
    echo "Load sample data? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        echo "Loading sample data..."
        psql -U linkuser -d linkdb -f database/seed.sql
        echo "✅ Sample data loaded"
    fi
    
    echo ""
    echo "✅ PostgreSQL setup complete!"
    echo ""
    echo "Connection details:"
    echo "  Host: localhost"
    echo "  Port: 5432"
    echo "  Database: linkdb"
    echo "  Username: linkuser"
    echo "  Password: linkpassword"
}

# Main menu
main() {
    check_postgres
    
    echo "How would you like to set up PostgreSQL?"
    echo ""
    echo "1) Docker (Recommended)"
    echo "2) Native Installation"
    echo "3) Exit"
    echo ""
    read -p "Enter choice [1-3]: " choice
    
    case $choice in
        1)
            setup_docker
            ;;
        2)
            setup_native
            ;;
        3)
            echo "Exiting..."
            exit 0
            ;;
        *)
            echo "Invalid choice. Exiting..."
            exit 1
            ;;
    esac
}

main
