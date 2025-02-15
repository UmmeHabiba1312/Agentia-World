'use client';

import { motion } from 'framer-motion';
import { Bot, Brain, Cpu, Sparkles } from 'lucide-react';

export default function AIAgentsSection() {
  const agents = [
    { title: 'Autonomous AI', icon: <Bot size={40} />, desc: 'Self-learning AI that adapts to new environments in real-time.', delay: 0.2 },
    { title: 'Cognitive AI', icon: <Brain size={40} />, desc: 'Mimicking human-like decision-making with deep learning.', delay: 0.4 },
    { title: 'AI Supercomputer', icon: <Cpu size={40} />, desc: 'High-speed processing for large-scale AI computations.', delay: 0.6 },
    { title: 'AI Enhancement', icon: <Sparkles size={40} />, desc: 'Boosting creativity and efficiency with AI-assisted innovation.', delay: 0.8 }
  ];

  return (
    <section id="agents" className="py-20 bg-black text-white text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className=" text-3xl sm:text-5xl font-extrabold mb-10 text-cyan-400"
      >
        Meet the AI Agents
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: agent.delay, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 rounded-xl" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-cyan-400 mb-4">{agent.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
              <p className="text-gray-300 text-sm">{agent.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
