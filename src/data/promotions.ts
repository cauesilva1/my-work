export interface Promotion {
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
  isActive: boolean;
  showDelay?: number; // Delay in seconds before showing popup
  showFrequency?: 'once' | 'daily' | 'weekly' | 'always'; // How often to show
  priority?: number; // Higher number = higher priority
}

// Example promotions - you can easily modify these
export const promotions: Promotion[] = [
  {
    id: 'free-landing-pages',
    title: '🎉 FREE Landing Pages!',
    description: 'First 5 clients get a complete landing page absolutely FREE! Perfect opportunity to boost your business.',
    offer: 'FREE',
    maxClients: 5,
    currentClients: 1, // Update this number as clients sign up
    buttonText: 'Claim My Free Landing Page',
    buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Hi! I want to claim my FREE landing page! 🎉',
    backgroundColor: 'bg-gradient-to-br from-purple-600 to-pink-600',
    textColor: 'text-white',
    isActive: true,
    showDelay: 3,
    showFrequency: 'daily',
    priority: 10
  },
  {
    id: 'black-friday-50-off',
    title: '🖤 Black Friday Special',
    description: 'Get 50% OFF on all landing pages! Limited time offer for Black Friday.',
    discount: '50% OFF',
    endDate: '2024-11-30T23:59:59', // Set your end date
    buttonText: 'Get 50% OFF Now',
    buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Hi! I want the Black Friday 50% OFF deal! 🖤',
    backgroundColor: 'bg-gradient-to-br from-gray-900 to-red-600',
    textColor: 'text-white',
    isActive: false, // Set to true when you want to activate
    showDelay: 2,
    showFrequency: 'once',
    priority: 9
  },
  {
    id: 'new-year-special',
    title: '✨ New Year, New Website!',
    description: 'Start 2024 with a professional website! 30% OFF on all services.',
    discount: '30% OFF',
    endDate: '2024-01-31T23:59:59',
    buttonText: 'Start My New Year Project',
    buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Hi! I want the New Year 30% OFF special! ✨',
    backgroundColor: 'bg-gradient-to-br from-blue-600 to-cyan-500',
    textColor: 'text-white',
    isActive: false,
    showDelay: 4,
    showFrequency: 'once',
    priority: 8
  },
  {
    id: 'summer-sale',
    title: '☀️ Summer Sale - Hot Deals!',
    description: 'Beat the heat with our summer sale! 25% OFF on all landing pages.',
    discount: '25% OFF',
    endDate: '2025-12-31T23:59:59', // Updated to future date
    buttonText: 'Get Summer Discount',
    buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Hi! I want the Summer Sale 25% OFF! ☀️',
    backgroundColor: 'bg-gradient-to-br from-orange-500 to-yellow-500',
    textColor: 'text-white',
    isActive: false,
    showDelay: 3,
    showFrequency: 'daily',
    priority: 7
  },
  {
    id: 'first-time-client',
    title: '🎁 Welcome Bonus!',
    description: 'First-time clients get 20% OFF on their first project!',
    discount: '20% OFF',
    buttonText: 'Get My Welcome Bonus',
    buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Hi! I want my Welcome Bonus 20% OFF! 🎁',
    backgroundColor: 'bg-gradient-to-br from-green-500 to-emerald-500',
    textColor: 'text-white',
    isActive: false,
    showDelay: 3,
    showFrequency: 'once',
    priority: 6
  }
];

// Helper function to get active promotion with priority
export const getActivePromotion = (): Promotion | null => {
  const activePromotions = promotions.filter(promo => promo.isActive);
  console.log('🔍 Active promotions:', activePromotions); // Debug log
  
  if (activePromotions.length === 0) return null;
  
  // Sort by priority (highest first) and return the first one
  const sortedPromotions = activePromotions.sort((a, b) => (b.priority || 0) - (a.priority || 0));
  console.log('🏆 Highest priority promotion:', sortedPromotions[0]); // Debug log
  return sortedPromotions[0];
};

// Helper function to check if promotion should be shown
export const shouldShowPromotion = (promotion: Promotion): boolean => {
  const storageKey = `promotion_${promotion.id}`;
  const lastSeen = localStorage.getItem(storageKey);
  const now = new Date();
  
  if (!lastSeen) {
    console.log(`🎯 First time seeing promotion: ${promotion.id}`);
    return true;
  }
  
  const lastSeenDate = new Date(lastSeen);
  
  switch (promotion.showFrequency) {
    case 'always':
      return true;
    case 'daily':
      const isNewDay = now.toDateString() !== lastSeenDate.toDateString();
      console.log(`📅 Daily check for ${promotion.id}:`, isNewDay);
      return isNewDay;
    case 'weekly':
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const isNewWeek = lastSeenDate < weekAgo;
      console.log(`📅 Weekly check for ${promotion.id}:`, isNewWeek);
      return isNewWeek;
    case 'once':
    default:
      const hasSeenOnce = localStorage.getItem(storageKey) !== null;
      console.log(`👀 Once check for ${promotion.id}:`, !hasSeenOnce);
      return !hasSeenOnce;
  }
};

// Helper function to mark promotion as seen
export const markPromotionAsSeen = (promotion: Promotion) => {
  const storageKey = `promotion_${promotion.id}`;
  localStorage.setItem(storageKey, new Date().toISOString());
  console.log(`✅ Marked promotion as seen: ${promotion.id}`);
};

// Helper function to update client count
export const updateClientCount = (promotionId: string, newCount: number) => {
  const promotion = promotions.find(p => p.id === promotionId);
  if (promotion) {
    promotion.currentClients = newCount;
  }
};

// Helper function to activate/deactivate promotions
export const togglePromotion = (promotionId: string, isActive: boolean) => {
  const promotion = promotions.find(p => p.id === promotionId);
  if (promotion) {
    promotion.isActive = isActive;
  }
};

// Helper function to get all active promotions (for banner)
export const getAllActivePromotions = (): Promotion[] => {
  return promotions.filter(promo => promo.isActive);
}; 