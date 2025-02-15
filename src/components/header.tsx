"use client";
import Link from "next/link";
import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
const Header = memo(function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [

    { name: "Agents", href: "#agents" },
    { name: "Technology", href: "#technology" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black shadow-lg backdrop-blur-md z-50 border-b  border-gray-800"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-xl font-extrabold tracking-widest neon-text"
        >
       <Link href="/" className="flex justify-center items-center text-cyan-100 tracking-wider">
       <Image height={50} width={50} src="/logo.png" alt="logo"/> AGENTIA </Link>
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="relative text-white text-md font-medium transition duration-300 group"
              >
                {item.name}
                {/* Hover Effect (Purple) */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Login & Signup Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-white font-semibold border text-sm border-cyan-500 rounded-md transition duration-300 hover:bg-cyan-300 hover:text-black"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-cyan-500 text-white font-semibold text-sm rounded-md transition duration-300 hover:bg-cyan-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden flex items-center space-x-2 focus:outline-none"
        >
          <motion.div
            key={isOpen ? "open" : "closed"}
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </motion.div>
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-black bg-opacity-95 backdrop-blur-lg flex flex-col items-center py-4 border-t border-gray-700 shadow-lg"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="text-white text-lg py-3 px-6 rounded-md hover:bg-gray-800 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile Login & Signup Buttons */}
              <div className="flex flex-col gap-2 mt-4">
                <Link
                  href="/login"
                  className="w-36 text-center px-4 py-2 text-white font-semibold border border-purple-400 rounded-md transition duration-300 hover:bg-purple-400 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="w-36 text-center px-4 py-2 bg-purple-500 text-white font-semibold rounded-md transition duration-300 hover:bg-purple-700"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Custom Neon Theme */}
      <style jsx>{`
        .neon-text {
          text-shadow: 0px 0px 8px cyan, 0px 0px 20px blue;
        }
      `}</style>
    </motion.header>
  );
});

export default Header;
