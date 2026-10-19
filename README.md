# Biotel DNA Kenya - Professional DNA Testing Services Website

<div align="center">

![Biotel DNA Logo](https://bioteldna.co.ke/wp-content/uploads/2026/09/bioteldna-logo.png)

**Professional DNA Testing Services in Kenya**

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blue.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 📋 Overview

This is the official website for **Biotel DNA Kenya**, a professional DNA testing service provider based in Nairobi, Kenya. The website provides comprehensive information about DNA testing services, including paternity tests, siblingship tests, grandparent tests, and legal DNA testing.

### 🌟 Key Features

- **Responsive Design** - Mobile-first approach with seamless experience across all devices
- **AI-Powered Chatbot** - Intelligent assistant for answering DNA testing questions
- **Multi-Location Support** - Dedicated pages for Nairobi, Mombasa, and Kisumu
- **SEO Optimized** - Comprehensive on-page and local SEO implementation
- **WhatsApp Integration** - Direct communication channel with customers
- **Contact Forms** - Easy inquiry and quotation request system
- **Service Pages** - Detailed information for all DNA testing services
- **24/7 Availability** - Round-the-clock service information

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **TypeScript 5.0** - Type safety
- **Vite 5.0** - Build tool and dev server
- **React Router DOM 6.20** - Client-side routing
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Features
- **AI Chatbot** - Custom knowledge base with intent detection
- **SEO Optimization** - Schema markup, meta tags, sitemap
- **Local SEO** - Location-specific pages and content
- **Responsive Design** - Mobile-first approach
- **Performance** - Optimized bundle size and lazy loading

---

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/biotel-dna-website.git
cd biotel-dna-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 🚀 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

### Project Structure

```
biotel-dna-website/
├── public/                 # Static assets
│   ├── robots.txt         # Search engine directives
│   ├── sitemap.xml        # XML sitemap
│   └── *.md               # Documentation files
├── src/
│   ├── components/        # Reusable components
│   │   ├── Layout.tsx     # Main layout with header/footer
│   │   ├── AIAssistant.tsx # AI chatbot component
│   │   └── WhatsAppButton.tsx # Floating WhatsApp button
│   ├── pages/            # Page components
│   │   ├── Home.tsx       # Homepage
│   │   ├── ServicesPage.tsx # Services overview
│   │   ├── ServiceDetail.tsx # Individual service pages
│   │   ├── PaternityTestPage.tsx # Paternity test page
│   │   ├── AboutPage.tsx  # About us page
│   │   ├── ContactPage.tsx # Contact page
│   │   ├── LocationsPage.tsx # Location pages
│   │   └── InfoPage.tsx   # Information pages
│   ├── data/             # Data files
│   │   ├── services.ts    # Service definitions
│   │   └── chatbotKnowledge.ts # AI chatbot knowledge base
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
└── tailwind.config.js    # Tailwind config
```

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Deploy to GitHub Pages

1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

2. Add to package.json
```json
{
  "homepage": "https://yourusername.github.io/biotel-dna-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy
```bash
npm run deploy
```

---

## 📄 Pages & Features

### Main Pages

1. **Homepage** (`/`)
   - Hero section with CTA
   - Services overview
   - DNA testing process
   - Private vs legal testing comparison
   - Pricing information
   - Location highlights
   - FAQs
   - Final CTA

2. **Services** (`/services`)
   - All DNA testing services
   - Service categories
   - Quick links to individual services

3. **Service Detail Pages** (`/services/:slug`)
   - Paternity DNA Test
   - Siblingship DNA Test
   - Grandparent DNA Test
   - Maternity DNA Test
   - Avuncular DNA Test
   - Y-DNA Paternal Lineage Test
   - DNA Test for Court
   - Immigration DNA Test
   - Home DNA Testing

4. **About Us** (`/about`)
   - Company information
   - Mission and values
   - Testing process
   - Quality and confidentiality

5. **Contact** (`/contact`)
   - Contact form
   - Phone and WhatsApp
   - Email information
   - Business hours
   - Google Maps integration

6. **Locations** (`/locations`)
   - Nairobi (Primary Service Centre)
   - Mombasa (Coordinated Services)
   - Kisumu (Coordinated Services)

7. **Information Pages**
   - DNA Test Cost (`/dna-test-cost`)
   - DNA Test Process (`/dna-test-process`)
   - DNA Test Results (`/dna-test-results`)
   - DNA Test Requirements (`/dna-test-requirements`)
   - Private vs Legal Testing (`/private-vs-legal`)
   - FAQs (`/faqs`)

### Special Features

#### AI Chatbot Assistant
- Intelligent Q&A system
- Knowledge base with 25+ entries
- Intent detection and keyword matching
- Quick reply suggestions
- Escalation to human representatives
- Privacy-first design

#### WhatsApp Integration
- Floating WhatsApp button
- Pre-filled messages
- Direct communication channel
- Available on all pages

#### Contact Forms
- Quotation request form
- Service selection
- Location selection
- Test type selection
- Privacy notice

---

## 🔍 SEO Implementation

### On-Page SEO
- Unique meta titles and descriptions
- Proper heading hierarchy (H1, H2, H3)
- Internal linking strategy
- Image alt text optimization
- Schema markup (Organization, LocalBusiness, Service, FAQ)
- Canonical URLs
- Open Graph tags
- Twitter Card tags

### Local SEO
- Location-specific pages
- NAP consistency (Name, Address, Phone)
- Google Maps integration
- Service area definitions
- Location-specific FAQs
- Local business schema markup

### Technical SEO
- XML sitemap
- robots.txt
- Fast loading times
- Mobile-responsive design
- Clean URL structure
- Breadcrumb navigation

---

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All pages are optimized for:
- Touch interactions
- Readable font sizes
- Proper spacing
- Fast loading on mobile networks

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact Information

**Biotel DNA Kenya**
- **Phone**: +254 711 371092
- **Emergency**: +254 712 612 764
- **WhatsApp**: +254 711 371092
- **Email**: dna@bioteldna.co.ke
- **Hours**: 24 Hours (Monday - Sunday)
- **Location**: Nairobi, Kenya
- **Website**: https://bioteldna.co.ke

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Logo and branding: Biotel DNA Kenya
- AI chatbot design: Custom implementation
- SEO strategy: Comprehensive local SEO for Kenya
- Design inspiration: Professional healthcare websites

---

## 📊 Project Status

✅ **Complete and Production Ready**

- [x] All pages implemented
- [x] AI chatbot integrated
- [x] SEO optimization complete
- [x] Local SEO implemented
- [x] Mobile responsive
- [x] Contact forms working
- [x] WhatsApp integration
- [x] Logo integrated
- [x] Documentation complete

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/biotel-dna-website.git

# Navigate to project
cd biotel-dna-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Visit http://localhost:5173
```

---

<div align="center">

**Built with ❤️ for Biotel DNA Kenya**

[Website](https://bioteldna.co.ke) | [Contact](mailto:dna@bioteldna.co.ke) | [WhatsApp](https://wa.me/254711371092)

</div>
