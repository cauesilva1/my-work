'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ShowcaseSection from '../components/ShowcaseSection'
import BenefitsSection from '../components/BenefitsSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import PromotionPopup from '../components/PromotionPopup'
import FloatingPromotionButton from '../components/FloatingPromotionButton'
import { getActivePromotion, shouldShowPromotion, markPromotionAsSeen, getAllActivePromotions } from '../data/promotions'

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [currentPromotion, setCurrentPromotion] = useState<any>(null);

  useEffect(() => {
    console.log('🚀 Page loaded, checking for promotions...'); // Debug log
    
    const activePromotion = getActivePromotion();
    
    if (activePromotion) {
      console.log('🎯 Active promotion found:', activePromotion); // Debug log
      
      const shouldShow = shouldShowPromotion(activePromotion);
      console.log('👀 Should show promotion:', shouldShow); // Debug log
      
      if (shouldShow) {
        setCurrentPromotion(activePromotion);
        
        // Show popup after delay
        const delay = (activePromotion.showDelay || 3) * 1000;
        console.log('⏰ Setting timer for popup:', delay, 'ms'); // Debug log
        
        const timer = setTimeout(() => {
          console.log('🎉 Showing promotion popup!'); // Debug log
          setShowPopup(true);
          markPromotionAsSeen(activePromotion);
        }, delay);

        return () => clearTimeout(timer);
      } else {
        // Show floating button instead of popup
        console.log('🎯 Showing floating promotion button'); // Debug log
        setCurrentPromotion(activePromotion);
        setShowFloatingButton(true);
      }
    } else {
      console.log('❌ No active promotion found'); // Debug log
    }
  }, []);

  const handleClosePopup = () => {
    console.log('❌ Closing promotion popup'); // Debug log
    setShowPopup(false);
    // Show floating button after popup is closed
    if (currentPromotion) {
      setShowFloatingButton(true);
    }
  };

  const handleShowPopup = () => {
    console.log('🎉 Showing promotion popup from floating button'); // Debug log
    setShowFloatingButton(false);
    setShowPopup(true);
  };

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

      {/* Floating Promotion Button */}
      {currentPromotion && (
        <FloatingPromotionButton
          promotion={currentPromotion}
          onShowPopup={handleShowPopup}
          isVisible={showFloatingButton}
        />
      )}

      {/* Promotion Popup */}
      {currentPromotion && (
        <PromotionPopup
          promotion={currentPromotion}
          onClose={handleClosePopup}
          isVisible={showPopup}
        />
      )}
    </main>
  )
}
