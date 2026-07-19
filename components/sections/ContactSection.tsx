'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react' 
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const recipient = siteConfig.email; // or settings.email

  const subject = encodeURIComponent(formState.subject);

  const body = encodeURIComponent(`
Name: ${formState.name}

Email: ${formState.email}

Phone: ${formState.phone}

-----------------------------------

${formState.message}
`);

  const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${encodeURIComponent(recipient)}` +
    `&su=${subject}` +
    `&body=${body}`;

  const mailtoLink =
    `mailto:${recipient}?subject=${subject}&body=${body}`;

  const newWindow = window.open(gmailLink, "_blank");

  if (!newWindow) {
    window.location.href = mailtoLink;
  }
};

    

  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/3 rounded-full blur-3xl -ml-36" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="headline-lg text-foreground mt-4 mb-6 text-balance">
            Connect with Supreme Coffee
          </h2>
          <p className="body-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-stretch min-h-96 md:min-h-[600px]">
          {/* Left side - Premium video background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full min-h-96 rounded-3xl overflow-hidden group"
          >
            {/* Video background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="/assets/videos/Steam_rising_from_coffee_mug_202607121200.mp4"
                type="video/mp4"
              />
            </video>

            {/* Premium overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />

            {/* Floating coffee bean decorations */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-accent/30 blur-xl animate-pulse" />
            <div className="absolute bottom-20 left-8 w-16 h-16 rounded-full bg-accent/20 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />

            {/* Contact info cards */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Visit Us', value: siteConfig.address  },
                  { icon: Phone, label: 'Call Us', value: siteConfig.phone },
                  { icon: Mail, label: 'Email Us', value: siteConfig.email },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="glass-luxury p-5 hover:bg-surface/60 transition-all cursor-pointer group/card"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent/30 rounded-lg group-hover/card:bg-accent/50 transition-colors">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground/60">{item.label}</p>
                          <p className="font-semibold text-foreground">{item.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right side - Premium contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 bg-surface/40 border border-accent/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 focus:bg-surface/60 transition-all duration-300 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 bg-surface/40 border border-accent/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 focus:bg-surface/60 transition-all duration-300 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-3 bg-surface/40 border border-accent/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 focus:bg-surface/60 transition-all duration-300 backdrop-blur-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 bg-surface/40 border border-accent/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 focus:bg-surface/60 transition-all duration-300 backdrop-blur-sm"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 bg-surface/40 border border-accent/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 focus:bg-surface/60 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Error message */}
                

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-background font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-3 group"
                >

                  Send Message

                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Success message - Full screen overlay */}
        
      </div>
    </section>
  )
}
