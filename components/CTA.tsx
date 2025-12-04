import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Restaurant?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join 50+ restaurants already using Restaurant OS. Start your free trial today - no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@restaurantos.in"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi! I'm interested in Restaurant OS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>

        <p className="mt-8 text-primary-200 text-sm">
          Or email us at{" "}
          <a href="mailto:hello@restaurantos.in" className="underline hover:text-white">
            hello@restaurantos.in
          </a>
        </p>
      </div>
    </section>
  );
}
