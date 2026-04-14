import { useState, useEffect } from "react";
import { Menu, X, Truck } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Fleet", href: "#fleet" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-2xl py-3" : "bg-navy/95 py-4"
      }`}
      style={{ backgroundColor: "#0f1a2e" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-barlow font-800 text-white text-xl tracking-wider leading-none">
              MSI <span className="text-brand-red">FREIGHT</span>
            </div>
            <div className="text-white/50 text-[10px] tracking-widest uppercase">
              (PTY) LTD
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-red hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 flex flex-col gap-4" style={{ backgroundColor: "#0f1a2e" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm font-medium py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-brand-red text-white text-sm font-semibold px-5 py-2.5 rounded text-center mt-2"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}