'use client'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ShowcaseSection from '../components/ShowcaseSection'
import BenefitsSection from '../components/BenefitsSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Showcase Section */}
      <div id="portfolio">
        <ShowcaseSection />
      </div>

      {/* Benefits Section */}
      <div id="services">
        <BenefitsSection />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Footer */}
      <div id="contact">
        <Footer />
      </div>
    </main>
  )
}
