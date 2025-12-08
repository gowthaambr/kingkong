-- Link Restaurant Platform - Sample Seed Data
-- This file contains sample data for testing and development

-- ============================================================================
-- SAMPLE RESTAURANT
-- ============================================================================

INSERT INTO restaurants (id, name, slug, email, phone, address, city, state, country, primary_color, secondary_color)
VALUES (
    '550e8400-e29b-41d4-a716-446655440000',
    'The Cozy Cafe',
    'cozy-cafe',
    'owner@cozycafe.com',
    '+91-9876543210',
    '123 Main Street, MG Road',
    'Bangalore',
    'Karnataka',
    'India',
    '#FF6B35',
    '#004E89'
);

-- ============================================================================
-- SAMPLE USER (Restaurant Owner)
-- ============================================================================

-- Password: password123 (hashed with bcrypt)
INSERT INTO users (restaurant_id, email, password_hash, full_name, phone, role)
VALUES (
    '550e8400-e29b-41d4-a716-446655440000',
    'owner@cozycafe.com',
    '$2b$10$rKjHPvXqZ8YvZ6vZqZ6vZeZ6vZqZ6vZqZ6vZqZ6vZqZ6vZqZ6vZqZ', -- password123
    'John Doe',
    '+91-9876543210',
    'owner'
);

-- ============================================================================
-- SAMPLE MENU CATEGORIES
-- ============================================================================

INSERT INTO menu_categories (id, restaurant_id, name, description, display_order) VALUES
('650e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440000', 'Appetizers', 'Start your meal right', 1),
('650e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440000', 'Main Course', 'Our signature dishes', 2),
('650e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440000', 'Desserts', 'Sweet endings', 3),
('650e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440000', 'Beverages', 'Refresh yourself', 4);

-- ============================================================================
-- SAMPLE MENU ITEMS
-- ============================================================================

-- Appetizers
INSERT INTO menu_items (id, restaurant_id, category_id, name, description, base_price, is_vegetarian, spice_level, display_order) VALUES
('750e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440001', 'Caesar Salad', 'Fresh romaine lettuce with parmesan cheese and croutons', 249.00, true, 0, 1),
('750e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440001', 'Chicken Wings', 'Crispy wings tossed in your choice of sauce', 349.00, false, 2, 2),
('750e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440001', 'Spring Rolls', 'Crispy vegetable spring rolls with sweet chili sauce', 199.00, true, 1, 3);

-- Main Course
INSERT INTO menu_items (id, restaurant_id, category_id, name, description, base_price, is_vegetarian, is_featured, spice_level, display_order) VALUES
('750e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440002', 'Margherita Pizza', 'Classic pizza with tomato sauce, mozzarella, and basil', 399.00, true, true, 0, 1),
('750e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440002', 'Grilled Chicken Burger', 'Juicy grilled chicken with lettuce, tomato, and special sauce', 349.00, false, true, 1, 2),
('750e8400-e29b-41d4-a716-446655440006', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440002', 'Paneer Tikka Masala', 'Cottage cheese in rich tomato gravy', 329.00, true, false, 2, 3);

-- Desserts
INSERT INTO menu_items (id, restaurant_id, category_id, name, description, base_price, is_vegetarian, display_order) VALUES
('750e8400-e29b-41d4-a716-446655440007', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440003', 'Chocolate Lava Cake', 'Warm chocolate cake with a molten center', 199.00, true, 1),
('750e8400-e29b-41d4-a716-446655440008', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440003', 'Tiramisu', 'Classic Italian dessert with coffee and mascarpone', 229.00, true, 2);

-- Beverages
INSERT INTO menu_items (id, restaurant_id, category_id, name, description, base_price, is_vegetarian, display_order) VALUES
('750e8400-e29b-41d4-a716-446655440009', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440004', 'Fresh Juice', 'Freshly squeezed orange or apple juice', 99.00, true, 1),
('750e8400-e29b-41d4-a716-446655440010', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440004', 'Cappuccino', 'Classic Italian coffee with steamed milk', 129.00, true, 2),
('750e8400-e29b-41d4-a716-446655440011', '550e8400-e29b-41d4-a716-446655440000', '650e8400-e29b-41d4-a716-446655440004', 'Masala Chai', 'Traditional Indian spiced tea', 49.00, true, 3);

-- ============================================================================
-- SAMPLE VARIANTS (for Pizza)
-- ============================================================================

-- Size variant group for Pizza
INSERT INTO item_variant_groups (id, menu_item_id, name, is_required, min_selections, max_selections, display_order)
VALUES ('850e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440004', 'Size', true, 1, 1, 1);

-- Size options
INSERT INTO item_variants (variant_group_id, name, price_adjustment, is_default, display_order) VALUES
('850e8400-e29b-41d4-a716-446655440001', 'Small (8")', 0.00, true, 1),
('850e8400-e29b-41d4-a716-446655440001', 'Medium (10")', 100.00, false, 2),
('850e8400-e29b-41d4-a716-446655440001', 'Large (12")', 200.00, false, 3);

-- Crust variant group for Pizza
INSERT INTO item_variant_groups (id, menu_item_id, name, is_required, min_selections, max_selections, display_order)
VALUES ('850e8400-e29b-41d4-a716-446655440002', '750e8400-e29b-41d4-a716-446655440004', 'Crust', true, 1, 1, 2);

-- Crust options
INSERT INTO item_variants (variant_group_id, name, price_adjustment, is_default, display_order) VALUES
('850e8400-e29b-41d4-a716-446655440002', 'Thin Crust', 0.00, true, 1),
('850e8400-e29b-41d4-a716-446655440002', 'Thick Crust', 50.00, false, 2),
('850e8400-e29b-41d4-a716-446655440002', 'Cheese Burst', 100.00, false, 3);

-- ============================================================================
-- SAMPLE ADDON GROUPS
-- ============================================================================

-- Toppings addon group
INSERT INTO addon_groups (id, restaurant_id, name, is_required, min_selections, max_selections)
VALUES ('950e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440000', 'Extra Toppings', false, 0, NULL);

-- Toppings
INSERT INTO addons (addon_group_id, name, price, display_order) VALUES
('950e8400-e29b-41d4-a716-446655440001', 'Extra Cheese', 50.00, 1),
('950e8400-e29b-41d4-a716-446655440001', 'Mushrooms', 40.00, 2),
('950e8400-e29b-41d4-a716-446655440001', 'Olives', 40.00, 3),
('950e8400-e29b-41d4-a716-446655440001', 'Jalapenos', 30.00, 4),
('950e8400-e29b-41d4-a716-446655440001', 'Onions', 20.00, 5);

-- Link pizza to toppings addon group
INSERT INTO menu_item_addon_groups (menu_item_id, addon_group_id)
VALUES ('750e8400-e29b-41d4-a716-446655440004', '950e8400-e29b-41d4-a716-446655440001');

-- ============================================================================
-- SAMPLE RESTAURANT TABLES
-- ============================================================================

INSERT INTO restaurant_tables (restaurant_id, table_number, table_name, section, capacity, qr_token) VALUES
('550e8400-e29b-41d4-a716-446655440000', '1', 'Table 1', 'Indoor', 2, 'QR_TABLE_001'),
('550e8400-e29b-41d4-a716-446655440000', '2', 'Table 2', 'Indoor', 4, 'QR_TABLE_002'),
('550e8400-e29b-41d4-a716-446655440000', '3', 'Table 3', 'Indoor', 4, 'QR_TABLE_003'),
('550e8400-e29b-41d4-a716-446655440000', '4', 'Table 4', 'Outdoor', 6, 'QR_TABLE_004'),
('550e8400-e29b-41d4-a716-446655440000', '5', 'Table 5', 'Outdoor', 4, 'QR_TABLE_005');

-- ============================================================================
-- SAMPLE ORDER
-- ============================================================================

INSERT INTO orders (id, restaurant_id, table_id, order_number, customer_name, status, subtotal, tax_amount, total)
SELECT 
    'a50e8400-e29b-41d4-a716-446655440001',
    '550e8400-e29b-41d4-a716-446655440000',
    id,
    'ORD-' || TO_CHAR(CURRENT_DATE, 'YYYYMMDD') || '-001',
    'John Smith',
    'pending',
    748.00,
    134.64,
    882.64
FROM restaurant_tables 
WHERE table_number = '2' 
LIMIT 1;

-- Sample order items
INSERT INTO order_items (order_id, menu_item_id, item_name, quantity, unit_price, total_price)
VALUES 
('a50e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440004', 'Margherita Pizza', 1, 399.00, 399.00),
('a50e8400-e29b-41d4-a716-446655440001', '750e8400-e29b-41d4-a716-446655440005', 'Grilled Chicken Burger', 1, 349.00, 349.00);
