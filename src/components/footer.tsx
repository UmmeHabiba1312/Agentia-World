'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function FuturisticFooter() {
  return (
    <footer className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background Animated Waves */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-70"></div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[130%] h-[55%] bg-gradient-radial from-cyan-500/40 to-transparent blur-[100px] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Logo or Brand with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r text-white drop-shadow-lg"
        >
          Agentia<span className="text-cyan-400">World</span>
        </motion.div>

        {/* Navigation Links with Hover Underline Effect */}
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {["Home", "About", "Services", "AI Lab", "Contact"].map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="relative text-gray-300 text-lg font-medium hover:text-cyan-400 transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {link}
              <motion.span
                className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-cyan-400 transition-all"
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}
        </div>

        {/* Social Icons with Glow Hover Effect */}
        <div className="mt-10 flex gap-8">
          {[Facebook, Twitter, Linkedin, Github].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.6)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-800/80 p-4 rounded-full shadow-xl hover:bg-cyan-500/20 transition-all"
            >
              <Icon size={26} className="text-cyan-400" />
            </motion.a>
          ))}
        </div>

        {/* Animated Copyright Text */}
        <motion.p
          className="mt-12 text-gray-400 text-sm tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © {new Date().getFullYear()} <span className="text-cyan-400">AgentiaWorld</span>. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
