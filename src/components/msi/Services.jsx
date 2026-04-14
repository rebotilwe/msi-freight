import { Truck, Warehouse, Ship } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Transport Division",
    subtitle: "Domestic & Cross-Border",
    description:
      "Full spectrum transport services including Bonded Transport, Containerized Transport, Bulk, Breakbulk, Abnormal Crane Truck Facilities, and Tippers/Earthmoving Equipment.",
    items: [
      "Bonded Transport",
      "Containerized Transport",
      "Bulk & Breakbulk",
      "Abnormal Crane Truck",
      "Tippers / Earthmoving",
      "Customs Compliant",
    ],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    subtitle: "Storage & Distribution",
    description:
      "Specialised solutions for handling, storage and transport of industrial and domestic products near the ports of Durban and Richards Bay — ideal for import and export goods.",
    items: [
      "Industrial & Domestic Storage",
      "Ports of Durban & Richards Bay",
      "Qualified Riggers & Operators",
      "Import & Export Movement",
      "Specialised Handling Equipment",
      "Transparent Communication",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    icon: Ship,
    title: "Ship Spares",
    subtitle: "Clearing & Forwarding",
    description:
      "Appointed Clearing and Forwarding agents for esteemed ship owners, vessel agents and ships builders. Pre-clearance of imported cargo by air and sea freight — delivered 24/7/365.",
    items: [
      "Clearing & Forwarding",
      "Pre-clearance Services",
      "Air & Sea Freight",
      "24/7 / 365 Delivery",
      "Global Destinations",
      "Customs Compliant Storage",
    ],
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded tracking-widest uppercase mb-4">
            What We Do
          </div>
          <h2 className="font-barlow font-extrabold text-4xl md:text-5xl text-secondary">
            OUR <span className="text-brand-red">SERVICES</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Comprehensive logistics solutions tailored to meet your business
            requirements — from first mile to last mile delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-9 h-9 bg-brand-red rounded flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-barlow font-bold text-lg leading-none">{service.title}</div>
                      <div className="text-white/60 text-xs">{service.subtitle}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <a
                    href="#contact"
                    className="block w-full text-center bg-secondary hover:bg-brand-red text-white text-sm font-semibold py-2.5 rounded transition-colors duration-200"
                    style={{ backgroundColor: "#0f1a2e" }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motto */}
        <div className="mt-12 text-center bg-brand-red rounded-xl py-6 px-8">
          <p className="text-white font-barlow font-bold text-xl md:text-2xl tracking-wide">
            "DO IT RIGHT FIRST TIME"
          </p>
          <p className="text-white/70 text-sm mt-1">Our Company Motto & Benchmark Standard</p>
        </div>
      </div>
    </section>
  );
}