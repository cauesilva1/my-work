// Configurações da aplicação
export const APP_CONFIG = {
  name: 'Landing Page Developer',
  description: 'Especialista em criação de landing pages que convertem',
  url: 'https://seusite.com',
  email: 'seu@email.com',
  whatsapp: '5511999999999',
  social: {
    linkedin: 'https://linkedin.com/in/seuperfil',
    github: 'https://github.com/seuperfil',
    instagram: 'https://instagram.com/seuperfil'
  }
};

// Configurações de animação
export const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
  stagger: 0.1
};

// Configurações de breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Configurações de cores
export const COLORS = {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8'
  },
  secondary: {
    50: '#faf5ff',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9'
  }
}; 