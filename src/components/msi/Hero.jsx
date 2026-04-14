import { ArrowRight, Shield, Award, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0f1a2e" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80')",
        }}
      />

      {/* Red diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-10"
        style={{
          background: "linear-gradient(135deg, transparent 40%, #DC2626 100%)",
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            B-BBEE Compliant · Established 2019
          </div>

          <h1 className="font-barlow font-extrabold text-white leading-none mb-6">
            <span className="block text-5xl md:text-7xl lg:text-8xl">
              MOVING SOUTH
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-brand-red">
              AFRICA FORWARD
            </span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            MSI Freight (PTY) LTD — a premier road freight transport & courier
            company delivering safe, timely and cost-effective logistics
            solutions across South Africa and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded transition-all duration-200 text-base"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded transition-all duration-200 text-base"
            >
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {[
              { icon: Clock, value: "5+", label: "Years Experience" },
              { icon: Shield, value: "100%", label: "Fleet Insured" },
              { icon: Award, value: "B-BBEE", label: "Compliant" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-start gap-1">
                <Icon className="w-5 h-5 text-brand-red mb-1" />
                <div className="text-white font-barlow font-bold text-2xl md:text-3xl">
                  {value}
                </div>
                <div className="text-white/50 text-xs tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Truck image */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:flex items-end justify-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
          alt="Freight truck"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0f1a2e 20%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}