"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  UtensilsCrossed,
  Beer,
  Cake,
  Building2,
  Truck,
} from "lucide-react";

const useCases = [
  {
    icon: Coffee,
    title: "Cafes & Coffee Shops",
    description:
      "Quick orders, no wait times. Perfect for busy cafes where customers want to order from their seat.",
    features: ["Fast ordering", "Repeat order history", "Loyalty integration"],
    color: "bg-amber-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Diners",
    description:
      "Full menu with variants and add-ons. Handle complex orders with ease.",
    features: [
      "Variant management",
      "Add-ons & customization",
      "Course-based ordering",
    ],
    color: "bg-primary-500",
  },
  {
    icon: Beer,
    title: "Bars & Pubs",
    description:
      "Quick drink orders without flagging down waiters. Age verification built-in.",
    features: ["Quick reorder", "Tab management", "Happy hour pricing"],
    color: "bg-purple-500",
  },
  {
    icon: Cake,
    title: "Bakeries & Dessert Shops",
    description:
      "Showcase your creations with beautiful photos. Pre-orders for custom cakes.",
    features: ["Photo galleries", "Pre-order system", "Custom requests"],
    color: "bg-pink-500",
  },
  {
    icon: Building2,
    title: "Food Courts",
    description:
      "Multiple vendors, one ordering system. Customers order from different stalls seamlessly.",
    features: ["Multi-vendor", "Unified checkout", "Stall-wise splitting"],
    color: "bg-blue-500",
  },
  {
    icon: Truck,
    title: "Cloud Kitchens",
    description:
      "Online ordering without third-party commissions. Direct customer relationships.",
    features: [
      "Zero commissions",
      "Delivery integration",
      "Customer data ownership",
    ],
    color: "bg-secondary-500",
  },
];

export default function UseCases() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built for Every Type of Restaurant
          </h2>
          <p className="text-xl text-gray-600">
            Whether you run a cozy cafe or a bustling restaurant, Restaurant OS
            adapts to your needs
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-12 h-12 ${useCase.color} rounded-xl flex items-center justify-center mb-4`}
              >
                <useCase.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {useCase.title}
              </h3>

              <p className="text-gray-600 mb-4">{useCase.description}</p>

              <ul className="space-y-2">
                {useCase.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Don&apos;t see your use case?</p>
          <a
            href="/contact"
            className="inline-flex px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition"
          >
            Talk to Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
