import { QrCode, ArrowRight, CheckCircle, Star, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-primary-100 rounded-full shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-gray-600 text-sm font-medium">
                Revolutionizing Restaurant Dining
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              The Modern Way to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Dine & Order
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Elevate your guest experience with our premium QR ordering system.
              Seamless, contactless, and designed for modern hospitality.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-6">
              {[
                "Instant Setup",
                "Zero Commissions",
                "Lightning Fast",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="p-1 bg-primary-100 rounded-full">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-gray-900/30 hover:-translate-y-1"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                View Demo
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                    {/* Placeholder avatars - in real app use images */}
                    <div className={`w-full h-full bg-gradient-to-br from-gray-100 to-gray-300`}></div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Loved by <span className="text-gray-900 font-bold">500+</span> restaurants
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative perspective-1000">
            {/* Main Phone Card */}
            <div className="relative z-10 transform transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-6 preserve-3d">
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/50 p-4 max-w-[320px] mx-auto rotate-[-6deg] hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-[2.5rem] pointer-events-none"></div>

                {/* Phone Frame */}
                <div className="bg-gray-900 rounded-[2rem] p-3 shadow-inner">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden h-[580px] relative">
                    {/* App Header */}
                    <div className="bg-white sticky top-0 z-10 px-6 py-4 border-b border-gray-50">
                      <div className="flex justify-between items-center mb-4">
                        <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                          <QrCode className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Good Morning! ☀️</h3>
                      <p className="text-sm text-gray-500">Ready to order?</p>
                    </div>

                    {/* Categories */}
                    <div className="px-6 py-2 flex gap-3 overflow-x-auto no-scrollbar">
                      {["All", "Coffee", "Pastry", "Food"].map((cat, i) => (
                        <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}>
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Items */}
                    <div className="p-6 space-y-4">
                      {[
                        { name: "Avocado Toast", price: "₹240", tag: "Bestseller" },
                        { name: "Cappuccino", price: "₹180", tag: "Hot" },
                        { name: "Berry Smoothie", price: "₹220", tag: "Fresh" },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-20 h-20 bg-gray-100 rounded-xl flex-shrink-0"></div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                                <h4 className="font-bold text-gray-900">{item.name}</h4>
                                <span className="text-[10px] font-bold px-2 py-1 bg-primary-50 text-primary-600 rounded-full">{item.tag}</span>
                              </div>
                              <p className="text-gray-500 text-xs mt-1">Fresh ingredients...</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <span className="font-bold text-gray-900">{item.price}</span>
                              <button className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm">+</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Floating Cart */}
                    <div className="absolute bottom-6 left-6 right-6 bg-gray-900 text-white p-4 rounded-2xl shadow-xl flex justify-between items-center backdrop-blur-md bg-opacity-90">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">2</div>
                        <div className="text-sm">
                          <p className="font-medium">View Cart</p>
                          <p className="opacity-70">₹420.00</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-float z-20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Sales Today</p>
                  <p className="text-lg font-bold text-gray-900">+24%</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-40 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 animate-float animation-delay-2000 z-20 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-600 fill-current" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">New Review</p>
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 italic">"Best ordering experience I've had!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
