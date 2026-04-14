import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red opacity-10 rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
              alt="MSI Freight operations"
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-2xl relative z-10"
            />
            {/* Accent bar */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-brand-red z-20" />
            {/* Badge overlay */}
            <div
              className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-lg p-5 z-20"
              style={{ border: "1px solid #f0f0f0" }}
            >
              <div className="text-brand-red font-barlow font-extrabold text-3xl">2019</div>
              <div className="text-gray-500 text-xs tracking-wide">Est. Year</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded tracking-widest uppercase mb-4">
              About MSI Freight
            </div>
            <h2 className="font-barlow font-extrabold text-4xl md:text-5xl text-secondary leading-tight mb-6">
              A TRUSTED NAME IN
              <span className="text-brand-red block">ROAD FREIGHT</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              MSI Transport was established in 2019, registered as MSI Freight (PTY) LTD,
              sister company of MSI Plant Hire (PTY) LTD. Starting with a small truck
              transporting general cargo and goods, the business expanded rapidly due to
              its professional transport services in the Road Freight Industry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              MSI Freight has the customer's best interest at heart, offering a well-established
              road freight transport and courier service that caters to an ever-increasing demand
              for quality logistics services across Southern Africa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "B-BBEE Compliant Company",
                "Domestic & Cross-Border",
                "15+ Years Management Experience",
                "Customs Regulation Expertise",
                "Fully Insured Fleet",
                "Sister Company: MSI Plant Hire",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}