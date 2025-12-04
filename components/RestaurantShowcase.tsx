'use client';

import { useState } from 'react';

export default function RestaurantShowcase() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Cuisines' },
        { id: 'italian', name: 'Italian' },
        { id: 'indian', name: 'Indian' },
        { id: 'chinese', name: 'Chinese' },
        { id: 'mexican', name: 'Mexican' },
        { id: 'japanese', name: 'Japanese' }
    ];

    const restaurants = [
        {
            id: 1,
            name: 'Bella Italia',
            category: 'italian',
            rating: 4.8,
            deliveryTime: '25-30 min',
            image: '/api/placeholder/400/300',
            cuisine: 'Italian',
            popular: 'Pizza, Pasta',
            discount: '20% OFF'
        },
        {
            id: 2,
            name: 'Spice Garden',
            category: 'indian',
            rating: 4.7,
            deliveryTime: '30-35 min',
            image: '/api/placeholder/400/300',
            cuisine: 'Indian',
            popular: 'Biryani, Curry',
            discount: '15% OFF'
        },
        {
            id: 3,
            name: 'Dragon Wok',
            category: 'chinese',
            rating: 4.6,
            deliveryTime: '20-25 min',
            image: '/api/placeholder/400/300',
            cuisine: 'Chinese',
            popular: 'Noodles, Dim Sum',
            discount: '25% OFF'
        },
        {
            id: 4,
            name: 'Taco Fiesta',
            category: 'mexican',
            rating: 4.9,
            deliveryTime: '15-20 min',
            image: '/api/placeholder/400/300',
            cuisine: 'Mexican',
            popular: 'Tacos, Burritos',
            discount: '30% OFF'
        },
        {
            id: 5,
            name: 'Sushi Master',
            category: 'japanese',
            rating: 4.8,
            deliveryTime: '35-40 min',
            image: '/api/placeholder/400/300',
            cuisine: 'Japanese',
            popular: 'Sushi, Ramen',
            discount: '10% OFF'
        },
        {
            id: 6,
            name: 'Pasta Paradise',
            category: 'italian',
            rating: 4.7,
            deliveryTime: '25-30 min',
            image: '/api/placeholder/400/300',
            cuisine: 'Italian',
            popular: 'Pasta, Risotto',
            discount: '18% OFF'
        }
    ];

    const filteredRestaurants = activeCategory === 'all'
        ? restaurants
        : restaurants.filter(r => r.category === activeCategory);

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Popular <span className="gradient-text">Restaurants</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover amazing restaurants near you with exclusive deals
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Restaurant Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRestaurants.map((restaurant, index) => (
                        <div
                            key={restaurant.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 bg-gradient-to-br from-[hsl(24,95%,90%)] to-[hsl(271,76%,90%)] overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-20 h-20 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                {/* Discount Badge */}
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(0,84%,60%)] to-[hsl(0,84%,70%)] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                    {restaurant.discount}
                                </div>
                                {/* Rating Badge */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="font-bold text-gray-800">{restaurant.rating}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-[hsl(24,95%,53%)] transition-colors">
                                    {restaurant.name}
                                </h3>
                                <p className="text-gray-600 mb-3">{restaurant.cuisine} • {restaurant.popular}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm">{restaurant.deliveryTime}</span>
                                    </div>
                                    <button className="bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="bg-white text-gray-700 px-10 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-[hsl(24,95%,53%)] hover:text-[hsl(24,95%,53%)] transform hover:scale-105 transition-all duration-300">
                        View All Restaurants
                    </button>
                </div>
            </div>
        </section>
    );
}
