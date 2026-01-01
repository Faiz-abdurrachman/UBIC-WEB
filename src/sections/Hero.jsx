import { motion } from 'framer-motion';
import TechButton from '../components/TechButton';
import ubicLogo from '../assets/ubic.png';

// SVG Wireframe Block/Chain Animation Component
function BlockChainWireframe() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0">
      <svg
        width="600"
        height="300"
        viewBox="0 0 600 300"
        className="w-full h-full max-w-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[0, 120, 240, 360].map((x, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <rect
              x={x}
              y="100"
              width="80"
              height="80"
              stroke="#111827"
              strokeWidth="2"
              fill="none"
              rx="4"
            />
            <line x1={x + 40} y1="100" x2={x + 40} y2="180" stroke="#111827" strokeWidth="1" strokeDasharray="2,2" />
            <line x1={x} y1="140" x2={x + 80} y2="140" stroke="#111827" strokeWidth="1" strokeDasharray="2,2" />
            {i < 3 && (
              <motion.line
                x1={x + 80}
                y1="140"
                x2={x + 120}
                y2="140"
                stroke="#111827"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: i * 0.2 + 0.4 }}
              />
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden bg-background abstract-shapes"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 animated-grid z-0" />
      
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 diagonal-lines opacity-50 z-0 pointer-events-none" />
      
      {/* Additional abstract elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-primary-green/25 rounded-lg rotate-12 opacity-40 z-0 pointer-events-none hidden md:block" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-accent-gold/25 rounded-lg -rotate-12 opacity-40 z-0 pointer-events-none hidden md:block" />

      {/* Wireframe Animation */}
      <BlockChainWireframe />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo Above Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 border-tech-black bg-background flex items-center justify-center overflow-hidden shadow-brutal">
              <img 
                src={ubicLogo} 
                alt="UBIC Logo" 
                className="w-full h-full object-contain p-3"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-4xl md:text-5xl font-heading font-bold text-primary-green">
                U
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-tech-black leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              UNU Blockchain
              <br />
              <motion.span
                className="text-primary-green inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Innovation Club
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl font-mono text-tech-black/80 max-w-2xl mx-auto leading-relaxed"
          >
            Student-led study club exploring blockchain & digital innovation at UNU Yogyakarta.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <TechButton variant="primary" href="#programs">
              Join Our Space
            </TechButton>
            <TechButton variant="secondary" href="#programs">
              View Programs
            </TechButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
