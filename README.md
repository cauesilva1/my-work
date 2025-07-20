# Caue C Silva - Landing Page Specialist

A professional landing page portfolio for a Canadian-based landing page specialist, built with Next.js 15, TypeScript, Tailwind CSS and Framer Motion.

## ✨ Features

### 🎨 Modern Design
- **Clean Gradients**: Modern blue-purple gradient design
- **Smooth Animations**: Fluid animations with Framer Motion
- **Responsive Design**: Fully adaptable for all devices
- **Professional Typography**: Inter font with optimized hierarchy

### 🚀 Performance
- **Next.js 15**: Latest framework with App Router
- **TypeScript**: Static typing for better development
- **Tailwind CSS 4**: Utility-first CSS with optimized configuration
- **Lazy Loading**: Optimized image loading
- **SEO Optimized**: Meta tags and semantic structure

### 🛠️ Functionality
- **Fixed Navigation**: Transparent scroll navigation
- **Modular Sections**: Reusable and organized components
- **Interactive FAQ**: Animated accordion
- **WhatsApp Integration**: Direct contact links
- **Portfolio Showcase**: Types of work with detailed descriptions

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Main layout with SEO
│   └── page.tsx             # Home page
├── components/
│   ├── Navigation.tsx       # Fixed navigation
│   ├── HeroSection.tsx      # Hero section
│   ├── ShowcaseSection.tsx  # Work types showcase
│   ├── BenefitsSection.tsx  # Benefits
│   ├── FAQSection.tsx       # Interactive FAQ
│   ├── Footer.tsx           # Footer
│   └── LoadingSpinner.tsx   # Loading component
├── data/
│   └── content.ts           # Centralized content
├── hooks/
│   └── useScrollAnimation.ts # Custom hooks
├── types/
│   └── index.ts             # TypeScript types
└── utils/
    └── constants.ts         # App constants
```

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/seuusuario/my-landing.git

# Navigate to directory
cd my-landing

# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Configuration

1. **Update personal information** in `src/data/content.ts`:
   ```typescript
   export const contactInfo: ContactInfo = {
     whatsapp: '5199186506',        // Your WhatsApp
     email: 'cauecatonesilva@gmail.com', // Your email
     name: 'Caue c silva'           // Your name
   };
   ```

2. **Customize colors** in `src/app/globals.css`:
   ```css
   :root {
     --primary: #3b82f6;
     --secondary: #8b5cf6;
   }
   ```

3. **Add your images** to the `public/` folder

## 🎯 Recent Improvements

### Code Quality
- ✅ **Modular Components**: Separated into reusable components
- ✅ **TypeScript**: Complete typing and interfaces
- ✅ **Custom Hooks**: Logic reusability
- ✅ **Centralized Constants**: Organized configurations
- ✅ **Accessibility**: ARIA labels and keyboard navigation

### Design
- ✅ **Modern Gradients**: Professional color palette
- ✅ **Advanced Animations**: Entry and hover effects
- ✅ **Enhanced Responsiveness**: Mobile-first design
- ✅ **Micro-interactions**: Visual feedback on interactions
- ✅ **Loading States**: Elegant loading states

### Performance
- ✅ **Lazy Loading**: Optimized loading
- ✅ **Optimized CSS**: Efficient utility classes
- ✅ **Bundle Size**: Modular and lightweight code
- ✅ **SEO**: Meta tags and semantic structure
- ✅ **PWA Ready**: Web app manifest and icons

### SEO & Meta
- ✅ **Complete Meta Tags**: Open Graph, Twitter Cards
- ✅ **Robots.txt**: Search engine optimization
- ✅ **Sitemap Ready**: XML sitemap structure
- ✅ **Performance Headers**: Security and caching
- ✅ **Font Optimization**: Inter font with preloading

## 🛠️ Technologies

- **Next.js 15** - React framework
- **TypeScript** - Static typing
- **Tailwind CSS 4** - CSS framework
- **Framer Motion** - Animations
- **React 19** - UI library

## 📱 Responsiveness

- 📱 Mobile: 320px - 768px
- 💻 Tablet: 768px - 1024px
- 🖥️ Desktop: 1024px+

## 🎨 Color Palette

- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#8b5cf6)
- **Neutral**: Gray (#6b7280)
- **Background**: White (#ffffff)

## 📄 License

This project is under MIT license. See the [LICENSE](LICENSE) file for more details.

## 🤝 Contribution

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) before submitting a pull request.

---

**Built with ❤️ using Next.js and Tailwind CSS**
