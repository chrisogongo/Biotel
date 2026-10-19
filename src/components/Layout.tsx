import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [infoDropdown, setInfoDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-primary-dark text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href="tel:+254711371092" className="flex items-center gap-1 hover:text-accent transition-colors">
                <Phone size={14} /> +254 711 371092
              </a>
              <a href="mailto:dna@bioteldna.co.ke" className="flex items-center gap-1 hover:text-accent transition-colors">
                <Mail size={14} /> dna@bioteldna.co.ke
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} /> 24 Hours Service
            </div>        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://bioteldna.co.ke/wp-content/uploads/2026/09/bioteldna-logo.png" 
                alt="Biotel DNA - Professional DNA Testing Services in Kenya" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/') ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}>
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
                <button className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${location.pathname.startsWith('/services') ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}>
                  DNA Testing Services <ChevronDown size={14} />
                </button>
                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">All DNA Tests</Link>
                    <Link to="/services/paternity-dna-test" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">Paternity DNA Test</Link>
                    <Link to="/services/siblingship-dna-test" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">Siblingship DNA Test</Link>
                    <Link to="/services/grandparent-dna-test" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">Grandparent DNA Test</Link>
                    <Link to="/services/maternity-dna-test" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">Maternity DNA Test</Link>
                    <Link to="/services/avuncular-dna-test" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">Avuncular DNA Test</Link>
                    <Link to="/services/ydna-paternal-lineage-test" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">Y-DNA Paternal Lineage</Link>
                    <Link to="/services/dna-test-for-court" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">DNA Test for Court</Link>
                    <Link to="/services/immigration-dna-test" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">Immigration DNA Test</Link>
                    <Link to="/services/home-dna-testing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">Home DNA Testing</Link>
                  </div>
                )}
              </div>

              {/* Info Dropdown */}
              <div className="relative" onMouseEnter={() => setInfoDropdown(true)} onMouseLeave={() => setInfoDropdown(false)}>
                <button className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${location.pathname.startsWith('/info') || location.pathname.startsWith('/dna-test') || location.pathname.startsWith('/faqs') || location.pathname.startsWith('/private') ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}>
                  Test Information <ChevronDown size={14} />
                </button>
                {infoDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                    <Link to="/dna-test-process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">DNA Test Process</Link>
                    <Link to="/dna-test-cost" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">DNA Test Cost & Price</Link>
                    <Link to="/dna-test-results" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">DNA Test Results</Link>
                    <Link to="/dna-test-requirements" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">DNA Test Requirements</Link>
                    <Link to="/private-vs-legal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">Private vs Legal Testing</Link>
                    <Link to="/faqs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary">FAQs</Link>
                  </div>
                )}
              </div>

              <Link to="/locations" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname.startsWith('/locations') ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}>
                Locations
              </Link>
              <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}>
                About Us
              </Link>
              <Link to="/contact" className="ml-2 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary-dark transition-colors">
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">Home</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">DNA Testing Services</Link>
              <Link to="/services/paternity-dna-test" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-600 hover:bg-primary/5 hover:text-primary">Paternity DNA Test</Link>
              <Link to="/services/siblingship-dna-test" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-600 hover:bg-primary/5 hover:text-primary">Siblingship DNA Test</Link>
              <Link to="/services/grandparent-dna-test" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-600 hover:bg-primary/5 hover:text-primary">Grandparent DNA Test</Link>
              <Link to="/services/dna-test-for-court" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-600 hover:bg-primary/5 hover:text-primary">DNA Test for Court</Link>
              <Link to="/services/immigration-dna-test" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-600 hover:bg-primary/5 hover:text-primary">Immigration DNA Test</Link>
              <Link to="/dna-test-cost" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">DNA Test Cost</Link>
              <Link to="/dna-test-process" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">DNA Test Process</Link>
              <Link to="/faqs" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">FAQs</Link>
              <Link to="/locations" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">Locations</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">About Us</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium bg-secondary text-white text-center mt-2">Get a DNA Test Quote</Link>
              <a href="tel:+254711371092" className="block px-3 py-2 rounded-md text-base font-medium text-primary text-center border border-primary mt-1">📞 Call: +254 711 371092</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <img 
                  src="https://bioteldna.co.ke/wp-content/uploads/2026/09/bioteldna-logo.png" 
                  alt="Biotel DNA - Professional DNA Testing Services in Kenya" 
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional DNA testing services in Kenya. We provide paternity, relationship, and legal DNA testing with confidentiality, accuracy, and care.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">DNA Testing Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/services/paternity-dna-test" className="hover:text-white transition-colors">Paternity DNA Test</Link></li>
                <li><Link to="/services/siblingship-dna-test" className="hover:text-white transition-colors">Siblingship DNA Test</Link></li>
                <li><Link to="/services/grandparent-dna-test" className="hover:text-white transition-colors">Grandparent DNA Test</Link></li>
                <li><Link to="/services/maternity-dna-test" className="hover:text-white transition-colors">Maternity DNA Test</Link></li>
                <li><Link to="/services/dna-test-for-court" className="hover:text-white transition-colors">DNA Test for Court</Link></li>
                <li><Link to="/services/immigration-dna-test" className="hover:text-white transition-colors">Immigration DNA Test</Link></li>
                <li><Link to="/services/home-dna-testing" className="hover:text-white transition-colors">Home DNA Testing</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Information</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/dna-test-cost" className="hover:text-white transition-colors">DNA Test Cost in Kenya</Link></li>
                <li><Link to="/dna-test-process" className="hover:text-white transition-colors">DNA Test Process</Link></li>
                <li><Link to="/dna-test-results" className="hover:text-white transition-colors">DNA Test Results</Link></li>
                <li><Link to="/dna-test-requirements" className="hover:text-white transition-colors">Test Requirements</Link></li>
                <li><Link to="/private-vs-legal" className="hover:text-white transition-colors">Private vs Legal Testing</Link></li>
                <li><Link to="/faqs" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
                <li><Link to="/locations" className="hover:text-white transition-colors">Our Locations</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 text-secondary flex-shrink-0" />
                  <a href="tel:+254711371092" className="hover:text-white transition-colors">+254 711 371092</a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 text-accent flex-shrink-0" />
                  <a href="tel:+254712612764" className="hover:text-white transition-colors">+254 712 612 764 (Emergency)</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5 text-secondary flex-shrink-0" />
                  <a href="mailto:dna@bioteldna.co.ke" className="hover:text-white transition-colors">dna@bioteldna.co.ke</a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5 text-secondary flex-shrink-0" />
                  <span>24 Hours Service (Mon - Sun)</span>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://wa.me/254711371092?text=Hello%20Biotel%20DNA%2C%20I%20would%20like%20to%20enquire%20about%20DNA%20testing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Biotel DNA Kenya. All rights reserved.</p>
            <p className="mt-2">Professional DNA Testing Services in Nairobi, Kenya</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
