import React from 'react';
import { motion } from 'framer-motion';
import { Target, MessageSquare, ShieldCheck, Users, Zap, HeartHandshake } from 'lucide-react';

const values = [
  { icon: MessageSquare, title: 'Open & Honest Communications', code: '01' },
  { icon: Zap, title: 'Exceptional Services', code: '02' },
  { icon: Target, title: 'Goal Orientated', code: '03' },
  { icon: ShieldCheck, title: 'Safety & Efficiency First', code: '04' },
  { icon: HeartHandshake, title: 'Healthy & Continuous Relationships', code: '05' },
  { icon: Users, title: 'Close Client Contact & High Service Levels', code: '06' },
];

const missionPoints = [
  'To take care of your total distribution needs.',
  'Safe and timely deliveries with fair and competitive pricing.',
  'Providing a safe work place for employees and maintaining integrity and honesty.',
  'To become the recognized leader in the transport industry.',
  'Delivering high quality transport services at affordable prices.',
];

const MSI_LOGO = 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/17e92797d_generated_image.png';

export default function ValuesSection({ servicesImage }) {
  return (
    <section id="values" className="relative py-24 lg:py-32 px-6 lg:pl-32 lg:pr-16">
      <div className="grid-overlay absolute inset-0" />

      <div className="relative max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
            SEC_04 // INTEGRITY
          </p>
          <h2 className="font-archivo text-3xl md:text-5xl text-foreground uppercase tracking-tight">
            WHY CHOOSE MSI
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="border border-border p-6 hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="flex items-start gap-3">
                    <img src={MSI_LOGO} alt="" className="w-5 h-5 object-contain flex-shrink-0 mt-0.5 opacity-85" />
                    <div>
                      <p className="font-mono text-[9px] text-muted-foreground tracking-widest mb-2">VAL_{value.code}</p>
                      <p className="font-inter text-sm text-foreground leading-snug">{value.title}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="border border-primary/30 p-8 mb-6">
              <p className="font-mono text-xs text-primary tracking-[0.3em] mb-6">MISSION & VISION</p>
              <div className="space-y-4">
                {missionPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <img src={MSI_LOGO} alt="" className="w-5 h-5 object-contain flex-shrink-0 mt-0.5 opacity-85" />
                    <p className="font-inter text-sm text-muted-foreground leading-[1.7]">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-48 overflow-hidden border border-border">
              <img src={servicesImage} alt="MSI Freight precision machinery" className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-archivo text-xl text-primary uppercase tracking-widest text-center">
                  B.E.E COMPLIANT
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}