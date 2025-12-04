"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do my customers need to download an app?",
    answer: "No! Customers simply scan the QR code with their phone camera, and the menu opens directly in their browser. No app download required, which means zero friction for ordering.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Most restaurants are fully set up within 30 minutes. You just need to add your menu items, generate QR codes for your tables, and you're ready to go. We also offer free setup assistance.",
  },
  {
    question: "Do you charge commissions per order?",
    answer: "Absolutely not. We charge a simple monthly subscription fee. No commissions, no hidden fees, no surprises. Every rupee from your orders stays with you.",
  },
  {
    question: "Can I customize the menu design to match my brand?",
    answer: "Yes! You can add your logo, choose your brand colors, and customize the look and feel of your digital menu. Premium plans include advanced branding options.",
  },
  {
    question: "What if I need help setting up?",
    answer: "We offer free onboarding assistance for all plans. You can also reach out to our support team via email or WhatsApp, and we'll help you get started.",
  },
  {
    question: "Can I update my menu in real-time?",
    answer: "Yes! Any changes you make to your menu in the dashboard are reflected instantly. You can add items, change prices, mark items as unavailable, all in real-time.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use industry-standard encryption and security practices to protect your data. Your restaurant data is stored securely and is never shared with third parties.",
  },
  {
    question: "Can I try before I buy?",
    answer: "Absolutely! We offer a 14-day free trial with no credit card required. Experience the full product before making any commitment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Can&apos;t find what you&apos;re looking for? We&apos;re here to help.</p>
          <a
            href="#contact"
            className="inline-flex px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
