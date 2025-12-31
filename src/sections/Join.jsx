import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { joinContent } from '../data/content';

export default function Join() {
  const content = joinContent.en;

  return (
    <section
      id="join"
      className="relative py-40 px-6 lg:px-8 section-container overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-orb gradient-orb-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20" />
        <div className="grid-pattern absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-150px' }}
          className="space-y-16 text-center"
        >
          <motion.div variants={fadeUp} className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {content.title}
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-ubic-blue/50 mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
            <motion.p
              className="text-2xl font-heading font-semibold text-ubic-blue"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.subtitle}
            </motion.p>
            <motion.p
              className="text-xl text-text-secondary font-body leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-4 pt-8"
          >
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="flex items-start space-x-4 p-6 border border-white/10 rounded-card-lg bg-surface/40 backdrop-blur-sm glow-on-hover hover:border-ubic-blue/30 text-left"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-2 h-2 rounded-full bg-ubic-blue mt-2 group-hover:scale-125 transition-transform"
                  />
                  <span className="text-text-secondary font-body leading-relaxed">
                    {benefit}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#"
              className="group relative inline-block px-10 py-4 bg-ubic-blue text-white font-body text-sm font-medium rounded-lg overflow-hidden"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{content.cta}</span>
              <motion.div
                className="absolute inset-0 bg-ubic-blue/80"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
