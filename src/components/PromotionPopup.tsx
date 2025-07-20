'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Promotion {
  id: string;
  title: string;
  description: string;
  discount?: string;
  offer?: string;
  endDate?: string;
  maxClients?: number;
  currentClients?: number;
  buttonText: string;
  buttonLink: string;
  backgroundColor: string;
  textColor: string;
}

interface PromotionPopupProps {
  promotion: Promotion;
  onClose: () => void;
  isVisible: boolean;
}

export default function PromotionPopup({ promotion, onClose, isVisible }: PromotionPopupProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [isClosing, setIsClosing] = useState(false);

  // Calculate time left
  useEffect(() => {
    if (!promotion.endDate) return;

    const calculateTimeLeft = () => {
      const difference = new Date(promotion.endDate!).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [promotion.endDate]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <AnimatePresence>
      {isVisible && !isClosing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative max-w-md w-full rounded-2xl shadow-2xl overflow-hidden ${promotion.backgroundColor}`}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="p-8 text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <span className="text-sm font-semibold text-white">🔥 LIMITED TIME OFFER</span>
              </div>

              {/* Title */}
              <h2 className={`text-2xl font-bold mb-4 ${promotion.textColor}`}>
                {promotion.title}
              </h2>

              {/* Description */}
              <p className={`text-lg mb-6 ${promotion.textColor} opacity-90`}>
                {promotion.description}
              </p>

              {/* Discount or Offer */}
              {promotion.discount && (
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white bg-red-500 px-4 py-2 rounded-lg">
                    {promotion.discount}
                  </span>
                </div>
              )}

              {promotion.offer && (
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white bg-green-500 px-4 py-2 rounded-lg">
                    {promotion.offer}
                  </span>
                </div>
              )}

              {/* Client counter */}
              {promotion.maxClients && promotion.currentClients && (
                <div className="mb-6">
                  <p className="text-white mb-2">
                    <span className="font-bold">{promotion.currentClients}</span> of <span className="font-bold">{promotion.maxClients}</span> spots taken
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(promotion.currentClients / promotion.maxClients) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Countdown timer */}
              {promotion.endDate && (
                <div className="mb-6">
                  <p className="text-white mb-3 font-semibold">Offer ends in:</p>
                  <div className="flex justify-center space-x-2">
                    {[
                      { value: timeLeft.days, label: 'Days' },
                      { value: timeLeft.hours, label: 'Hours' },
                      { value: timeLeft.minutes, label: 'Min' },
                      { value: timeLeft.seconds, label: 'Sec' }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 min-w-[50px]">
                          <div className="text-xl font-bold text-white">
                            {formatNumber(item.value)}
                          </div>
                        </div>
                        <div className="text-xs text-white/80 mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <motion.a
                href={promotion.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {promotion.buttonText}
              </motion.a>

              {/* Disclaimer */}
              <p className="text-white/60 text-xs mt-4">
                *Limited time offer. Terms and conditions apply.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 