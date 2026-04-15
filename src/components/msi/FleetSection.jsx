import React from 'react';
import { motion } from 'framer-motion';
import MSILogo from '../../assets/logo1.png';

import Truck1 from '../../assets/truck6.jpeg';
import Truck2 from '../../assets/truck12.jpeg';
import Truck3 from '../../assets/truck7.jpeg';
import Truck4 from '../../assets/truck8.jpeg';
import Truck5 from '../../assets/img4.jpeg';
import Truck6 from '../../assets/img7.jpeg';

const stats = [
  { value: '15+', label: 'YEARS EXPERIENCE', code: 'STAT_01' },
  { value: '24/7', label: 'OPERATIONS', code: 'STAT_02' },
  { value: '365', label: 'DAYS A YEAR', code: 'STAT_03' },
  { value: '2019', label: 'ESTABLISHED', code: 'STAT_04' },
];

const TRUCK_IMAGES = [Truck1, Truck2, Truck3, Truck4, Truck5, Truck6];

export default function FleetSection() {
  return (
    <section id="fleet" className="relative py-24 lg:py-32">

      {/* HERO */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src={Truck6}
          alt="MSI Freight fleet"
          className="w-full h-full object-cover"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

        {/* subtle brand watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={MSILogo}
            alt="MSI Freight"
            className="w-64 opacity-10"
          />
        </div>

        {/* header */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:pl-32 lg:pr-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
              SEC_03 // OUR FLEET
            </p>
            <h2 className="font-archivo text-3xl md:text-5xl text-foreground uppercase">
              OPERATIONAL STRENGTH
            </h2>
          </motion.div>
        </div>
      </div>

      {/* TRUCK GRID */}
      <div className="px-6 lg:pl-32 lg:pr-16 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl">

          {TRUCK_IMAGES.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden group aspect-video rounded-xl border border-border"
            >
              <img
                src={src}
                alt={`MSI Freight truck ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

              {/* OPTIONAL: subtle watermark per truck */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src={MSILogo}
                  alt=""
                  className="w-20 opacity-10"
                />
              </div>

              {/* label */}
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                Fleet {i + 1}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* STATS */}
      <div className="px-6 lg:pl-32 lg:pr-16 pt-16">
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
              <p className="font-archivo text-2xl text-primary">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: 'FULLY INSURED',
              desc: 'All vehicles are covered for full operational security and client peace of mind.',
            },
            {
              title: '24/7 OPERATIONS',
              desc: 'Round-the-clock logistics ensuring timely delivery across all routes.',
            },
            {
              title: 'STRATEGIC LOCATIONS',
              desc: 'Optimised routes near major ports for efficient freight movement.',
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
              <img
                src={MSILogo}
                alt=""
                className="w-5 h-5 opacity-70 flex-shrink-0 mt-1"
              />

              <div>
                <h3 className="font-archivo text-sm tracking-wider mb-2">
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
    </section>
  );
}