"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center  text-white px-6 overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-[-1]" 
        src="/hero.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      />

      {/* Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-b "></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[60vw] h-[30vw] bg-cyan-500/20 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/40 rounded-full blur-3xl animate-spin-slow"></div>

      {/* Futuristic 3D Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl md:text-7xl font-extrabold tracking-widest drop-shadow-md neon-text"
      >
        <span className="text-cyan-400">Agentia</span> <span className="text-purple-400">World</span>
      </motion.h1>

      {/* AI-Powered Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-gray-300 mt-4 tracking-widest opacity-90"
      >
        Pioneering the Future of <span className="text-blue-400 font-semibold">Agentic AI</span> & Next-Gen Tech
      </motion.p>

      {/* High-Tech Interactive Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 1, boxShadow: "0px 0px 25px #00f2ff" }}
        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
        href="#explore"
        className="relative flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-10 py-4 mt-6 rounded-full shadow-xl text-lg tracking-widest hover:from-blue-600 hover:to-cyan-500 transition-all"
      >
        <Image height={50} width={50} src="/logo.png" alt="logo"/>
        Explore AI Innovations 
        <div className="absolute inset-0 bg-white opacity-10 blur-3xl rounded-full animate-ping"></div>
      </motion.a>
    </section>
  );
}
