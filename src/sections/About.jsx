import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { aboutContent } from '../data/content';

export default function About() {
  const content = aboutContent.en;

  return (
    <section
      id="about"
      className="relative py-40 px-6 lg:px-8 section-container"
    >
      {/* Subtle background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-orb gradient-orb-blue absolute top-1/2 right-0 w-64 h-64 opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-150px' }}
          className="space-y-16"
        >
          <motion.div variants={fadeUp} className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {content.title}
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-ubic-blue/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
            <motion.p
              className="text-xl md:text-2xl text-text-secondary font-body leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="space-y-6 pt-12 border-t border-white/10"
          >
            {content.details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 group"
              >
                <motion.div
                  className="flex-shrink-0 w-2 h-2 rounded-full bg-ubic-blue mt-3 group-hover:scale-125 transition-transform"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                />
                <p className="text-lg text-text-secondary font-body leading-relaxed pt-1">
                  {detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
