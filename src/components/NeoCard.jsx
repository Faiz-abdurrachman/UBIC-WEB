import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SHADOW_COLORS = {
  gold: '#F59E0B',
  'tech-black': '#111827',
} as const;

export default function NeoCard({ 
  children, 
  className = '', 
  hoverEffect = true, 
  borderColor = 'tech-black', 
  onClick 
}) {
  const hasBackground = className.includes('bg-');
  const baseClasses = `neo-card p-6 ${hasBackground ? '' : 'bg-background'}`;
  const hoverClasses = hoverEffect ? 'neo-card-hover cursor-pointer' : '';
  const borderClasses = borderColor === 'gold' ? 'border-accent-gold' : 'border-tech-black';
  
  const shadowColor = SHADOW_COLORS[borderColor] || SHADOW_COLORS['tech-black'];
  const shadowStyle = { boxShadow: `6px 6px 0px 0px ${shadowColor}` };

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${borderClasses} ${className}`}
      style={shadowStyle}
      onClick={onClick}
      whileHover={hoverEffect ? { y: -4, x: -4 } : {}}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

NeoCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hoverEffect: PropTypes.bool,
  borderColor: PropTypes.oneOf(['gold', 'tech-black']),
  onClick: PropTypes.func,
};
