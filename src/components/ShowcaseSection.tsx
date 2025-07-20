'use client'
import { motion } from 'framer-motion';
import { showcaseContent } from '../data/content';

interface ShowcaseSectionProps {
  className?: string;
}

export default function ShowcaseSection({ className = '' }: ShowcaseSectionProps) {
  const workTypes = [
    {
      id: 1,
      title: 'E-commerce Landing Pages',
      category: 'Online Sales',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      description: 'High-converting landing pages for product launches, sales campaigns, and e-commerce stores. Optimized for maximum conversions and sales.',
      features: ['Product showcases', 'Sales funnels', 'Checkout optimization']
    },
    {
      id: 2,
      title: 'SaaS & Tech Platforms',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      description: 'Modern landing pages for SaaS products, mobile apps, and technology services. Focus on user acquisition and product demonstration.',
      features: ['App demos', 'Feature highlights', 'User onboarding']
    },
    {
      id: 3,
      title: 'Business & Consulting',
      category: 'Professional Services',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
      description: 'Professional landing pages for consulting firms, agencies, and service-based businesses. Build trust and generate qualified leads.',
      features: ['Service showcases', 'Client testimonials', 'Lead generation']
    }
  ];

  return (
    <section className={`py-20 px-6 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            {showcaseContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {showcaseContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workTypes.map((workType, index) => (
            <motion.div
              key={workType.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col"
            >
              <div className="relative overflow-hidden flex-shrink-0">
                <motion.img
                  src={workType.image}
                  alt={workType.title}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {workType.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {workType.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {workType.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mt-auto">
                  {workType.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 