import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MSI_LOGO =
  'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/17e92797d_generated_image.png';

const navItems = [
  { id: 'hero', label: 'HOME', code: '00' },
  { id: 'about', label: 'ABOUT', code: '01' },
  { id: 'services', label: 'SERVICES', code: '02' },
  { id: 'fleet', label: 'FLEET', code: '03' },
  { id: 'values', label: 'VALUES', code: '04' },
  { id: 'contact', label: 'CONTACT', code: '05' },
];

export default function SideNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 flex-col items-center justify-between py-8 z-50 border-r border-border bg-background/95 backdrop-blur-sm">

        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src={MSI_LOGO}
            alt="MSI Freight"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`group relative flex flex-col items-center gap-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded p-1 ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                {/* Code */}
                <span className="font-mono text-[10px]">
                  {item.code}
                </span>

                {/* Active indicator (line instead of dot) */}
                <span
                  className={`w-[2px] h-4 transition-all ${
                    isActive
                      ? 'bg-primary scale-110'
                      : 'bg-muted-foreground group-hover:bg-foreground'
                  }`}
                />

                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-2 py-1 bg-secondary text-foreground text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Vertical Branding */}
        <div
          className="font-mono text-[9px] text-muted-foreground tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          MSI FREIGHT (PTY) LTD
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-background/95 backdrop-blur-sm border-b border-border">
        <img
          src={MSI_LOGO}
          alt="MSI Freight"
          className="h-8 object-contain"
        />

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center gap-10"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-4 py-2"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {item.code}
                </span>
                <span className="font-archivo text-2xl tracking-wider">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}