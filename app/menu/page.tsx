'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MenuPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [cart, setCart] = useState<any[]>([]);

    const categories = [
        { id: 'all', name: 'All Items', icon: '🍽️' },
        { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
        { id: 'main', name: 'Main Course', icon: '🍛' },
        { id: 'desserts', name: 'Desserts', icon: '🍰' },
        { id: 'beverages', name: 'Beverages', icon: '🥤' }
    ];

    const menuItems = [
        {
            id: 1,
            name: 'Caesar Salad',
            category: 'appetizers',
            price: 8.99,
            description: 'Fresh romaine lettuce with parmesan cheese and croutons',
            isVeg: true,
            isPopular: true,
            spiceLevel: 0
        },
        {
            id: 2,
            name: 'Chicken Wings',
            category: 'appetizers',
            price: 12.99,
            description: 'Crispy wings tossed in your choice of sauce',
            isVeg: false,
            isPopular: true,
            spiceLevel: 2
        },
        {
            id: 3,
            name: 'Grilled Salmon',
            category: 'main',
            price: 24.99,
            description: 'Fresh Atlantic salmon with herbs and lemon butter',
            isVeg: false,
            isPopular: true,
            spiceLevel: 0
        },
        {
            id: 4,
            name: 'Vegetable Biryani',
            category: 'main',
            price: 16.99,
            description: 'Aromatic basmati rice with mixed vegetables and spices',
            isVeg: true,
            isPopular: true,
            spiceLevel: 2
        },
        {
            id: 5,
            name: 'Margherita Pizza',
            category: 'main',
            price: 14.99,
            description: 'Classic pizza with tomato sauce, mozzarella, and basil',
            isVeg: true,
            isPopular: false,
            spiceLevel: 0
        },
        {
            id: 6,
            name: 'Chocolate Lava Cake',
            category: 'desserts',
            price: 7.99,
            description: 'Warm chocolate cake with a molten center',
            isVeg: true,
            isPopular: true,
            spiceLevel: 0
        },
        {
            id: 7,
            name: 'Tiramisu',
            category: 'desserts',
            price: 8.99,
            description: 'Classic Italian dessert with coffee and mascarpone',
            isVeg: true,
            isPopular: false,
            spiceLevel: 0
        },
        {
            id: 8,
            name: 'Fresh Juice',
            category: 'beverages',
            price: 4.99,
            description: 'Freshly squeezed orange or apple juice',
            isVeg: true,
            isPopular: false,
            spiceLevel: 0
        }
    ];

    const filteredItems = selectedCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    const addToCart = (item: any) => {
        setCart([...cart, item]);
    };

    const getSpiceIndicator = (level: number) => {
        return '🌶️'.repeat(level);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-gradient-to-br from-[hsl(24,95%,98%)] via-white to-[hsl(271,76%,98%)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center animate-fade-in">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                            Our <span className="gradient-text">Menu</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our delicious selection of freshly prepared dishes
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <span className="text-2xl">{category.icon}</span>
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Items Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {/* Image Container */}
                                <div className="relative h-48 bg-gradient-to-br from-[hsl(24,95%,90%)] to-[hsl(271,76%,90%)] overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-6xl">
                                            {item.category === 'appetizers' && '🥗'}
                                            {item.category === 'main' && '🍛'}
                                            {item.category === 'desserts' && '🍰'}
                                            {item.category === 'beverages' && '🥤'}
                                        </span>
                                    </div>

                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {item.isVeg && (
                                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                VEG
                                            </span>
                                        )}
                                        {item.isPopular && (
                                            <span className="bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white px-3 py-1 rounded-full text-xs font-bold">
                                                POPULAR
                                            </span>
                                        )}
                                    </div>

                                    {item.spiceLevel > 0 && (
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                                            {getSpiceIndicator(item.spiceLevel)}
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold group-hover:text-[hsl(24,95%,53%)] transition-colors">
                                            {item.name}
                                        </h3>
                                        <span className="text-2xl font-bold gradient-text">
                                            ${item.price}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {item.description}
                                    </p>

                                    <button
                                        onClick={() => addToCart(item)}
                                        className="w-full bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cart Summary (Fixed Bottom) */}
            {cart.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-4 border-[hsl(24,95%,53%)] z-50 animate-slide-in-left">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">
                                    {cart.length} item{cart.length > 1 ? 's' : ''} in cart
                                </p>
                                <p className="text-2xl font-bold gradient-text">
                                    ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                                </p>
                            </div>
                            <button className="bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
