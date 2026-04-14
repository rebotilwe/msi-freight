import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactSection({ contactImage }) {
  const [formState, setFormState] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');

    const response = await fetch('https://formspree.io/f/xpwpgvgq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormState('success');
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
    } else {
      setFormState('idle');
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={contactImage} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative px-6 lg:pl-32 lg:pr-16">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4">
              SEC_05 // ENGAGEMENT TERMINAL
            </p>
            <h2 className="font-archivo text-3xl md:text-5xl text-foreground uppercase tracking-tight">
              INITIATE CONTACT
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {formState === 'success' ? (
                <div className="border border-primary/40 p-12 flex flex-col items-center text-center">
                  <CheckCircle className="w-12 h-12 text-primary mb-6" strokeWidth={1} />
                  <h3 className="font-archivo text-xl text-foreground uppercase mb-4">TRANSMISSION RECEIVED</h3>
                  <p className="font-inter text-muted-foreground text-sm">
                    Our team will review your request and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="font-mono text-xs text-primary mt-8 border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="font-mono text-[10px] text-muted-foreground tracking-widest block mb-3">
                        01_NAME *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-border px-4 py-3 font-inter text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-mono text-[10px] text-muted-foreground tracking-widest block mb-3">
                        02_EMAIL *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-border px-4 py-3 font-inter text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="font-mono text-[10px] text-muted-foreground tracking-widest block mb-3">
                        03_COMPANY
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-border px-4 py-3 font-inter text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="font-mono text-[10px] text-muted-foreground tracking-widest block mb-3">
                        04_SERVICE_TYPE
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-border px-4 py-3 font-inter text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="" className="bg-card">Select Service</option>
                        <option value="transport" className="bg-card">Transport</option>
                        <option value="warehousing" className="bg-card">Warehousing</option>
                        <option value="ship-spares" className="bg-card">Ship Spares</option>
                        <option value="plant-hire" className="bg-card">Plant Hire</option>
                        <option value="other" className="bg-card">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="font-mono text-[10px] text-muted-foreground tracking-widest block mb-3">
                      05_MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-border px-4 py-3 font-inter text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Describe your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="font-mono text-sm bg-primary text-primary-foreground px-10 py-4 tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-3 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        TRANSMITTING
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        TRANSMIT REQUEST
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="border border-border p-8 space-y-6">
                <p className="font-mono text-[10px] text-primary tracking-widest">DIRECT CHANNELS</p>

                <div className="space-y-4">
                  <a href="tel:+27782333222" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                    <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    <span className="font-mono text-sm">078 233 3222</span>
                  </a>
                  <a href="tel:+27614233348" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                    <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    <span className="font-mono text-sm">061 423 3348</span>
                  </a>
                  <a href="mailto:Mohamed@msifreight.co.za" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                    <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    <span className="font-mono text-sm break-all">Mohamed@msifreight.co.za</span>
                  </a>
                </div>
              </div>

              <div className="border border-border p-8">
                <p className="font-mono text-[10px] text-primary tracking-widest mb-4">SISTER COMPANY</p>
                <h3 className="font-archivo text-base text-foreground uppercase mb-2">MSI PLANT HIRE (PTY) LTD</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">
                  The trusted name in Earth Moving. Hire of TLB, Bobcat, Rollers and Tippers.
                </p>
                <a href="mailto:msiplant02@gmail.com" className="font-mono text-xs text-primary hover:text-foreground transition-colors">
                  msiplant02@gmail.com
                </a>
              </div>

              <div className="border border-primary/20 bg-primary/5 p-6">
                <p className="font-mono text-[9px] text-primary tracking-widest mb-3">COMPLIANCE</p>
                <div className="flex flex-wrap gap-3">
                  <span className="font-mono text-[10px] text-muted-foreground border border-border px-3 py-1">B.E.E COMPLIANT</span>
                  <span className="font-mono text-[10px] text-muted-foreground border border-border px-3 py-1">CUSTOMS REG.</span>
                  <span className="font-mono text-[10px] text-muted-foreground border border-border px-3 py-1">INSURED FLEET</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}