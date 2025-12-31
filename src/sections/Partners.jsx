import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { partners } from '../data/content';

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative py-40 px-6 lg:px-8 section-container"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-150px' }}
          variants={staggerContainer}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="space-y-6 max-w-4xl">
            <div className="space-y-4">
              <motion.h2
                className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Partners
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
              className="text-xl text-text-secondary font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Organizations and institutions supporting our mission.
            </motion.p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="flex items-center justify-center p-8 border border-white/10 rounded-card-lg bg-surface/30 backdrop-blur-sm glow-on-hover hover:border-ubic-blue/30 hover:bg-surface/50 h-full transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <span className="text-text-secondary font-body text-center text-sm group-hover:text-text-primary transition-colors">
                    {partner.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
