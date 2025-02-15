'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$299 / month',
    features: [
      '3 AI Agent Instances',
      'Basic Neural Processing',
      '24/7 Support',
      'Weekly Analytics',
      'Basic API Access',
    ],
  },
  {
    name: 'Professional',
    price: '$799 / month',
    features: [
      '15 AI Agent Instances',
      'Advanced Neural Networks',
      'Priority Support',
      'Real-time Analytics',
      'Advanced API Access',
      'AI Security Suite',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom Pricing',
    features: [
      'Unlimited AI Agents',
      'Full Neural Suite',
      'Dedicated AI Support Team',
      'Enterprise Security & API',
      'Custom AI Model Development',
      'Advanced Analytics Dashboard',
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-gray-900 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-cyan-400"
      >
        Choose Your AI Plan
      </motion.h2>
      <p className="text-gray-300 mb-8 sm:mb-12 text-sm sm:text-base">
        Unlock AI potential with our flexible pricing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className={`relative p-6 sm:p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition ${
              index === 1 ? 'bg-cyan-900 bg-opacity-30' : 'bg-transparent'
            }`}
          >
            {/* Name & Price Aligned to Left */}
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{plan.name}</h3>
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">{plan.price}</p>
            </div>

            {/* Features List */}
            <ul className="text-left space-y-3 mt-6 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 sm:gap-3 text-gray-100 text-sm sm:text-base">
                  <CheckCircle className="text-cyan-200 w-5 h-5 sm:w-6 sm:h-6" /> {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="w-full py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-white hover:from-cyan-600 hover:to-cyan-300 transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
