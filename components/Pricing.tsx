import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small cafes just getting started",
    price: "₹4,999",
    period: "/month",
    features: [
      "Up to 50 menu items",
      "Up to 10 tables",
      "QR code generation",
      "Basic analytics",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing restaurants with more needs",
    price: "₹9,999",
    period: "/month",
    features: [
      "Unlimited menu items",
      "Unlimited tables",
      "QR code generation",
      "Advanced analytics",
      "Real-time notifications",
      "Priority support",
      "Custom branding",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For restaurant chains and franchises",
    price: "Custom",
    period: "",
    features: [
      "Everything in Professional",
      "Multiple outlets",
      "Centralized dashboard",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            No hidden fees. No commissions per order. Just a simple monthly subscription.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary-500 text-white ring-4 ring-primary-500 ring-offset-4"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary-500 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-primary-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? "text-primary-100" : "text-gray-500"}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-primary-200" : "text-secondary-500"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-primary-50" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                  plan.highlighted
                    ? "bg-white text-primary-500 hover:bg-gray-100"
                    : "bg-primary-500 text-white hover:bg-primary-600"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
