import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function SectionHeader({ 
  title, 
  subtitle, 
  className = '' 
}) {
  return (
    <motion.div
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-tech-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg font-mono text-tech-black/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};
