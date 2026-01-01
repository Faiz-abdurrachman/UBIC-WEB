import { motion } from 'framer-motion';
import NeoCard from '../components/NeoCard';
import SectionHeader from '../components/SectionHeader';
import { FileText, Building2 } from 'lucide-react';

const PARTNERS = [
  { name: 'Gimbalabs Indonesia', logo: '/placeholder-gimbalabs.svg' },
  { name: 'DevWeb3 Jogja', logo: '/placeholder-devweb3.svg' },
  { name: 'Web3 Dog', logo: '/placeholder-web3dog.svg' },
];

export default function LegalPartners() {
  return (
    <section
      id="partners"
      className="relative py-20 px-6 lg:px-8 bg-section-alt"
    >
      <div className="absolute inset-0 stripe-pattern opacity-50 z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Legal Foundation & Partners"
          subtitle="Built on strong partnerships and official agreements"
        />

        <div className="space-y-12">
          {/* Legal Foundation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <NeoCard className="p-8 md:p-10" hoverEffect={false}>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-lg bg-primary-green/10 border-2 border-primary-green flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary-green" strokeWidth={2} />
                </div>
                <div className="space-y-4 flex-1">
                  <div>
                    <div className="inline-block px-3 py-1 text-xs font-mono bg-tech-black text-white border-2 border-tech-black rounded-lg mb-4">
                      LEGAL FOUNDATION
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-tech-black mb-3">
                      Memorandum of Understanding
                    </h3>
                  </div>
                  <p className="text-sm font-mono text-tech-black/70 leading-relaxed">
                    MoU between FTI UNU, Gimbalabs, & DevWeb3 Jogja
                  </p>
                  <p className="text-xs font-mono text-tech-black/60">
                    Document No. 003/UNU.FTI/PKS/VIII/2025
                  </p>
                </div>
              </div>
            </NeoCard>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-tech-black" strokeWidth={2} />
                <h3 className="text-xl font-heading font-bold text-tech-black">
                  Our Partners
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PARTNERS.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NeoCard
                    className="p-8 h-full flex flex-col items-center justify-center text-center"
                    hoverEffect={true}
                  >
                    <div className="w-32 h-32 mb-4 rounded-lg bg-background border-2 border-tech-black flex items-center justify-center overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`}
                        className="w-full h-full object-contain p-4"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.nextSibling) {
                            e.target.nextSibling.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center bg-grid-lines">
                        <Building2 className="w-12 h-12 text-tech-black/30" strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-sm font-mono font-medium text-tech-black">
                      {partner.name}
                    </p>
                  </NeoCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

