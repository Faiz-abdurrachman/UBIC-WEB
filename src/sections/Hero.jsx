import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="gradient-orb gradient-orb-blue absolute top-1/4 -left-1/4 w-96 h-96"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="gradient-orb gradient-orb-blue absolute bottom-1/4 -right-1/4 w-80 h-80"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Main Heading */}
          <motion.div variants={fadeUp} className="space-y-4">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-text-primary leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              UNU Blockchain
              <br />
              <motion.span
                className="text-ubic-blue inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Innovation Club
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-text-secondary font-body max-w-2xl mx-auto leading-relaxed"
          >
            A student-led engineering community building the future of
            blockchain infrastructure and Web3 innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <motion.a
              href="#join"
              className="group relative px-8 py-3.5 bg-ubic-blue text-white font-body text-sm font-medium rounded-lg overflow-hidden"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Join UBIC</span>
              <motion.div
                className="absolute inset-0 bg-ubic-blue/80"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-3.5 border border-white/10 text-text-primary font-body text-sm font-medium rounded-lg transition-all duration-300 hover:border-ubic-blue/50 hover:bg-white/5 glow-on-hover"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center space-y-2 text-text-secondary hover:text-ubic-blue transition-colors group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-mono">Scroll</span>
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
