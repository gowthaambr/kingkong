# API Documentation - Link Restaurant Platform

## Overview
This document describes the RESTful API endpoints for the Link Restaurant Platform built with Next.js App Router.

## Base URL
```
Development: http://localhost:3000/api
Production: https://your-domain.com/api
```

## Authentication
Currently, the API is open. Authentication will be added in Sprint 2.

## Endpoints

### Restaurants

#### GET /api/restaurants
Fetch all active restaurants with pagination.

**Query Parameters:**
- `limit` (optional): Number of results (default: 10)
- `offset` (optional): Pagination offset (default: 0)

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "The Cozy Cafe",
      "slug": "cozy-cafe",
      "email": "owner@cozycafe.com",
      "phone": "+91-9876543210",
      "address": "123 Main Street",
      "city": "Bangalore",
      "is_active": true,
      "created_at": "2024-12-05T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 100,
    "limit": 10,
    "offset": 0,
    "hasMore": true
  }
}
```

#### POST /api/restaurants
Create a new restaurant.

**Request Body:**
```json
{
  "name": "New Restaurant",
  "slug": "new-restaurant",
  "email": "owner@restaurant.com",
  "phone": "+91-1234567890",
  "address": "123 Street",
  "city": "Mumbai"
}
```

**Response:** `201 Created`
```json
{
  "id": "uuid",
  "name": "New Restaurant",
  ...
}
```

#### GET /api/restaurants/[slug]
Fetch a single restaurant by slug.

**Response:**
```json
{
  "id": "uuid",
  "name": "The Cozy Cafe",
  "slug": "cozy-cafe",
  ...
}
```

#### PUT /api/restaurants/[slug]
Update a restaurant.

**Request Body:**
```json
{
  "name": "Updated Name",
  "phone": "+91-9999999999"
}
```

#### DELETE /api/restaurants/[slug]
Soft delete a restaurant (sets `is_active` to false).

**Response:**
```json
{
  "message": "Restaurant deleted successfully",
  "data": { ... }
}
```

---

### Menu

#### GET /api/restaurants/[slug]/menu
Fetch complete menu for a restaurant including categories, items, and variants.

**Response:**
```json
{
  "restaurant_id": "uuid",
  "categories": [
    {
      "id": "uuid",
      "name": "Appetizers",
      "description": "Start your meal right",
      "display_order": 1,
      "menu_items": [
        {
          "id": "uuid",
          "name": "Caesar Salad",
          "description": "Fresh romaine lettuce...",
          "base_price": 249.00,
          "is_vegetarian": true,
          "is_available": true,
          "item_variant_groups": [
            {
              "id": "uuid",
              "name": "Size",
              "is_required": true,
              "item_variants": [
                {
                  "id": "uuid",
                  "name": "Small",
                  "price_adjustment": 0,
                  "is_default": true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

---

### Orders

#### GET /api/orders
Fetch orders with optional filtering.

**Query Parameters:**
- `restaurant_id` (optional): Filter by restaurant
- `status` (optional): Filter by status (pending, preparing, ready, completed, cancelled)
- `limit` (optional): Number of results (default: 20)

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "order_number": "ORD-20241205-001",
      "restaurant_id": "uuid",
      "table_id": "uuid",
      "status": "pending",
      "subtotal": 748.00,
      "tax_amount": 134.64,
      "total": 882.64,
      "created_at": "2024-12-05T00:00:00Z",
      "restaurant_tables": {
        "table_number": "2",
        "table_name": "Table 2",
        "section": "Indoor"
      },
      "order_items": [
        {
          "id": "uuid",
          "item_name": "Margherita Pizza",
          "quantity": 1,
          "unit_price": 399.00,
          "total_price": 399.00,
          "order_item_variants": [],
          "order_item_addons": []
        }
      ]
    }
  ]
}
```

#### POST /api/orders
Create a new order.

**Request Body:**
```json
{
  "restaurant_id": "uuid",
  "table_id": "uuid",
  "customer_name": "John Smith",
  "customer_phone": "+91-9876543210",
  "order_items": [
    {
      "menu_item_id": "uuid",
      "item_name": "Margherita Pizza",
      "quantity": 1,
      "unit_price": 399.00,
      "total_price": 399.00
    }
  ],
  "subtotal": 399.00,
  "tax_amount": 71.82,
  "total": 470.82,
  "special_instructions": "Extra cheese please"
}
```

**Response:** `201 Created`
```json
{
  "id": "uuid",
  "order_number": "ORD-20241205-001",
  "status": "pending",
  ...
}
```

---

## Error Responses

All endpoints return consistent error responses:

```json
{
  "error": "Error message",
  "details": "Detailed error information (in development)"
}
```

**Status Codes:**
- `200 OK`: Successful GET request
- `201 Created`: Successful POST request
- `400 Bad Request`: Invalid request data
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

---

## API Structure

```
app/api/
├── restaurants/
│   ├── route.ts              # GET, POST /api/restaurants
│   ├── [slug]/
│   │   ├── route.ts          # GET, PUT, DELETE /api/restaurants/[slug]
│   │   └── menu/
│   │       └── route.ts      # GET /api/restaurants/[slug]/menu
└── orders/
    └── route.ts              # GET, POST /api/orders
```

---

## Future Endpoints (Sprint 2+)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Menu Management
- `POST /api/menu/categories` - Create category
- `PUT /api/menu/categories/[id]` - Update category
- `POST /api/menu/items` - Create menu item
- `PUT /api/menu/items/[id]` - Update menu item

### Tables
- `GET /api/tables` - List tables
- `POST /api/tables` - Create table
- `GET /api/tables/[id]/qr` - Generate QR code

### Analytics
- `GET /api/analytics/dashboard` - Dashboard stats
- `GET /api/analytics/sales` - Sales data
- `GET /api/analytics/items` - Popular items

---

## Testing

### Using cURL

```bash
# Get all restaurants
curl http://localhost:3000/api/restaurants

# Get restaurant by slug
curl http://localhost:3000/api/restaurants/cozy-cafe

# Create order
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "restaurant_id": "uuid",
    "table_id": "uuid",
    "order_items": [...],
    "subtotal": 399.00,
    "total": 470.82
  }'
```

### Using JavaScript/TypeScript

```typescript
// Fetch restaurants
const response = await fetch('/api/restaurants?limit=10')
const { data, pagination } = await response.json()

// Create order
const order = await fetch('/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    restaurant_id: 'uuid',
    order_items: [...],
    total: 470.82
  })
})
```

---

## Notes

- All timestamps are in ISO 8601 format (UTC)
- UUIDs are used for all IDs
- Prices are stored as DECIMAL(10,2)
- Soft deletes are used (is_active flag)
- All API routes use Next.js App Router conventions

---

**Last Updated**: December 2024  
**Version**: 1.0  
**Sprint**: 1, Week 1
