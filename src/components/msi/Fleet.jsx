import { Shield, CheckCircle2 } from "lucide-react";

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded tracking-widest uppercase mb-4">
            Our Assets
          </div>
          <h2 className="font-barlow font-extrabold text-4xl md:text-5xl text-secondary">
            OUR <span className="text-brand-red">FLEET</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            All vehicles are covered against theft and accidents. Peace of mind
            is what we can assure all our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80"
              alt="MSI Freight truck"
              className="rounded-lg h-48 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1504222490345-c075b7a8dc96?w=400&q=80"
              alt="Freight operations"
              className="rounded-lg h-48 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80"
              alt="Transport fleet"
              className="rounded-lg h-48 w-full object-cover col-span-2"
            />
          </div>

          {/* Fleet highlights */}
          <div>
            <div
              className="rounded-xl p-8 mb-6"
              style={{ backgroundColor: "#0f1a2e" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-brand-red" />
                <h3 className="text-white font-barlow font-bold text-xl tracking-wide">
                  FLEET INSURANCE
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                All our vehicles are comprehensively covered against theft and
                accidents. We ensure peace of mind for every client with fully
                insured logistics operations.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Scania Heavy-Duty Trucks",
                "Crane Trucks & Abnormal Load Vehicles",
                "Tippers & Earthmoving Equipment",
                "Containerized Transport Vehicles",
                "Fully Insured Against Theft & Accidents",
                "Regularly Maintained & Roadworthy Fleet",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
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