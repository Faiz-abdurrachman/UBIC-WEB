import { useState } from 'react';
import { motion } from 'framer-motion';
import NeoCard from '../components/NeoCard';
import SectionHeader from '../components/SectionHeader';
import AbstractShapes from '../components/AbstractShapes';
import { Trophy, Rocket, Users, Code2 } from 'lucide-react';

const PROGRAMS = [
  {
    icon: Trophy,
    title: 'UBIC Block Challenge',
    description: 'Internal competition platform for students to showcase their blockchain solutions and compete in hackathons.',
    iconColor: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.1)',
  },
  {
    icon: Rocket,
    title: 'UBIC Launchpad',
    description: 'Turning innovative ideas into real blockchain projects. Support for startup initiatives and MVP development.',
    iconColor: '#006A4E',
    bgColor: 'rgba(0, 106, 78, 0.1)',
  },
  {
    icon: Users,
    title: 'The UBIC Sync',
    description: 'Regular seminars and workshops covering Smart Contracts, NFTs, DeFi, and emerging blockchain technologies.',
    iconColor: '#111827',
    bgColor: 'rgba(17, 24, 39, 0.1)',
  },
  {
    icon: Code2,
    title: 'UBIC Dev Camp',
    description: 'Intensive coding bootcamp for hands-on blockchain development. From fundamentals to advanced implementations.',
    iconColor: '#006A4E',
    bgColor: 'rgba(0, 106, 78, 0.1)',
  },
];

export default function Programs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="programs"
      className="relative py-20 px-6 lg:px-8 bg-section-pattern"
    >
      <div className="absolute inset-0 bold-grid opacity-60 z-0 pointer-events-none" />
      <AbstractShapes />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Our Programs"
          subtitle="The core initiatives driving blockchain innovation at UNU"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROGRAMS.map((program, index) => {
            const IconComponent = program.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <NeoCard
                  className="h-full p-8 relative overflow-hidden"
                  hoverEffect={true}
                  borderColor={isHovered ? 'gold' : 'tech-black'}
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-4">
                        <div
                          className="p-4 rounded-lg border-2 w-fit transition-colors duration-200"
                          style={{
                            backgroundColor: isHovered ? 'rgba(245, 158, 11, 0.1)' : program.bgColor,
                            borderColor: isHovered ? '#F59E0B' : program.iconColor
                          }}
                        >
                          <IconComponent
                            className="w-8 h-8 transition-colors duration-200"
                            style={{ color: isHovered ? '#F59E0B' : program.iconColor }}
                            strokeWidth={2}
                          />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-tech-black tracking-tight">
                          {program.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm font-mono text-tech-black/70 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {isHovered && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      className="absolute bottom-0 left-0 h-1 bg-accent-gold"
                    />
                  )}
                </NeoCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
