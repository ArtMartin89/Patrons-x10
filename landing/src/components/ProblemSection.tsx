"use client";

import { motion } from "framer-motion";

interface ProblemProps {
 title: string;
  text: string;
  stats: {
    label: string;
    value: string;
  };
  conclusion: string;
}

export default function ProblemSection({ title, text, stats, conclusion }: ProblemProps) {
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
          
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {text}
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 max-w-md mx-auto bg-gray-50 dark:bg-gray-800"
          >
            <p className="text-gray-600 dark:text-gray-300 font-medium">{stats.label}</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.value}</p>
          </motion.div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {conclusion}
          </p>
        </motion.div>
      </div>
    </section>
  );
}