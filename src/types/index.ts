export interface LandingPage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  whatsapp: string;
  email: string;
  name: string;
} 