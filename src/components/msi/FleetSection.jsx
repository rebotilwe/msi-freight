import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, MapPin } from 'lucide-react';

const stats = [
  { value: '15+', label: 'YEARS EXPERIENCE', code: 'STAT_01' },
  { value: '24/7', label: 'OPERATIONS', code: 'STAT_02' },
  { value: '365', label: 'DAYS A YEAR', code: 'STAT_03' },
  { value: '2019', label: 'ESTABLISHED', code: 'STAT_04' },
];

export default function FleetSection({ fleetImage }) {
  return (
    <section id="fleet" className="relative py-24 lg:py-32">
      {/* Full-bleed image */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src={fleetImage}
          alt="MSI Freight fleet of heavy-duty trucks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        
        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:pl-32 lg:pr-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
              SEC_03 // OUR FLEET
            </p>
            <h2 className="font-archivo text-3xl md:text-5xl text-foreground uppercase tracking-tight">
              OPERATIONAL STRENGTH
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="px-6 lg:pl-32 lg:pr-16 pt-16">
        <div className="max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border p-6 lg:p-8"
              >
                <p className="font-mono text-[9px] text-muted-foreground tracking-widest mb-3">{stat.code}</p>
                <p className="font-archivo text-2xl lg:text-3xl text-primary">{stat.value}</p>
                <p className="font-mono text-[10px] text-muted-foreground tracking-wider mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'FULLY INSURED', desc: 'All our vehicles are covered against theft and accidents. Peace of mind is what we can assure all our clients.' },
              { icon: Clock, title: '24/7 OPERATIONS', desc: 'Round-the-clock logistics operations ensuring your cargo reaches its destination on time, every time.' },
              { icon: MapPin, title: 'STRATEGIC LOCATIONS', desc: 'Positioned near the ports of Durban and Richards Bay for cost-effective import and export movement through Southern Africa.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-archivo text-sm text-foreground tracking-wider mb-2">{item.title}</h3>
                    <p className="font-inter text-sm text-muted-foreground leading-[1.7]">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}