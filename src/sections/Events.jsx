import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { events } from '../data/content';

export default function Events() {
  return (
    <section
      id="events"
      className="relative py-40 px-6 lg:px-8 bg-surface/40 section-container"
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
                Events
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
              Technical workshops, meetups, and community gatherings.
            </motion.p>
          </motion.div>

          {/* Events List */}
          <div className="space-y-4">
            {events.map((event, index) => {
              const content = event.en;
              const date = new Date(event.date);
              const formattedDate = date.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
                day: 'numeric',
              });

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="flex flex-col md:flex-row md:items-center gap-6 p-8 border border-white/10 rounded-card-lg bg-surface/30 backdrop-blur-sm glow-on-hover hover:border-ubic-blue/30 hover:bg-surface/50 transition-all duration-300"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center space-x-4">
                        <motion.span
                          className="px-3 py-1 text-xs font-mono text-ubic-blue bg-ubic-blue/10 rounded-full border border-ubic-blue/20 uppercase tracking-wider"
                          whileHover={{ scale: 1.05 }}
                        >
                          {event.type}
                        </motion.span>
                        <span className="text-xs font-mono text-text-secondary">
                          {formattedDate}
                        </span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-text-primary">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary font-body leading-relaxed">
                        {content.description}
                      </p>
                    </div>
                    <motion.div
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 4 }}
                    >
                      <svg className="w-6 h-6 text-ubic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
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
