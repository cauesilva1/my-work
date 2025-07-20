'use client'
import { motion } from 'framer-motion';
import { benefits } from '../data/content';

interface BenefitsSectionProps {
  className?: string;
}

export default function BenefitsSection({ className = '' }: BenefitsSectionProps) {
  return (
    <section className={`py-20 px-6 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Why Work With Me?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every project is developed with total focus on results and user experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 h-full flex flex-col">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors flex-shrink-0">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {benefit.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '100%', label: 'Client Satisfaction', icon: '😊' },
              { number: '5 days', label: 'Average Delivery Time', icon: '⚡' },
              { number: '24/7', label: 'Support Available', icon: '🛠️' }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 