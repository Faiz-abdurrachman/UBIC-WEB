import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

const NAVBAR_HEIGHT = 80;
const SHADOW_COLOR = '#111827';

const BUTTON_VARIANTS = {
  primary: 'bg-primary-green text-white border-tech-black',
  secondary: 'bg-background text-tech-black border-tech-black',
  outline: 'bg-transparent text-tech-black border-tech-black hover:bg-tech-black hover:text-white',
} as const;

export default function TechButton({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  onClick 
}) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-bold text-sm uppercase tracking-tight rounded-lg border-2 transition-all duration-200';
  const buttonClasses = `${baseClasses} ${BUTTON_VARIANTS[variant]} ${className}`;
  const shadowStyle = { boxShadow: `6px 6px 0px 0px ${SHADOW_COLOR}` };

  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
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
    }
    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        style={shadowStyle}
        onClick={handleClick}
        whileHover={{ y: -2, x: -2, boxShadow: '8px 8px 0px 0px #111827' }}
        whileTap={{ y: 0, x: 0 }}
      >
        <span>{children}</span>
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      style={shadowStyle}
      onClick={onClick}
      whileHover={{ y: -2, x: -2, boxShadow: '8px 8px 0px 0px #111827' }}
      whileTap={{ y: 0, x: 0 }}
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4" strokeWidth={2} />
    </motion.button>
  );
}

TechButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
