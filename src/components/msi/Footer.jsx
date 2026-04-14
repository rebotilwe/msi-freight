import { Truck, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import MSILogo from '../../assets/logo1.png'; // Adjust the filename as needed

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#080f1c" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={MSILogo}
                alt="MSI Freight" 
                className="h-16 md:h-20 lg:h-24 object-contain" 
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Road Freight Transport & Courier Company. Established in 2019, delivering
              excellence across South Africa and beyond.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-brand-red text-xs font-semibold px-3 py-1 rounded-full">
              B-BBEE Compliant
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-barlow font-bold text-sm tracking-widest uppercase text-white/80 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {["Transport Division", "Warehousing", "Ship Spares", "Clearing & Forwarding", "Customs Compliance"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 hover:text-white text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-barlow font-bold text-sm tracking-widest uppercase text-white/80 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Phone className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                078 233 3222
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Phone className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                061 423 3348
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Mail className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                Mohamed@msifreight.co.za
              </li>
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0 mt-0.5" />
                Durban · Richards Bay · Nationwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/30 text-xs">
            <p>© {new Date().getFullYear()} MSI Freight (PTY) LTD. All rights reserved. | Reg: 2022/221548/07 | VAT: 4590302651</p>
            <div className="hidden md:block w-px h-3 bg-white/20" />
            <p>Road Freight Transport & Courier Company</p>
          </div>
          
          {/* Development Credit */}
          <p className="text-white/40 text-xs flex items-center gap-1">
            Developed by{" "}
            <a 
              href="https://afribizconnect.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-red hover:text-brand-red/80 transition-colors inline-flex items-center gap-1 font-medium"
            >
              Afribiz Connect <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>

      {/* Bottom red bar */}
      <div className="h-1 w-full bg-brand-red" />
    </footer>
  );
}