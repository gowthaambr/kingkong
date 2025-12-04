import { QrCode, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Restaurant OS</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Digital menus and QR ordering system for modern restaurants. No commissions, no hidden fees, just a simple subscription.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-gray-500" />
                <a href="mailto:hello@restaurantos.in" className="hover:text-white transition">
                  hello@restaurantos.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-gray-500" />
                <a href="tel:+919876543210" className="hover:text-white transition">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition">Features</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">Pricing</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition">How it Works</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              </li>
              <li>
                <a href="/refund" className="hover:text-white transition">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Restaurant OS. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with care in Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
}
