"use client";

import { motion } from "framer-motion";

interface FooterProps {
  ctaTitle: string;
  ctaText: string;
  buttonText: string;
  contacts: {
    email: string;
    telegram: string;
  };
}

export default function FooterSection({ ctaTitle, ctaText, buttonText, contacts }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold">{ctaTitle}</h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {ctaText}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors"
          >
            {buttonText}
          </motion.button>
          
          <div id="contact" className="pt-12 text-center">
            <div className="text-gray-400 mb-4">Контакты</div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
              <a 
                href={`mailto:${contacts.email}`} 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {contacts.email}
              </a>
              <a 
                href={`https://t.me/${contacts.telegram.replace('@', '')}`} 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {contacts.telegram}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}