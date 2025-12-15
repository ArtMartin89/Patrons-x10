"use client";

import { motion } from "framer-motion";

interface VisionProps {
  title: string;
  text: string;
}

export default function VisionSection({ title, text }: VisionProps) {
  return (
    <section className="py-20 bg-black dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}