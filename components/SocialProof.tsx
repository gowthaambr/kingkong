"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Owner, Chai Point Cafe",
    content:
      "Restaurant OS reduced our order errors by 80%. Customers love scanning and ordering from their phones. Setup took just 20 minutes!",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Manager, The Breakfast Club",
    content:
      "We handle 150+ orders daily with ease now. The real-time dashboard is a game-changer for our kitchen staff.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Owner, Spice Garden",
    content:
      "No more commission fees like food delivery apps. Simple monthly pricing and our customers order directly. Revenue up 25%!",
    rating: 5,
  },
];

const stats = [
  { value: "50+", label: "Restaurants" },
  { value: "10,000+", label: "Orders Processed" },
  { value: "99.9%", label: "Uptime" },
  { value: "< 30 min", label: "Setup Time" },
];

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl font-bold text-primary-500">{stat.value}</p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Restaurants Across Bangalore
          </h2>
          <p className="text-xl text-gray-600">
            See what restaurant owners are saying about Restaurant OS
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos placeholder */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6">
            Trusted by leading cafes and restaurants
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[
              "Cafe Sunrise",
              "The Breakfast Club",
              "Spice Garden",
              "Chai Point",
              "Urban Cafe",
            ].map((name, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600 font-medium"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
