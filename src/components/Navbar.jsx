import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ubicLogo from '../assets/ubic.png';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Problem', href: '#problem' },
  { label: 'Vision', href: '#vision' },
  { label: 'Programs', href: '#programs' },
  { label: 'Partners', href: '#partners' },
];

const SCROLL_THRESHOLD = 20;
const NAVBAR_HEIGHT = 80;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
      
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      let current = 'home';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.pageYOffset + rect.top;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            current = section;
          }
        }
      });
      
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - NAVBAR_HEIGHT;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b-2 border-tech-black transition-all duration-300 ${
        scrolled
          ? 'bg-background shadow-brutal'
          : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {/* Logo Image Area */}
            <div className="w-10 h-10 rounded-lg border-2 border-tech-black bg-background flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src={ubicLogo}
                alt="UBIC Logo" 
                className="w-full h-full object-contain p-1"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-xs font-heading font-bold text-primary-green">
                U
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold tracking-tight text-tech-black leading-tight">
                UBIC
              </span>
              <span className="text-xs font-mono text-tech-black/60 font-normal leading-tight">
                /university
              </span>
            </div>
          </motion.a>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-mono font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-tech-black bg-primary-green/10'
                      : 'text-tech-black/70 hover:text-tech-black hover:bg-grid-lines/50'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border-2 border-tech-black rounded-lg bg-background hover:bg-grid-lines/50 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-tech-black" strokeWidth={2} />
            ) : (
              <Menu className="w-5 h-5 text-tech-black" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-2 border-tech-black py-4 bg-background"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2 text-sm font-mono transition-colors duration-200 ${
                      isActive
                        ? 'text-tech-black bg-primary-green/10 border-l-2 border-primary-green'
                        : 'text-tech-black/70 hover:text-tech-black hover:bg-grid-lines/50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
