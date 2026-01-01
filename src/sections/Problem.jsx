import { motion } from 'framer-motion';
import NeoCard from '../components/NeoCard';
import SectionHeader from '../components/SectionHeader';
import AbstractShapes from '../components/AbstractShapes';
import { TrendingUp, Users, AlertTriangle } from 'lucide-react';

const PROBLEM_DATA = [
  {
    icon: TrendingUp,
    stat: '400%',
    label: 'Growth in demand for Blockchain Developers',
    iconColor: '#006A4E',
    bgColor: 'rgba(0, 106, 78, 0.1)',
  },
  {
    icon: Users,
    stat: '11M+',
    label: 'Digital Asset Users in Indonesia',
    iconColor: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.1)',
  },
  {
    icon: AlertTriangle,
    stat: 'Talent Gap',
    label: 'Very few local builders',
    iconColor: '#111827',
    bgColor: 'rgba(17, 24, 39, 0.1)',
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative py-20 px-6 lg:px-8 bg-section-pattern blueprint-pattern"
    >
      <AbstractShapes />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="The Problem"
          subtitle="Why blockchain education matters now more than ever"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEM_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <NeoCard
                  className="h-full flex flex-col items-center text-center p-8"
                  hoverEffect={true}
                >
                  <div 
                    className="mb-4 p-4 rounded-lg border-2"
                    style={{ 
                      backgroundColor: item.bgColor,
                      borderColor: item.iconColor
                    }}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: item.iconColor }}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-tech-black mb-2">
                    {item.stat}
                  </h3>
                  <p className="text-sm font-mono text-tech-black/70 leading-relaxed">
                    {item.label}
                  </p>
                </NeoCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

