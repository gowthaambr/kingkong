'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search logic
        console.log('Searching for:', searchQuery);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(24,95%,98%)] via-white to-[hsl(271,76%,98%)]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(24,95%,53%)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-[hsl(271,76%,53%)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[hsl(142,76%,36%)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left animate-fade-in">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="gradient-text">Link</span> Your
                            <br />
                            Restaurant to
                            <br />
                            Success
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                            Streamline your restaurant operations with our all-in-one platform.
                            Manage orders, menus, inventory, and customer relationships effortlessly.
                        </p>

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="mb-8">
                            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        placeholder="Search for restaurants, cuisines, or dishes..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[hsl(24,95%,53%)] focus:outline-none transition-colors text-gray-700 shadow-md"
                                    />
                                    <svg
                                        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl">
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">500+</div>
                                <div className="text-gray-600 text-sm mt-1">Restaurants</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">50K+</div>
                                <div className="text-gray-600 text-sm mt-1">Orders Daily</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">4.8★</div>
                                <div className="text-gray-600 text-sm mt-1">Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Feature Cards */}
                    <div className="grid grid-cols-2 gap-6 animate-scale-in">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl card-hover">
                            <div className="w-12 h-12 bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(24,95%,63%)] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                            <p className="text-gray-600 text-sm">Get your orders delivered in 30 minutes or less</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl card-hover mt-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-[hsl(142,76%,36%)] to-[hsl(142,76%,46%)] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Quality Food</h3>
                            <p className="text-gray-600 text-sm">Fresh ingredients and authentic recipes</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl card-hover">
                            <div className="w-12 h-12 bg-gradient-to-r from-[hsl(271,76%,53%)] to-[hsl(271,76%,63%)] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Best Prices</h3>
                            <p className="text-gray-600 text-sm">Affordable pricing with great deals</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl card-hover mt-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(199,89%,58%)] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                            <p className="text-gray-600 text-sm">Always here to help you anytime</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
