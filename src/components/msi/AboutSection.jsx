import React from 'react';
import { motion } from 'framer-motion';

const MSI_LOGO =
  'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/17e92797d_generated_image.png';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 lg:pl-32 lg:pr-16 overflow-hidden">

      {/* Grid Overlay */}
      <div className="grid-overlay absolute inset-0" />

      {/* Subtle Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={MSI_LOGO}
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
              MSI Transport was established in 2019, registered as MSI Freight (PTY) LTD, sister company of MSI Plant Hire (PTY) LTD. A successful plant hire started off from humble beginnings and has grown substantially, catering for an ever-increasing demand for its quality services.
            </p>

            <p className="font-inter text-muted-foreground text-base leading-[1.8]">
              MSI Freight is a well-established road Freight transport and Courier Company. Starting with the acquisition of a small truck, transporting a variety of general Cargo and Goods, the business expanded due to its professional Transport Services in the Road Freight Industry, by having the customer's best interest at heart.
            </p>

            {/* Registration Info */}
            <div className="pt-6 border-t border-border">
              <p className="font-mono text-xs text-muted-foreground tracking-wider mb-3">
                COMPANY REGISTRATION
              </p>
              <p className="font-mono text-sm text-foreground">
                2022/221548/07
              </p>

              <p className="font-mono text-xs text-muted-foreground tracking-wider mt-4 mb-3">
                VAT REGISTRATION
              </p>
              <p className="font-mono text-sm text-foreground">
                4590302651
              </p>
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
            <div className="border border-border p-8 hover:border-primary/50 transition-colors">
              <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
                EXECUTIVE PROFILE
              </p>

              <h3 className="font-archivo text-xl text-foreground uppercase mb-4">
                MR MOHAMED AKBAR
              </h3>

              <p className="font-mono text-xs text-muted-foreground mb-4">
                MANAGING DIRECTOR
              </p>

              <p className="font-inter text-muted-foreground text-sm leading-[1.8]">
                Mr Mohamed Akbar is managing director of MSI FREIGHT & MSI PLANT HIRE, and has been instrumental in the success of the business. Together the management have more than 15 years' experience within the transport industry.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-border p-8 hover:border-primary/50 transition-colors">
              <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
                OPERATIONS
              </p>

              <h3 className="font-archivo text-xl text-foreground uppercase mb-4">
                MR MOHAMED AKBAR
              </h3>

              <p className="font-mono text-xs text-muted-foreground mb-4">
                OPERATIONS MANAGER
              </p>

              <p className="font-inter text-muted-foreground text-sm leading-[1.8]">
                From driver to operations manager, he is well equipped and experienced. Through his passion and commitment he has been able to continually exceed customer expectations.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}