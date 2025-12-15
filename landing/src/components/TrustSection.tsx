"use client";

import { motion } from "framer-motion";

interface TrustProps {
  title: string;
  description: string;
  checklist: string[];
}

export default function TrustSection({ title, description, checklist }: TrustProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{description}</p>
          
          <ul className="space-y-3 max-w-2xl mx-auto text-left">
            {checklist.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}