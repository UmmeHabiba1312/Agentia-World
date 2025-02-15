'use client';

import { motion } from 'framer-motion';
import { Cpu, Code, Activity, Zap } from 'lucide-react';

export default function AITechnologySection() {
  const technologies = [
    {
      title: 'Quantum AI',
      icon: <Cpu size={50} className='text-cyan-400' />, 
      desc: 'Harnessing quantum computing for next-gen AI breakthroughs.',
      delay: 0.3,
    },
    {
      title: 'Neural Networks 3.0',
      icon: <Activity size={50} className='text-blue-400' />, 
      desc: 'Next-level deep learning algorithms for autonomous reasoning.',
      delay: 0.5,
    },
    {
      title: 'AI-Powered Code',
      icon: <Code size={50} className='text-purple-400' />, 
      desc: 'AI that writes, debugs, and optimizes code in real-time.',
      delay: 0.7,
    },
    {
      title: 'Energy-Efficient AI',
      icon: <Zap size={50} className='text-yellow-400' />, 
      desc: 'Ultra-low power AI chips for sustainability and speed.',
      delay: 0.9,
    }
  ];

  return (
    <section id="technology" className='relative py-24 bg-black text-white text-center overflow-hidden'>
      {/* Background Glow Effect */}
      <div className='absolute inset-0 bg-gradient-to-r bg-black' />
      
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-5xl font-extrabold tracking-wide mb-12 relative z-10 text-cyan-400'
      >
        AI Technology Revolution
      </motion.h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto relative z-10'>
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: tech.delay, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            className='relative bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-700 backdrop-blur-lg hover:shadow-cyan-500/50 transition-all duration-300 flex flex-col items-center'
          >
            {/* Hover Animation for Icons */}
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className='flex justify-center'>
              {tech.icon}
            </motion.div>
            <h3 className='text-xl font-semibold mt-4 text-cyan-400 text-center'>{tech.title}</h3>
            <p className='text-gray-300 mt-2 text-center'>{tech.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
