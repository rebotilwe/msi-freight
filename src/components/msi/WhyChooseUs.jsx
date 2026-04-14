import { MessageSquare, Star, Target, Shield, Users, Headphones } from "lucide-react";

const reasons = [
  {
    icon: MessageSquare,
    title: "Open & Honest Communications",
    description: "We maintain transparency with our clients at every stage of the logistics process.",
  },
  {
    icon: Star,
    title: "Exceptional Services",
    description: "Our team is committed to delivering quality that consistently exceeds expectations.",
  },
  {
    icon: Target,
    title: "Goal Orientated",
    description: "We align our operations with your business goals to ensure the best outcomes.",
  },
  {
    icon: Shield,
    title: "Safety & Efficiency",
    description: "Safety and efficiency are of utmost importance to both our customers and our company.",
  },
  {
    icon: Users,
    title: "Healthy Relationships",
    description: "We invest in continuous, long-term relationships with every client and partner.",
  },
  {
    icon: Headphones,
    title: "Close Client Contact",
    description: "Open communication lines between staff and management ensure high service levels.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-block bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded tracking-widest uppercase mb-4">
              Our Advantage
            </div>
            <h2 className="font-barlow font-extrabold text-4xl md:text-5xl text-secondary leading-tight mb-6">
              WHY CHOOSE
              <span className="text-brand-red block">MSI FREIGHT?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We are more than a transport company — we are your dedicated
              logistics partner. With over 15 years of collective experience and
              a relentless commitment to service excellence, MSI Freight is the
              partner you can rely on.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded transition-colors duration-200"
            >
              Work With Us
            </a>
          </div>

          {/* Right: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-5 border border-gray-100 rounded-xl hover:border-brand-red/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-brand-red transition-colors duration-200">
                  <Icon className="w-4 h-4 text-brand-red group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-semibold text-secondary text-sm mb-1.5">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}