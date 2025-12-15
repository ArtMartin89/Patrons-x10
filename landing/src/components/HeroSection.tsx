"use client";

import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
}

export default function HeroSection({ title, subtitle, description, ctaText }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => document.getElementById('tiers')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black dark:bg-white text-white dark:text-black font-semibold py-4 px-8 rounded-full text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              {ctaText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}