import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { programs } from '../data/content';

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative py-40 px-6 lg:px-8 section-container"
    >
      {/* Subtle background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-orb gradient-orb-blue absolute top-0 left-1/4 w-72 h-72 opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-150px' }}
          variants={staggerContainer}
          className="space-y-24"
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
                Programs
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
              Structured initiatives designed to advance blockchain knowledge and practical skills.
            </motion.p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => {
              const content = program.en;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="h-full p-8 border border-white/10 rounded-card-lg bg-surface/40 backdrop-blur-sm glow-on-hover hover:border-ubic-blue/30 transition-all duration-300"
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary tracking-tight">
                          {program.title}
                        </h3>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-ubic-blue/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ rotate: 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-4 h-4 text-ubic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                      <p className="text-text-secondary font-body leading-relaxed text-lg">
                        {content.description}
                      </p>
                      <ul className="space-y-3 pt-4 border-t border-white/5">
                        {content.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                            className="flex items-start space-x-3 text-sm text-text-secondary group/item"
                          >
                            <motion.span
                              className="text-ubic-blue mt-1.5 flex-shrink-0"
                              whileHover={{ scale: 1.2 }}
                            >
                              —
                            </motion.span>
                            <span className="font-body">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
