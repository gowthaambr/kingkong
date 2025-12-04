'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white font-bold text-2xl px-4 py-2 rounded-lg">
                Link
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/restaurants"
              className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium"
            >
              Restaurants
            </Link>
            <Link
              href="/menu"
              className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium"
            >
              Menu
            </Link>
            <Link
              href="/orders"
              className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium"
            >
              Orders
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/restaurants"
                className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Restaurants
              </Link>
              <Link
                href="/menu"
                className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/orders"
                className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Orders
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                <Link
                  href="/login"
                  className="text-center text-gray-700 hover:text-[hsl(24,95%,53%)] transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-center bg-gradient-to-r from-[hsl(24,95%,53%)] to-[hsl(271,76%,53%)] text-white px-6 py-2.5 rounded-full font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
