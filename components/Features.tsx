import {
  QrCode,
  Smartphone,
  LayoutDashboard,
  Bell,
  BarChart3,
  Settings,
  Utensils,
  Clock
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Code Menus",
    description: "Generate unique QR codes for each table. Customers scan and instantly see your menu.",
    color: "bg-primary-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Ordering",
    description: "Customers order from their phones. No app download needed - works in any browser.",
    color: "bg-blue-500",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Manage menus, view orders, and track analytics from one powerful dashboard.",
    color: "bg-purple-500",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Get instant alerts when new orders come in. Never miss an order again.",
    color: "bg-amber-500",
  },
  {
    icon: Utensils,
    title: "Menu Management",
    description: "Add items, set prices, manage variants and add-ons. Update instantly.",
    color: "bg-secondary-500",
  },
  {
    icon: Clock,
    title: "Order Tracking",
    description: "Track orders from pending to served. Keep customers informed at every step.",
    color: "bg-pink-500",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "See bestsellers, peak hours, and revenue trends. Make data-driven decisions.",
    color: "bg-indigo-500",
  },
  {
    icon: Settings,
    title: "Easy Setup",
    description: "Get started in under 30 minutes. We help you migrate your existing menu.",
    color: "bg-gray-700",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Your Restaurant
          </h2>
          <p className="text-xl text-gray-600">
            A complete solution for digital menus, QR ordering, and restaurant management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
