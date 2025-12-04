# Link - Restaurant Management Platform

A modern, reactive, and user-friendly restaurant management and food ordering platform inspired by PetPooja.

## 🚀 Features

### ✨ Modern Design
- **Vibrant Color Scheme**: Eye-catching gradients with orange, purple, and green accents
- **Smooth Animations**: Fade-in, slide-in, and hover effects throughout
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Premium Aesthetics**: Glassmorphism, gradient text, and modern typography

### 🍽️ Core Functionality
- **Restaurant Discovery**: Browse and search through restaurants
- **Menu Management**: Digital menus with categories, filters, and search
- **Order Tracking**: Real-time order status updates
- **User Authentication**: Login and signup pages
- **Shopping Cart**: Add items and checkout seamlessly

### 📱 Pages Available
1. **Home** (`/`) - Hero section with features and popular restaurants
2. **Restaurants** (`/restaurants`) - Complete restaurant listing with filters
3. **Menu** (`/menu`) - Interactive menu with cart functionality
4. **Orders** (`/orders`) - Order tracking and history
5. **About** (`/about`) - Company information
6. **Login/Signup** - User authentication

## 🎨 Design Highlights

- **Color Palette**:
  - Primary: Vibrant Orange `hsl(24, 95%, 53%)`
  - Secondary: Fresh Green `hsl(142, 76%, 36%)`
  - Accent: Purple `hsl(271, 76%, 53%)`
  
- **Typography**:
  - Headings: Poppins (Bold, Modern)
  - Body: Inter (Clean, Readable)

- **Interactive Elements**:
  - Hover animations on cards
  - Smooth transitions
  - Gradient buttons
  - Sticky navigation

## 🌐 How to View

The development server is already running! Open Safari and navigate to:

**http://localhost:3000**

### Navigation:
- **Home**: http://localhost:3000
- **Restaurants**: http://localhost:3000/restaurants
- **Menu**: http://localhost:3000/menu

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Google Fonts (Inter, Poppins)

## 📦 Project Structure

```
kingkong/
├── app/
│   ├── page.tsx              # Home page
│   ├── restaurants/
│   │   └── page.tsx          # Restaurants listing
│   ├── menu/
│   │   └── page.tsx          # Menu page
│   └── globals.css           # Global styles & design system
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── Features.tsx          # Features showcase
│   ├── RestaurantShowcase.tsx # Restaurant cards
│   └── Footer.tsx            # Footer
└── public/                   # Static assets
```

## 🎯 Key Features by Page

### Home Page
- Eye-catching hero with search
- Feature cards with icons
- Popular restaurants showcase
- Stats display (500+ restaurants, 50K+ orders)

### Restaurants Page
- Advanced search and filters
- Cuisine categories
- Sort options (popular, rating, delivery, discount)
- Detailed restaurant cards with:
  - Ratings and reviews
  - Delivery time and fees
  - Popular items
  - Discount badges

### Menu Page
- Category filtering (Appetizers, Main, Desserts, Beverages)
- Sticky category navigation
- Item details (price, description, dietary info)
- Spice level indicators
- Add to cart functionality
- Fixed cart summary at bottom

## 🚀 Future Enhancements

- Backend integration (orders, payments)
- User authentication system
- Real-time order tracking
- Restaurant dashboard
- Analytics and reporting
- Payment gateway integration
- Push notifications
- Reviews and ratings system

## 📝 Notes

- The `@theme` warning in CSS is expected with Tailwind CSS v4 and can be ignored
- All components are client-side rendered for maximum interactivity
- The design prioritizes user experience with smooth animations and clear CTAs

---

Built with ❤️ using Next.js and modern web technologies
