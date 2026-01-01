import { motion } from 'framer-motion';

const GRADIENT_ORBS = [
  {
    className: 'absolute top-1/4 -left-1/4 w-96 h-96 rounded-full',
    background: 'radial-gradient(circle, rgba(0, 106, 78, 0.08) 0%, transparent 70%)',
    animation: {
      x: [0, 50, 0],
      y: [0, 30, 0],
    },
    duration: 20,
  },
  {
    className: 'absolute bottom-1/4 -right-1/4 w-80 h-80 rounded-full',
    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 70%)',
    animation: {
      x: [0, -40, 0],
      y: [0, -20, 0],
    },
    duration: 25,
  },
];

export default function AbstractShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      {GRADIENT_ORBS.map((orb, index) => (
        <motion.div
          key={index}
          className={orb.className}
          style={{ background: orb.background }}
          animate={orb.animation}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-primary-green/10 rounded-lg rotate-12 opacity-30 hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-accent-gold/10 rounded-lg -rotate-12 opacity-30 hidden lg:block" />
    </div>
  );
}

