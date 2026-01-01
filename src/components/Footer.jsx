import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ubicLogo from '../assets/ubic.png';

const SOCIAL_LINKS = [
  { label: 's.id/ubicspace', href: 'https://s.id/ubicspace' },
  { label: '@ubic.unujogja', href: 'https://instagram.com/ubic.unujogja' },
];

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-tech-black bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                {/* Footer Logo */}
                <div className="w-12 h-12 rounded-lg border-2 border-tech-black bg-background flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img 
                    src={ubicLogo} 
                    alt="UBIC Logo" 
                    className="w-full h-full object-contain p-1.5"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-sm font-heading font-bold text-primary-green">
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
              </div>
              <p className="text-sm font-mono text-tech-black/80">
                UNU Blockchain Innovation Club
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-tech-black hover:text-primary-green transition-colors group"
                >
                  <span>{link.label}</span>
                  <ExternalLink 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    strokeWidth={2} 
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t-2 border-grid-lines">
            <p className="text-xs font-mono text-tech-black/60 text-center">
              Copyright 2025 UBIC Dev Team
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
