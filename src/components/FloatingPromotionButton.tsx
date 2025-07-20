'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Promotion {
  id: string;
  title: string;
  description: string;
  discount?: string;
  offer?: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor: string;
  textColor: string;
}

interface FloatingPromotionButtonProps {
  promotion: Promotion;
  onShowPopup: () => void;
  isVisible: boolean;
}

export default function FloatingPromotionButton({ promotion, onShowPopup, isVisible }: FloatingPromotionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [pulse, setPulse] = useState(false);

  // Start pulse animation after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setPulse(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const getIcon = () => {
    if (promotion.discount) return '🔥';
    if (promotion.offer === 'FREE') return '🎉';
    return '💎';
  };

  const getPosition = () => {
    // Random position in bottom-right area
    const positions = [
      'bottom-4 right-4',
      'bottom-6 right-6', 
      'bottom-8 right-4',
      'bottom-4 right-8'
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 100 }}
          transition={{ 
            type: "spring", 
            damping: 15, 
            stiffness: 200,
            delay: 1 
          }}
          className={`fixed ${getPosition()} z-40`}
        >
          {/* Main Button */}
          <motion.button
            onClick={onShowPopup}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              relative w-16 h-16 rounded-full shadow-2xl 
              ${promotion.backgroundColor} 
              flex items-center justify-center
              cursor-pointer
              transition-all duration-300
              ${pulse ? 'animate-pulse' : ''}
            `}
          >
            {/* Icon */}
            <span className="text-2xl text-white">
              {getIcon()}
            </span>

            {/* Pulse Ring */}
            <motion.div
              animate={pulse ? { scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-white/30"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-sm" />
          </motion.button>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 mb-3 w-48 p-3 rounded-lg shadow-xl bg-white border border-gray-200"
              >
                {/* Arrow */}
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                
                {/* Content */}
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-sm mb-1">
                    {promotion.title}
                  </div>
                  {promotion.discount && (
                    <div className="text-red-600 font-bold text-lg mb-1">
                      {promotion.discount}
                    </div>
                  )}
                  {promotion.offer && (
                    <div className="text-green-600 font-bold text-lg mb-1">
                      {promotion.offer}
                    </div>
                  )}
                  <div className="text-gray-600 text-xs">
                    Clique para ver mais!
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Particles */}
          <AnimatePresence>
            {pulse && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: [0, 1, 0], y: -20 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  className="absolute top-0 left-1/2 w-1 h-1 bg-yellow-400 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: [0, 1, 0], y: -15 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-0 left-1/3 w-1 h-1 bg-pink-400 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: [0, 1, 0], y: -25 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute top-0 right-1/3 w-1 h-1 bg-blue-400 rounded-full"
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 