import React from 'react';
import { motion } from 'framer-motion';
import MSILogo from '../../assets/logo1.png';

// ✅ Add 2 images (you can change these)
import AboutImg1 from '../../assets/img2.jpeg';
import AboutImg2 from '../../assets/img6.jpeg';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 lg:pl-32 lg:pr-16 overflow-hidden">

      {/* Grid Overlay */}
      <div className="grid-overlay absolute inset-0" />

      {/* Subtle Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={MSILogo}
          alt="MSI Freight"
          className="w-64 lg:w-[500px] opacity-5 object-contain"
        />
      </div>

      <div className="relative max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
            SEC_01 // COMPANY PROFILE
          </p>

          <h2 className="font-archivo text-3xl md:text-5xl text-foreground uppercase tracking-tight mb-12">
            ABOUT MSI FREIGHT
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-inter text-foreground/90 text-base leading-[1.8]">
              MSI Transport was established in 2019, registered as MSI Freight (PTY) LTD, sister company of MSI Plant Hire (PTY) LTD.
            </p>

            <p className="font-inter text-muted-foreground text-base leading-[1.8]">
              MSI Freight is a well-established road Freight transport and Courier Company, growing through professional service and customer-first operations.
            </p>

            {/* 🔥 NEW: IMAGE GRID */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <img
                src={AboutImg1}
                alt="Warehouse operations"
                className="rounded-lg object-cover h-32 w-full"
              />
              <img
                src={AboutImg2}
                alt="Logistics operations"
                className="rounded-lg object-cover h-32 w-full"
              />
            </div>

            {/* Registration Info */}
    <div className="pt-6 border-t border-border text-center md:text-left">
              <p className="font-mono text-xs text-muted-foreground mb-2">
                COMPANY REGISTRATION
              </p>
              <p className="font-mono text-sm">2022/221548/07</p>

              <p className="font-mono text-xs text-muted-foreground mt-4 mb-2">
                VAT REGISTRATION
              </p>
              <p className="font-mono text-sm">4590302651</p>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >

            {/* Card 1 */}
            <div className="border border-border p-8 hover:border-primary/50 transition">
              <p className="font-mono text-xs text-primary mb-4">
                EXECUTIVE PROFILE
              </p>

              <h3 className="font-archivo text-xl mb-2">
                MR MOHAMED AKBAR
              </h3>

              <p className="text-xs text-muted-foreground mb-4">
                MANAGING DIRECTOR
              </p>

              <p className="text-sm text-muted-foreground leading-[1.8]">
                Over 15 years of experience in the transport industry driving business success.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-border p-8 hover:border-primary/50 transition">
              <p className="font-mono text-xs text-primary mb-4">
                OPERATIONS
              </p>

              <h3 className="font-archivo text-xl mb-2">
                MR MOHAMED AKBAR
              </h3>

              <p className="text-xs text-muted-foreground mb-4">
                OPERATIONS MANAGER
              </p>

              <p className="text-sm text-muted-foreground leading-[1.8]">
                Experienced in logistics operations with a strong focus on efficiency and service excellence.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}