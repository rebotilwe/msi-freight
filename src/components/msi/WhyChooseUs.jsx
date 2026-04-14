import React from "react";
import { motion } from "framer-motion";
import MSILogo from '../../assets/logo.1png'; // Adjust the filename as needed

const reasons = [
  {
    title: "OPEN & HONEST COMMUNICATION",
    description:
      "We maintain transparency with our clients at every stage of the logistics process.",
  },
  {
    title: "EXCEPTIONAL SERVICES",
    description:
      "Our team is committed to delivering quality that consistently exceeds expectations.",
  },
  {
    title: "GOAL ORIENTATED",
    description:
      "We align our operations with your business goals to ensure the best outcomes.",
  },
  {
    title: "SAFETY & EFFICIENCY",
    description:
      "Safety and efficiency are of utmost importance to both our customers and our company.",
  },
  {
    title: "HEALTHY RELATIONSHIPS",
    description:
      "We invest in continuous, long-term relationships with every client and partner.",
  },
  {
    title: "CLOSE CLIENT CONTACT",
    description:
      "Open communication lines between staff and management ensure high service levels.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="values"
      className="relative py-24 lg:py-32 px-6 lg:pl-32 lg:pr-16 overflow-hidden"
    >
      {/* Grid Overlay */}
      <div className="grid-overlay absolute inset-0" />

      {/* Subtle Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={MSILogo}
          alt="MSI Freight"
          className="w-64 lg:w-[500px] opacity-5 object-contain"
        />
      </div>

      <div className="relative max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
              SEC_04 // WHY CHOOSE US
            </p>

            <h2 className="font-archivo text-3xl md:text-5xl text-foreground uppercase tracking-tight mb-6">
              WHY CHOOSE MSI FREIGHT
            </h2>

            <p className="font-inter text-muted-foreground leading-[1.8] mb-8 max-w-xl">
              We are more than a transport company — we are your dedicated
              logistics partner. With over 15 years of collective experience and
              a relentless commitment to service excellence, MSI Freight is the
              partner you can rely on.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-mono text-sm bg-primary text-primary-foreground px-8 py-4 tracking-wider hover:bg-primary/90 transition-colors"
            >
              WORK WITH US
            </button>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 border border-border hover:border-primary/40 transition-all duration-300"
              >
                {/* Logo instead of icon */}
                <div className="mb-4">
                  <img
                    src={MSILogo}
                    alt=""
                    className="w-6 h-6 object-contain opacity-80"
                  />
                </div>

                <h3 className="font-archivo text-sm text-foreground tracking-wider mb-2">
                  {item.title}
                </h3>

                <p className="font-inter text-sm text-muted-foreground leading-[1.7]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}