import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { footerContent } from '../data/content';

export default function Footer() {
  const content = footerContent.en; // Can be made dynamic

  return (
    <footer className="relative border-t border-white/10 bg-surface/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-heading font-bold tracking-tight text-text-primary">
                  UBIC
                </span>
                <span className="text-xs font-mono text-text-secondary font-normal">
                  /university
                </span>
              </div>
              <p className="text-sm text-text-secondary font-body">
                {content.affiliation}
              </p>
            </div>
            <p className="text-xs text-text-secondary font-mono">
              {content.legal}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
