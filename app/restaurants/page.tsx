'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RestaurantsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCuisine, setSelectedCuisine] = useState('all');
    const [sortBy, setSortBy] = useState('popular');

    const cuisines = ['All', 'Italian', 'Indian', 'Chinese', 'Mexican', 'Japanese', 'Thai', 'American'];

    const restaurants = [
        {
            id: 1,
            name: 'Bella Italia',
            cuisine: 'Italian',
            rating: 4.8,
            reviews: 1250,
            deliveryTime: '25-30 min',
            deliveryFee: '$2.99',
            minOrder: '$15',
            popular: ['Margherita Pizza', 'Carbonara', 'Tiramisu'],
            discount: '20% OFF',
            isNew: false,
            isFeatured: true
        },
        {
            id: 2,
            name: 'Spice Garden',
            cuisine: 'Indian',
            rating: 4.7,
            reviews: 980,
            deliveryTime: '30-35 min',
            deliveryFee: '$3.49',
            minOrder: '$20',
            popular: ['Chicken Biryani', 'Butter Chicken', 'Naan'],
            discount: '15% OFF',
            isNew: true,
            isFeatured: true
        },
        {
            id: 3,
            name: 'Dragon Wok',
            cuisine: 'Chinese',
            rating: 4.6,
            reviews: 756,
            deliveryTime: '20-25 min',
            deliveryFee: '$2.49',
            minOrder: '$12',
            popular: ['Kung Pao Chicken', 'Fried Rice', 'Spring Rolls'],
            discount: '25% OFF',
            isNew: false,
            isFeatured: false
        },
        {
            id: 4,
            name: 'Taco Fiesta',
            cuisine: 'Mexican',
            rating: 4.9,
            reviews: 1450,
            deliveryTime: '15-20 min',
            deliveryFee: '$1.99',
            minOrder: '$10',
            popular: ['Beef Tacos', 'Chicken Burrito', 'Guacamole'],
            discount: '30% OFF',
            isNew: false,
            isFeatured: true
        },
        {
            id: 5,
            name: 'Sushi Master',
            cuisine: 'Japanese',
            rating: 4.8,
            reviews: 1120,
            deliveryTime: '35-40 min',
            deliveryFee: '$4.99',
            minOrder: '$25',
            popular: ['California Roll', 'Salmon Sashimi', 'Miso Soup'],
            discount: '10% OFF',
            isNew: true,
            isFeatured: true
        },
        {
            id: 6,
            name: 'Thai Orchid',
            cuisine: 'Thai',
            rating: 4.7,
            reviews: 890,
            deliveryTime: '28-33 min',
            deliveryFee: '$3.99',
            minOrder: '$18',
            popular: ['Pad Thai', 'Green Curry', 'Tom Yum Soup'],
            discount: '18% OFF',
            isNew: false,
            isFeatured: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[hsl(24,95%,98%)] via-white to-[hsl(271,76%,98%)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                            Discover Amazing <span className="gradient-text">Restaurants</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Browse through hundreds of restaurants and order your favorite food
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for restaurants, cuisines, or dishes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[hsl(24,95%,53%)] focus:outline-none transition-colors text-gray-700 shadow-lg"
                            />
                            <svg
                                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        {/* Cuisine Filter */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            {cuisines.map((cuisine) => (
                                <button
                                    key={cuisine}
                                    onClick={() => setSelectedCuisine(cuisine.toLowerCase())}
                                    className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${selectedCuisine === cuisine.toLowerCase()
                                            ? 'bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white shadow-lg scale-105'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                        }`}
                                >
                                    {cuisine}
                                </button>
                            ))}
                        </div>

                        {/* Sort Options */}
                        <div className="flex items-center justify-center gap-4">
                            <span className="text-gray-600 font-medium">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[hsl(24,95%,53%)] focus:outline-none transition-colors bg-white"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="rating">Highest Rated</option>
                                <option value="delivery">Fastest Delivery</option>
                                <option value="discount">Best Offers</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Restaurants Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {restaurants.map((restaurant, index) => (
                            <div
                                key={restaurant.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Container */}
                                <div className="relative h-56 bg-gradient-to-br from-[hsl(24,95%,90%)] to-[hsl(271,76%,90%)] overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </div>

                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {restaurant.isNew && (
                                            <span className="bg-gradient-to-r from-[hsl(142,76%,36%)] to-[hsl(142,76%,46%)] text-white px-3 py-1 rounded-full text-xs font-bold">
                                                NEW
                                            </span>
                                        )}
                                        {restaurant.isFeatured && (
                                            <span className="bg-gradient-to-r from-[hsl(271,76%,53%)] to-[hsl(271,76%,63%)] text-white px-3 py-1 rounded-full text-xs font-bold">
                                                FEATURED
                                            </span>
                                        )}
                                    </div>

                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(0,84%,60%)] to-[hsl(0,84%,70%)] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                        {restaurant.discount}
                                    </div>

                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="font-bold text-gray-800">{restaurant.rating}</span>
                                        <span className="text-gray-600 text-sm">({restaurant.reviews})</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[hsl(24,95%,53%)] transition-colors">
                                        {restaurant.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>

                                    <div className="mb-4">
                                        <p className="text-sm text-gray-500 mb-2">Popular items:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {restaurant.popular.map((item, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                                        <div>
                                            <p className="text-xs text-gray-500">Delivery</p>
                                            <p className="font-semibold text-sm">{restaurant.deliveryTime}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Fee</p>
                                            <p className="font-semibold text-sm">{restaurant.deliveryFee}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Min Order</p>
                                            <p className="font-semibold text-sm">{restaurant.minOrder}</p>
                                        </div>
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                        View Menu
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
