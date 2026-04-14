import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Warehouse, Ship } from 'lucide-react';
import MSILogo from '../../assets/logo1.png'; // Adjust the filename as needed

const services = [
  {
    code: '02_A',
    icon: Truck,
    title: 'TRANSPORT DIVISION',
    description: 'Full spectrum of services for all transportation requirements — domestic or cross-border.',
    details: [
      'Bonded Transport',
      'Containerized Transport',
      'Bulk & Breakbulk',
      'Abnormal Crane Truck Facilities',
      'Tippers / Earthmoving Equipment',
    ],
    footer: 'Thorough understanding of Customs Regulations in South Africa. B.E.E Compliant company.',
  },
  {
    code: '02_B',
    icon: Warehouse,
    title: 'WAREHOUSING',
    description: 'Specialised solutions for the handling, storage and transport of industrial and domestic products.',
    details: [
      'Qualified Riggers & Operators',
      'Durban & Richards Bay Locations',
      'Specialized Handling Equipment',
      'Import & Export Goods',
      'Transparent Communication',
    ],
    footer: 'Adding value to your logistics chain by being consistent, efficient and dynamic.',
  },
  {
    code: '02_C',
    icon: Ship,
    title: 'SHIP SPARES',
    description: 'Appointed as Clearing and Forwarding agents by esteemed ship owners and vessel agents worldwide.',
    details: [
      'Preclearance of Imported Cargo',
      'Air & Sea Freight — 24/7/365',
      'Landed Goods from Vessel',
      'Catered Storage Needs',
      'Global Destinations',
    ],
    footer: 'Company motto — "DO IT RIGHT FIRST TIME"',
  },
];

export default function ServicesSection({ transportImg, warehouseImg, shipImg }) {
  const images = [transportImg, warehouseImg, shipImg];

  return (
    <section id="services" className="relative py-24 lg:py-32 px-6 lg:pl-32 lg:pr-16">
      <div className="grid-overlay absolute inset-0" />

      <div className="relative max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
            SEC_02 // CAPABILITIES
          </p>
          <h2 className="font-archivo text-3xl md:text-5xl text-foreground uppercase tracking-tight">
            THE CAPABILITY MATRIX
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative border border-border bg-card hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Image overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <img src={images[index]} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <p className="font-mono text-[10px] text-muted-foreground tracking-widest">{service.code}</p>
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-archivo text-lg text-foreground uppercase tracking-wide mb-4">
                    {service.title}
                  </h3>

                  <p className="font-inter text-muted-foreground text-sm leading-[1.7] mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <img 
                          src={MSILogo} 
                          alt="" 
                          className="w-5 h-5 object-contain flex-shrink-0 opacity-80" 
                        />
                        <span className="font-mono text-xs text-foreground/80">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="font-inter text-xs text-muted-foreground italic leading-relaxed">
                      {service.footer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}