'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <section id="contact" className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-5xl bg-gray-900/60 backdrop-blur-2xl rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-800"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-cyan-500">
          {"Let's Connect"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {[
              { icon: Mail, text: 'contact@agentiaworld.com', color: 'text-cyan-400' },
              { icon: Phone, text: '+123 456 7890', color: 'text-cyan-400' },
              { icon: MapPin, text: 'Agentia World, AW', color: 'text-cyan-400' }
            ].map((info, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-5 bg-gray-800/80 rounded-xl shadow-lg hover:bg-gray-700 transition-all"
              >
                <info.icon size={24} className={info.color} />
                <span className="text-gray-300 text-base sm:text-lg">{info.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col gap-5 sm:gap-6 bg-gray-800/80 p-6 sm:p-8 rounded-xl shadow-lg relative"
          >
            <div className="absolute -top-5 -right-5 bg-cyan-500 p-3 rounded-full shadow-lg animate-spin-slow">
              <MessageCircle size={20} className="text-white" />
            </div>

            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-3 w-full bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none text-sm sm:text-base" 
            />

            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-3 w-full bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none text-sm sm:text-base" 
            />

            <textarea 
              placeholder="Your Message" 
              className="p-3 w-full bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none text-sm sm:text-base h-28 sm:h-32" 
            ></textarea>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#06b6d4' }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex justify-center items-center gap-2 bg-cyan-500 text-white py-3 rounded-lg text-sm sm:text-lg font-semibold shadow-lg hover:shadow-cyan-400 transition-all"
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
