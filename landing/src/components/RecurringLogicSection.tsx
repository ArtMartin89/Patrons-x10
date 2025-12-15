"use client";

import { motion } from "framer-motion";

interface RecurringLogicProps {
  title: string;
  cards: {
    title: string;
    text: string;
 }[];
  quote: string;
}

export default function RecurringLogicSection({ title, cards, quote }: RecurringLogicProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{card.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 dark:bg-blue-900/20"
          >
            "{quote}"
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}