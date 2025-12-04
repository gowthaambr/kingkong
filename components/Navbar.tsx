"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Ordr Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">Ordr</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">
              How it Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
              Pricing
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 transition"
            >
              Login
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900">
              How it Works
            </a>
            <a href="#pricing" className="block text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#faq" className="block text-gray-600 hover:text-gray-900">
              FAQ
            </a>
            <hr className="border-gray-100" />
            <a href="#contact" className="block text-gray-700 font-medium">
              Login
            </a>
            <a
              href="#contact"
              className="block w-full text-center px-4 py-2 bg-primary-500 text-white font-medium rounded-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
