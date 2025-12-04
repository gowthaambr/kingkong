import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Pricing - Restaurant OS | QR Menu & Ordering System",
  description: "Simple, transparent pricing for Restaurant OS. No commissions, no hidden fees. Plans starting at ₹4,999/month.",
};

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Pricing That Makes Sense
          </h1>
          <p className="text-xl text-gray-600">
            No commissions. No per-order fees. Just simple monthly pricing that scales with your business.
          </p>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Compare With Alternatives
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-primary-500">Restaurant OS</th>
                  <th className="text-center p-4 font-semibold text-gray-500">Food Delivery Apps</th>
                  <th className="text-center p-4 font-semibold text-gray-500">Paper Menus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Commission per order", ros: "0%", delivery: "15-30%", paper: "0%" },
                  { feature: "Setup cost", ros: "₹0", delivery: "₹0", paper: "₹5,000+" },
                  { feature: "Monthly cost", ros: "₹4,999-9,999", delivery: "Variable", paper: "Reprinting costs" },
                  { feature: "Real-time menu updates", ros: "✓", delivery: "Limited", paper: "✗" },
                  { feature: "Customer data ownership", ros: "✓", delivery: "✗", paper: "✗" },
                  { feature: "QR ordering", ros: "✓", delivery: "✗", paper: "✗" },
                  { feature: "Order analytics", ros: "✓", delivery: "Limited", paper: "✗" },
                  { feature: "Custom branding", ros: "✓", delivery: "✗", paper: "✓" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0">
                    <td className="p-4 text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center font-medium text-primary-600">{row.ros}</td>
                    <td className="p-4 text-center text-gray-500">{row.delivery}</td>
                    <td className="p-4 text-center text-gray-500">{row.paper}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Calculate Your Savings
            </h2>
            <p className="text-gray-600 text-center mb-8">
              If you&apos;re currently paying commissions to food delivery apps
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-500 text-sm mb-2">If you do 100 orders/day</p>
                <p className="text-3xl font-bold text-primary-500">₹45,000</p>
                <p className="text-gray-600 text-sm">saved per month*</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-500 text-sm mb-2">If you do 200 orders/day</p>
                <p className="text-3xl font-bold text-primary-500">₹90,000</p>
                <p className="text-gray-600 text-sm">saved per month*</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-500 text-sm mb-2">If you do 500 orders/day</p>
                <p className="text-3xl font-bold text-primary-500">₹2,25,000</p>
                <p className="text-gray-600 text-sm">saved per month*</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              *Assuming ₹500 average order value and 15% commission on delivery apps
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your 14-Day Free Trial
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            No credit card required. Full access to all features.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg"
          >
            Get Started Free
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
