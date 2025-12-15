"use client";

import { motion } from "framer-motion";

interface TiersProps {
  title: string;
  subtitle: string;
  levels: {
    id: string;
    price: string;
    name: string;
    description: string;
  }[];
}

export default function TiersSection({ title, subtitle, levels }: TiersProps) {
  const popularTiers = ['member', 'strategist']; // Уровни 300-500 BYN и выше
  
  return (
    <section id="tiers" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">{subtitle}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => {
            const isPopular = popularTiers.includes(level.id);
            
            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-700 rounded-xl p-6 border-2 ${
                  isPopular 
                    ? 'border-blue-500 dark:border-blue-400 shadow-lg transform scale-105 z-10' 
                    : 'border-gray-200 dark:border-gray-600'
                } relative overflow-hidden`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    ПОПУЛЯРНО
                  </div>
                )}
                
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{level.name}</h3>
                  
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{level.price}</div>
                  
                  <p className="text-gray-600 dark:text-gray-300">{level.description}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      // Временная реализация - модальное окно или скролл к контактам
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
                      modal.innerHTML = `
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Программа запускается в ближайшее время</h3>
                          <p className="text-gray-700 dark:text-gray-300 mb-6">Оставьте контакт, чтобы получить информацию о запуске</p>
                          <button onclick="this.closest('div').remove()" class="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-2 px-4 rounded-lg">
                            Закрыть
                          </button>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className={`w-full py-3 px-4 rounded-lg font-semibold ${
                      isPopular
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-900 dark:text-white'
                    }`}
                  >
                    Выбрать
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}