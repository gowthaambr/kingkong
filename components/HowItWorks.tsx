import { QrCode, Smartphone, ChefHat, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Customer Scans QR",
    description: "Each table has a unique QR code. Customer scans it with their phone camera.",
    color: "bg-primary-500",
  },
  {
    icon: Smartphone,
    title: "Browse & Order",
    description: "Menu opens in browser. Customer browses items, customizes, and places order.",
    color: "bg-blue-500",
  },
  {
    icon: ChefHat,
    title: "Kitchen Gets Notified",
    description: "Order appears on your dashboard instantly. Kitchen starts preparing.",
    color: "bg-amber-500",
  },
  {
    icon: CheckCircle2,
    title: "Serve & Track",
    description: "Mark orders as ready. Customer gets notified. Track everything in real-time.",
    color: "bg-secondary-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            From scan to serve in 4 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gray-200" />
              )}

              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video/Demo CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-left">
              <p className="font-semibold text-gray-900">Want to see it in action?</p>
              <p className="text-sm text-gray-500">Watch a 2-minute demo video</p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
