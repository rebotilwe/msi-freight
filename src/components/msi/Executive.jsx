import { Briefcase, Award, TrendingUp } from "lucide-react";

export default function Executive() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0f1a2e" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-red/20 text-brand-red text-xs font-semibold px-3 py-1 rounded tracking-widest uppercase mb-4">
            Leadership
          </div>
          <h2 className="font-barlow font-extrabold text-4xl md:text-5xl text-white">
            EXECUTIVE <span className="text-brand-red">PROFILE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
              alt="Managing Director"
              className="w-full h-96 object-cover rounded-xl object-top"
            />
            <div className="absolute inset-0 rounded-xl" style={{ background: "linear-gradient(to top, #0f1a2e 0%, transparent 50%)" }} />
            <div className="absolute bottom-6 left-6">
              <div className="text-white font-barlow font-bold text-2xl">Mr. Mohamed Akbar</div>
              <div className="text-brand-red text-sm font-medium tracking-wide">Managing Director</div>
              <div className="text-white/50 text-xs mt-0.5">MSI Freight (PTY) LTD · MSI Plant Hire (PTY) LTD</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-white/70 leading-relaxed mb-6 text-base">
              Mr. Mohamed Akbar is the Managing Director of MSI Freight & MSI Plant Hire,
              and has been instrumental in the success of both businesses. The company's
              management is minimal in order to keep overhead low, yet together the
              management team brings more than <strong className="text-white">15 years' experience</strong> within
              the transport industry.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Mr. Akbar's resilience and determination are the driving force behind
              the business growth. Having worked his way from driver to operations
              manager, he is well-equipped and experienced — continually exceeding
              customer expectations and delivering professional quality services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Briefcase, value: "15+", label: "Years in Transport" },
                { icon: Award, value: "B-BBEE", label: "Compliant" },
                { icon: TrendingUp, value: "2019", label: "Founded" },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                >
                  <Icon className="w-5 h-5 text-brand-red mx-auto mb-2" />
                  <div className="text-white font-barlow font-bold text-2xl">{value}</div>
                  <div className="text-white/50 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}