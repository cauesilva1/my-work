import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Caue C Silva — Landing Page Specialist | Canada',
  description: 'Professional landing page development that converts. Get a free audit and boost your online presence. Specialized in e-commerce, SaaS, and business landing pages.',
  keywords: 'landing page, web design, conversion optimization, e-commerce, SaaS, Canada, freelance developer',
  authors: [{ name: 'Caue C Silva' }],
  creator: 'Caue C Silva',
  publisher: 'Caue C Silva',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://my-work-fawn.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Caue C Silva — Landing Page Specialist',
    description: 'Professional landing page development that converts. Get a free audit and boost your online presence.',
    url: 'https://my-work-fawn.vercel.app',
    siteName: 'Caue C Silva',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Caue C Silva - Landing Page Specialist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caue C Silva — Landing Page Specialist',
    description: 'Professional landing page development that converts. Get a free audit and boost your online presence.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Font optimization */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
