import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { visionMission } from '../data/content';

export default function VisionMission() {
  const content = visionMission.en;

  return (
    <section className="relative py-40 px-6 lg:px-8 bg-surface/40 section-container">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 md:gap-32">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6 relative group"
          >
            <div className="space-y-4">
              <motion.div
                className="inline-block px-3 py-1 text-xs font-mono text-ubic-blue bg-ubic-blue/10 rounded-full border border-ubic-blue/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                VISION
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-primary tracking-tight">
                {content.vision.title}
              </h3>
              <motion.div
                className="w-16 h-0.5 bg-ubic-blue/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
            <p className="text-lg md:text-xl text-text-secondary font-body leading-relaxed pt-2">
              {content.vision.content}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6 relative group"
          >
            <div className="space-y-4">
              <motion.div
                className="inline-block px-3 py-1 text-xs font-mono text-ubic-blue bg-ubic-blue/10 rounded-full border border-ubic-blue/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                MISSION
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-primary tracking-tight">
                {content.mission.title}
              </h3>
              <motion.div
                className="w-16 h-0.5 bg-ubic-blue/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
            <p className="text-lg md:text-xl text-text-secondary font-body leading-relaxed pt-2">
              {content.mission.content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
