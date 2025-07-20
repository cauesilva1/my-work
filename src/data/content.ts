import { Benefit, FAQ, ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  whatsapp: '5199186506',
  email: 'cauecatonesilva@gmail.com',
  name: 'Caue c silva'
};

export const benefits: Benefit[] = [
  {
    id: '1',
    icon: '🎯',
    title: 'Conversion-Focused Design',
    description: 'Clean layouts optimized to maximize your sales and conversions'
  },
  {
    id: '2',
    icon: '⚡',
    title: 'Exceptional Performance',
    description: 'Fast loading and SEO optimized for better search rankings'
  },
  {
    id: '3',
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Works perfectly on all devices and screen sizes'
  },
  {
    id: '4',
    icon: '🎨',
    title: 'Professional Design',
    description: 'Impactful first impression that builds trust and credibility'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How much does a landing page cost?',
    answer: 'Special pricing available for portfolio projects. Contact me for a personalized quote based on your needs.'
  },
  {
    id: '2',
    question: 'How long until delivery?',
    answer: 'Ready within 5 business days after receiving the complete project brief.'
  },
  {
    id: '3',
    question: 'Do I need to manage anything after?',
    answer: 'No! I deliver everything ready to go and guide you through the publishing process.'
  },
  {
    id: '4',
    question: 'Do you provide maintenance?',
    answer: 'Yes, I offer maintenance packages and ongoing support for your landing pages.'
  }
];

export const heroContent = {
  title: 'Landing Pages that Convert',
  subtitle: 'Unique designs with real experience — no commitment required.',
  ctaText: 'Get Free Audit'
};

export const showcaseContent = {
  title: 'Types of Work I Do',
  subtitle: 'From e-commerce to SaaS, I create landing pages for various industries'
}; 