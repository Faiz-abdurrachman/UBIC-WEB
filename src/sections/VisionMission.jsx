import { motion } from 'framer-motion';
import NeoCard from '../components/NeoCard';
import SectionHeader from '../components/SectionHeader';
import AbstractShapes from '../components/AbstractShapes';
import { BookOpen, Lightbulb, Network, Rocket } from 'lucide-react';

const VISION_TEXT = 'To become a leading hub of innovation in blockchain technology and digital assets, fostering global competitiveness and impactful solutions.';

const MISSION_ITEMS = [
  {
    icon: BookOpen,
    title: 'Enhancing Knowledge',
    description: 'Workshops and educational programs to build technical expertise',
  },
  {
    icon: Lightbulb,
    title: 'Fostering Research',
    description: 'Creating impactful solutions through research and development',
  },
  {
    icon: Network,
    title: 'Professional Networks',
    description: 'Connecting students with industry leaders and opportunities',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship',
    description: 'Supporting startup initiatives and innovative projects',
  },
];

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="relative py-20 px-6 lg:px-8 bg-section-alt abstract-shapes"
    >
      <div className="absolute inset-0 diagonal-lines opacity-30 z-0 pointer-events-none" />
      <AbstractShapes />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Vision & Mission"
          subtitle="Our purpose and commitment to blockchain innovation"
        />

        <div className="space-y-16">
          {/* Vision - Manifesto Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="neo-card rounded-lg border-2 border-tech-black p-0"
              style={{ boxShadow: '6px 6px 0px 0px #111827', backgroundColor: '#006A4E' }}
            >
              <div className="p-8 md:p-12 space-y-4">
                <div className="inline-block px-3 py-1 text-xs font-mono bg-white/20 border-2 border-white/30 rounded-lg text-white">
                  VISION
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-white">
                  {VISION_TEXT}
                </h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission - 2x2 Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-block px-3 py-1 text-xs font-mono bg-tech-black text-white border-2 border-tech-black rounded-lg">
                MISSION
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MISSION_ITEMS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <NeoCard className="h-full p-6" hoverEffect={true}>
                      <div className="space-y-4">
                        <div 
                          className="p-3 rounded-lg border-2 w-fit"
                          style={{
                            backgroundColor: 'rgba(0, 106, 78, 0.1)',
                            borderColor: '#006A4E'
                          }}
                        >
                          <IconComponent
                            className="w-6 h-6"
                            style={{ color: '#006A4E' }}
                            strokeWidth={2}
                          />
                        </div>
                        <h4 className="text-xl font-heading font-bold text-tech-black">
                          {item.title}
                        </h4>
                        <p className="text-sm font-mono text-tech-black/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </NeoCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
