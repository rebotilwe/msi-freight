import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);

    // Replace with your Formspree form ID
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded tracking-widest uppercase mb-4">
            Get In Touch
          </div>
          <h2 className="font-barlow font-extrabold text-4xl md:text-5xl text-secondary">
            CONTACT <span className="text-brand-red">US</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Ready to streamline your logistics? Get in touch with our team
            today for a tailored quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-barlow font-bold text-2xl text-secondary mb-6 tracking-wide">
              CONTACT DETAILS
            </h3>

            <div className="space-y-5 mb-8">
              {[
                { icon: Phone, label: "Phone", value: "078 233 3222", sub: "061 423 3348" },
                { icon: Mail, label: "Email", value: "Mohamed@msifreight.co.za", sub: "msiplant02@gmail.com" },
                { icon: MapPin, label: "Operations", value: "South Africa", sub: "Durban · Richards Bay · Nationwide" },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 tracking-widest uppercase mb-0.5">{label}</div>
                    <div className="text-secondary font-semibold text-sm">{value}</div>
                    {sub && <div className="text-gray-500 text-xs mt-0.5">{sub}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Company Reg */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: "#f8f9fb" }}
            >
              <h4 className="text-secondary font-barlow font-bold text-sm tracking-widest uppercase mb-3">
                Company Registration
              </h4>
              <div className="space-y-1.5 text-sm text-gray-600">
                <div><span className="text-gray-400">Reg No:</span> <span className="font-medium">2022/221548/07</span></div>
                <div><span className="text-gray-400">VAT No:</span> <span className="font-medium">4590302651</span></div>
                <div><span className="text-gray-400">B-BBEE:</span> <span className="font-medium text-brand-red">Compliant</span></div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-14 h-14 text-brand-red mb-4" />
                <h3 className="font-barlow font-bold text-2xl text-secondary mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 tracking-widest uppercase block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 tracking-widest uppercase block mb-1.5">
                      Company
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 tracking-widest uppercase block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="john@company.co.za"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 tracking-widest uppercase block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+27 xx xxx xxxx"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 tracking-widest uppercase block mb-1.5">
                    Service Required
                  </label>
                  <select
                    name="service"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary focus:outline-none focus:border-brand-red transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>Transport Division</option>
                    <option>Warehousing</option>
                    <option>Ship Spares / Clearing & Forwarding</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 tracking-widest uppercase block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your logistics requirements..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-secondary focus:outline-none focus:border-brand-red transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-red hover:bg-red-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
                <p className="text-gray-400 text-xs text-center">
                  * Replace <code>YOUR_FORM_ID</code> with your Formspree form ID in the code.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}