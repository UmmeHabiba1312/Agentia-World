'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$299',
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
    price: '$799',
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
    price: 'Custom',
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
    <section id="pricing" className="py-20 bg-gray-900 text-white text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-6 text-cyan-400"
      >
        Choose Your AI Plan
      </motion.h2>
      <p className="text-gray-300 mb-12">Unlock AI potential with our flexible pricing.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className={`relative p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition ${index === 1 ? 'bg-cyan-900 bg-opacity-30' : 'bg-transparent'}`}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-3xl font-extrabold mb-6">{plan.price}<span className="text-lg font-normal">/month</span></p>
            <ul className="text-left space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-100">
                  <CheckCircle className="text-cyan-200" size={20} /> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-white hover:from-cyan-600 hover:to-cyan-300 transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
