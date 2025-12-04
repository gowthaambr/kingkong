# 🐳 Docker Setup Guide for Link Restaurant Platform

This guide will help you run the Link platform using Docker and Docker Compose.

## 📋 Prerequisites

- Docker Desktop installed ([Download here](https://www.docker.com/products/docker-desktop))
- Docker Compose (included with Docker Desktop)

## 🚀 Quick Start

### Development Mode

Run the application in development mode with hot-reload:

```bash
# Build and start all services
docker-compose -f docker-compose.dev.yml up --build

# Or run in detached mode (background)
docker-compose -f docker-compose.dev.yml up -d --build
```

Access the application:
- **Web App**: http://localhost:3000
- **Database UI (Adminer)**: http://localhost:8080
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

### Production Mode

Run the optimized production build:

```bash
# Build and start the web service only
docker-compose up --build

# Or with all services including database
docker-compose up -d --build
```

Access the application:
- **Web App**: http://localhost:3000

## 📦 Available Services

### Development (`docker-compose.dev.yml`)
- **web-dev**: Next.js development server with hot-reload
- **postgres**: PostgreSQL 16 database
- **redis**: Redis cache
- **adminer**: Database management UI

### Production (`docker-compose.yml`)
- **web**: Optimized Next.js production build
- **postgres**: PostgreSQL 16 database
- **redis**: Redis cache
- **nginx**: Reverse proxy (optional, use with `--profile production`)

## 🛠️ Common Commands

### Start Services
```bash
# Development
docker-compose -f docker-compose.dev.yml up

# Production
docker-compose up

# With Nginx reverse proxy
docker-compose --profile production up
```

### Stop Services
```bash
# Stop development
docker-compose -f docker-compose.dev.yml down

# Stop production
docker-compose down

# Stop and remove volumes (WARNING: deletes data)
docker-compose down -v
```

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f web

# Development
docker-compose -f docker-compose.dev.yml logs -f web-dev
```

### Rebuild Containers
```bash
# Development
docker-compose -f docker-compose.dev.yml up --build

# Production
docker-compose up --build

# Force rebuild without cache
docker-compose build --no-cache
```

### Execute Commands in Container
```bash
# Access container shell
docker-compose exec web sh

# Run npm commands
docker-compose exec web npm install <package>

# Database shell
docker-compose exec postgres psql -U linkuser -d linkdb
```

## 🗄️ Database Management

### Using Adminer (Development)
1. Open http://localhost:8080
2. Login with:
   - **System**: PostgreSQL
   - **Server**: postgres
   - **Username**: linkuser
   - **Password**: linkpassword
   - **Database**: linkdb

### Using psql
```bash
docker-compose exec postgres psql -U linkuser -d linkdb
```

### Backup Database
```bash
docker-compose exec postgres pg_dump -U linkuser linkdb > backup.sql
```

### Restore Database
```bash
cat backup.sql | docker-compose exec -T postgres psql -U linkuser linkdb
```

## 🔧 Environment Variables

Create a `.env` file in the project root:

```env
# Database
POSTGRES_USER=linkuser
POSTGRES_PASSWORD=linkpassword
POSTGRES_DB=linkdb
DATABASE_URL=postgresql://linkuser:linkpassword@postgres:5432/linkdb

# Redis
REDIS_URL=redis://redis:6379

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=production
```

## 📊 Health Checks

All services include health checks. View status:

```bash
docker-compose ps
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>
```

### Container Won't Start
```bash
# View detailed logs
docker-compose logs web

# Remove all containers and volumes
docker-compose down -v

# Rebuild from scratch
docker-compose up --build --force-recreate
```

### Permission Issues
```bash
# Fix permissions (macOS/Linux)
sudo chown -R $USER:$USER .
```

### Clear Docker Cache
```bash
# Remove all unused containers, networks, images
docker system prune -a

# Remove all volumes (WARNING: deletes data)
docker volume prune
```

## 🚢 Deployment

### Build Production Image
```bash
docker build -t link-restaurant:latest .
```

### Tag and Push to Registry
```bash
# Tag image
docker tag link-restaurant:latest your-registry/link-restaurant:latest

# Push to registry
docker push your-registry/link-restaurant:latest
```

### Run Production Container
```bash
docker run -d \
  -p 3000:3000 \
  --name link-restaurant \
  --restart unless-stopped \
  link-restaurant:latest
```

## 📈 Performance Optimization

### Multi-stage Build
The production Dockerfile uses multi-stage builds to:
- Minimize final image size
- Separate build and runtime dependencies
- Improve security by running as non-root user

### Standalone Output
Next.js standalone output is enabled for:
- Smaller Docker images (~80% size reduction)
- Faster container startup
- Only necessary files included

## 🔒 Security Best Practices

1. **Non-root User**: Containers run as non-root user `nextjs`
2. **Minimal Base Image**: Uses Alpine Linux for smaller attack surface
3. **No Telemetry**: Next.js telemetry disabled
4. **Environment Variables**: Sensitive data in `.env` (not committed)

## 📝 Notes

- Development mode mounts your local code for hot-reload
- Production mode creates an optimized standalone build
- Database data persists in Docker volumes
- Nginx profile is optional for production deployments

## 🆘 Support

For issues or questions:
1. Check logs: `docker-compose logs -f`
2. Verify health: `docker-compose ps`
3. Rebuild: `docker-compose up --build`

---

**Happy Dockerizing! 🐳**
