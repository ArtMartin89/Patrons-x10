"use client";

import { motion } from "framer-motion";

interface ValuePropositionProps {
  title: string;
  benefits: string[];
  note: string;
}

export default function ValuePropositionSection({ title, benefits, note }: ValuePropositionProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
          
          <ul className="space-y-4 max-w-2xl mx-auto text-left">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-blue-500 mr-3 text-xl">•</span>
                <span className="text-lg text-gray-700 dark:text-gray-300">{benefit}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            {note}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}