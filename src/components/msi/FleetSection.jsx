import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'YEARS EXPERIENCE', code: 'STAT_01' },
  { value: '24/7', label: 'OPERATIONS', code: 'STAT_02' },
  { value: '365', label: 'DAYS A YEAR', code: 'STAT_03' },
  { value: '2019', label: 'ESTABLISHED', code: 'STAT_04' },
];

const MSI_LOGO = 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/17e92797d_generated_image.png';

const TRUCK_IMAGES = [
  'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/a725e8a17_truck1.jpeg',
  'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/e11c17935_truck2.jpg',
  'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/52b6004a1_truck3.jpg',
  'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/4c894ec7a_truck4.jpg',
  'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/875358b8a_truck5.jpg',
];

export default function FleetSection({ fleetImage }) {
  return (
    <section id="fleet" className="relative py-24 lg:py-32">

      {/* HERO SECTION */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src={fleetImage}
          alt="MSI Freight fleet of South African trucks"
          className="w-full h-full object-cover"
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

        {/* Center faded logo (better branding) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={MSI_LOGO}
            alt="MSI Freight"
            className="w-40 lg:w-64 opacity-10 object-contain"
          />
        </div>

        {/* Corner logo (reduced dominance) */}
        <div className="absolute top-6 right-6 lg:top-10 lg:right-10">
          <img
            src={MSI_LOGO}
            alt="MSI Freight"
            className="w-20 lg:w-28 object-contain opacity-80"
          />
        </div>

        {/* Text content */}
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

      {/* TRUCK GRID */}
      <div className="px-6 lg:pl-32 lg:pr-16 pt-8 pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl">
          {TRUCK_IMAGES.slice(1).map((src, i) => (
            <div key={i} className="relative overflow-hidden group aspect-video">
              <img
                src={src}
                alt={`MSI Freight truck ${i + 2}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* STATS + FEATURES */}
      <div className="px-6 lg:pl-32 lg:pr-16 pt-16">
        <div className="max-w-6xl">

          {/* Stats */}
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
                <p className="font-mono text-[9px] text-muted-foreground tracking-widest mb-3">
                  {stat.code}
                </p>
                <p className="font-archivo text-2xl lg:text-3xl text-primary">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground tracking-wider mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Features (Logo as icon) */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'FULLY INSURED',
                desc: 'All our vehicles are covered against theft and accidents. Peace of mind is what we can assure all our clients.',
              },
              {
                title: '24/7 OPERATIONS',
                desc: 'Round-the-clock logistics operations ensuring your cargo reaches its destination on time, every time.',
              },
              {
                title: 'STRATEGIC LOCATIONS',
                desc: 'Positioned near the ports of Durban and Richards Bay for cost-effective import and export movement through Southern Africa.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-4"
              >
                {/* Logo instead of icon */}
                <img
                  src={MSI_LOGO}
                  alt=""
                  className="w-5 h-5 object-contain flex-shrink-0 mt-1"
                />

                <div>
                  <h3 className="font-archivo text-sm text-foreground tracking-wider mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}