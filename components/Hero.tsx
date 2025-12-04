import { QrCode, ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
              <span className="text-primary-600 text-sm font-medium">
                No commissions. No hidden fees.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Digital Menus &<br />
              <span className="text-primary-500">QR Ordering</span><br />
              for Restaurants
            </h1>

            <p className="text-xl text-gray-600 max-w-lg">
              Transform your restaurant with contactless ordering. Customers scan, browse, and order directly from their phones. You get a powerful dashboard to manage everything.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "Setup in under 30 minutes",
                "No app download required for customers",
                "Real-time order notifications",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition shadow-lg shadow-primary-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition"
              >
                See How It Works
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Trusted by <span className="font-semibold text-gray-700">50+ restaurants</span> in Bangalore
              </p>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              {/* Phone Mockup */}
              <div className="bg-gray-900 rounded-[2rem] p-3 max-w-[280px] mx-auto">
                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-100 px-4 py-2 flex justify-between text-xs text-gray-500">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <QrCode className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900">Cafe Sunrise</h3>
                      <p className="text-xs text-gray-500">Table 5</p>
                    </div>

                    <div className="space-y-2">
                      {["Breakfast", "Lunch", "Beverages", "Desserts"].map((cat, idx) => (
                        <div
                          key={idx}
                          className={`px-3 py-2 rounded-lg text-sm ${
                            idx === 0 ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {cat}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {[
                        { name: "Classic Pancakes", price: "₹199" },
                        { name: "Eggs Benedict", price: "₹249" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.price}</p>
                          </div>
                          <button className="w-7 h-7 bg-primary-500 text-white rounded-full text-lg font-bold">
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-4 top-1/4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <p className="text-xs text-gray-500">New Order!</p>
                <p className="font-semibold text-gray-900">Table 5 - ₹448</p>
              </div>

              <div className="absolute -left-4 bottom-1/4 bg-secondary-500 text-white rounded-lg shadow-lg p-3">
                <p className="text-xs opacity-80">Today&apos;s Orders</p>
                <p className="font-bold text-xl">127</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
