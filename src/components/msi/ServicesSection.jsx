import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Warehouse, Ship } from 'lucide-react';
import MSILogo from '../../assets/logo1.png';

// ✅ Import your images
import TransportImg from '../../assets/img3.jpeg';
import WarehouseImg from '../../assets/img1.jpeg';
import ShipImg from '../../assets/img5.jpeg';

// ✅ Attach images directly to services (BEST PRACTICE)
const services = [
  {
    code: '02_A',
    icon: Truck,
    image: TransportImg,
    title: 'TRANSPORT DIVISION',
    description:
      'Full spectrum of services for all transportation requirements — domestic or cross-border.',
    details: [
      'Bonded Transport',
      'Containerized Transport',
      'Bulk & Breakbulk',
      'Abnormal Crane Truck Facilities',
      'Tippers / Earthmoving Equipment',
    ],
    footer:
      'Thorough understanding of Customs Regulations in South Africa. B.E.E Compliant company.',
  },
  {
    code: '02_B',
    icon: Warehouse,
    image: WarehouseImg,
    title: 'WAREHOUSING',
    description:
      'Specialised solutions for handling, storage and transport of goods.',
    details: [
      'Qualified Riggers & Operators',
      'Durban & Richards Bay Locations',
      'Specialized Equipment',
      'Import & Export Goods',
      'Transparent Communication',
    ],
    footer:
      'Adding value to your logistics chain through efficiency and reliability.',
  },
  {
    code: '02_C',
    icon: Ship,
    image: ShipImg,
    title: 'SHIP SPARES',
    description:
      'Clearing and forwarding services for ship owners and vessel agents globally.',
    details: [
      'Preclearance of Cargo',
      'Air & Sea Freight — 24/7',
      'Landed Goods Handling',
      'Storage Solutions',
      'Global Delivery',
    ],
    footer: 'Company motto — "DO IT RIGHT FIRST TIME".',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 px-6 lg:pl-32 lg:pr-16">
      <div className="grid-overlay absolute inset-0" />

      <div className="relative max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
            SEC_02 // CAPABILITIES
          </p>
          <h2 className="font-archivo text-3xl md:text-5xl text-foreground uppercase">
            THE CAPABILITY MATRIX
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group border border-border bg-card overflow-hidden rounded-xl hover:border-primary/50 transition"
              >

                {/* 🔥 IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex justify-between mb-4">
                    <p className="font-mono text-[10px] text-muted-foreground">
                      {service.code}
                    </p>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="font-archivo text-lg uppercase mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        <img
                          src={MSILogo}
                          alt=""
                          className="w-4 opacity-70"
                        />
                        <span className="text-xs text-foreground/80">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground italic">
                    {service.footer}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}