import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const MSI_LOGO = 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/17e92797d_generated_image.png';

export default function HeroSection({ heroImage }) {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MSI Freight industrial fleet at twilight"
          className="w-full h-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Subtle Center Logo (Premium Branding) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={MSI_LOGO}
          alt="MSI Freight"
          className="w-48 lg:w-72 opacity-10 object-contain"
        />
      </div>

      {/* Top Right Logo */}
      <div className="absolute top-6 right-6 lg:top-10 lg:right-10">
        <img
          src={MSI_LOGO}
          alt="MSI Freight"
          className="w-20 lg:w-28 object-contain opacity-80"
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-20 lg:pb-32 px-6 lg:pl-32 lg:pr-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
            SEC_00 // MSI FREIGHT (PTY) LTD
          </p>

          <h1 className="font-archivo text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground uppercase leading-[0.9] tracking-tight max-w-4xl">
            ENGINEERING<br />
            <span className="text-primary">THE INVISIBLE</span>
          </h1>

          <p className="font-inter text-muted-foreground text-base md:text-lg mt-6 max-w-xl leading-relaxed">
            Road Freight Transport & Courier Services — Domestic and Cross-Border Logistics Since 2019
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="font-mono text-sm bg-primary text-primary-foreground px-8 py-4 tracking-wider hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              REQUEST QUOTE
            </button>

            <button
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="font-mono text-sm text-foreground border border-border px-8 py-4 tracking-wider hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              VIEW SERVICES
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </motion.button>
      </div>

      {/* Side Marker */}
      <div className="hidden lg:block absolute top-8 right-8 font-mono text-[10px] text-muted-foreground tracking-widest">
        EST. 2019 // SOUTH AFRICA
      </div>
    </section>
  );
}