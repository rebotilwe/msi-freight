import { Target, Eye, Star } from "lucide-react";

const points = [
  "To take care of your total distribution needs.",
  "Safe and timely deliveries with fair and competitive pricing while providing a safe workplace for employees and maintaining integrity and honesty with customers and business partners.",
  "To become the recognized leader in the transport industry.",
  "Maintaining and developing successful business relationships and operations.",
  "Delivering high quality transport services at affordable prices — continually developing cost-effective strategies to minimize customer rate increases.",
];

export default function MissionVision() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0f1a2e" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-red/20 text-brand-red text-xs font-semibold px-3 py-1 rounded tracking-widest uppercase mb-4">
            Our Purpose
          </div>
          <h2 className="font-barlow font-extrabold text-4xl md:text-5xl text-white">
            MISSION & <span className="text-brand-red">VISION</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Points */}
          <div className="space-y-5">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded bg-brand-red/20 border border-brand-red/40 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-red transition-colors duration-200">
                  <Star className="w-3.5 h-3.5 text-brand-red group-hover:text-white transition-colors duration-200" />
                </div>
                <p className="text-white/70 leading-relaxed text-sm">{point}</p>
              </div>
            ))}
          </div>

          {/* Company Values Card */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-brand-red" />
                <h3 className="text-white font-barlow font-bold text-xl tracking-wide">COMPANY VALUES</h3>
              </div>
              <p className="text-white/70 leading-relaxed italic text-base">
                "Our company strives to provide excellent service to all our
                clients through our dedicated team!"
              </p>
            </div>

            <div className="bg-brand-red rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-white" />
                <h3 className="text-white font-barlow font-bold text-xl tracking-wide">OUR VISION</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-base">
                To become the recognized leader in the transport industry —
                building lasting partnerships through integrity, excellence, and
                relentless dedication to our customers' success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}