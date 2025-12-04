"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Coffee,
  Clock,
  TrendingUp,
  Users,
  Smartphone,
  CreditCard,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Reduce Wait Times by 60%",
    description: "Customers order directly from their phones. No more waiting for a waiter to take orders during peak hours.",
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue by 25%",
    description: "Faster table turnover, fewer order errors, and upselling suggestions built into the menu.",
  },
  {
    icon: Users,
    title: "Handle Rush Hours Easily",
    description: "Even with limited staff, manage high-volume orders efficiently during breakfast and lunch rush.",
  },
  {
    icon: Smartphone,
    title: "No App Download Required",
    description: "Customers just scan the QR code. Menu opens in their browser instantly. Zero friction.",
  },
  {
    icon: CreditCard,
    title: "Zero Commission Fees",
    description: "Unlike food delivery apps, we don't take a cut of your sales. Simple monthly subscription.",
  },
  {
    icon: BarChart3,
    title: "Know Your Bestsellers",
    description: "Track which items sell most, peak ordering times, and customer preferences.",
  },
];

const testimonials = [
  {
    name: "Ananya Rao",
    role: "Owner, Brew & Bites Cafe",
    content: "We were skeptical at first, but within a week our order accuracy improved dramatically. Customers love the convenience.",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    role: "Manager, The Coffee House",
    content: "During weekend rush, we used to have 20-minute wait times. Now it's under 5 minutes. Game changer!",
    rating: 5,
  },
];

const features = [
  "Photo menus that make items irresistible",
  "Customization options (milk type, sugar level, etc.)",
  "Repeat order feature for regulars",
  "Special offers and combo deals",
  "Real-time availability updates",
  "Multi-language support",
];

export default function ForCafesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full">
                <Coffee className="w-4 h-4 text-amber-600" />
                <span className="text-amber-700 text-sm font-medium">
                  Built for Cafes & Coffee Shops
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Your Cafe Deserves<br />
                <span className="text-amber-600">Better Than Paper Menus</span>
              </h1>

              <p className="text-xl text-gray-600">
                Serve more customers with less staff. Let your customers order from their phones while you focus on making great coffee.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition shadow-lg"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/#demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  Request Demo
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Coffee className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sample Cafe Menu</h3>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Cappuccino", price: "₹180", tag: "Bestseller" },
                    { name: "Avocado Toast", price: "₹220", tag: null },
                    { name: "Cold Brew", price: "₹160", tag: "New" },
                    { name: "Blueberry Muffin", price: "₹120", tag: null },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg" />
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.price}</p>
                        </div>
                      </div>
                      {item.tag && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.tag === "Bestseller" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"
                        }`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Cafes Love Restaurant OS
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built features for the unique challenges of running a cafe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Features Your Cafe Needs
              </h2>
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">What Cafe Owners Say</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="border-l-4 border-amber-500 pl-4">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-2">&ldquo;{testimonial.content}&rdquo;</p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium text-gray-900">{testimonial.name}</span> - {testimonial.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your Cafe?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join cafes across Bangalore already using Restaurant OS. Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
