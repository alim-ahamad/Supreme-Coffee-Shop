'use client'

import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { Mail, MapPin, Phone } from 'lucide-react'

export function FooterCTA() {
  return (
    <footer id="contact" className="relative py-24 md:py-32 bg-background border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="font-serif text-4xl font-bold text-coffee mb-4 text-balance">
              Visit Supreme Coffee
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Experience our craft firsthand. Our dedicated baristas are ready to welcome you.
            </p>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-text-secondary hover:text-gold transition-colors cursor-pointer"
              >
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium">123 Coffee Lane</p>
                  <p className="text-sm">Brew City, BC 12345</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-text-secondary hover:text-gold transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium">(555) COFFEE-1</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-text-secondary hover:text-gold transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium">hello@supremecoffee.com</p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gold/20 to-transparent p-8 rounded-2xl border border-gold/30"
          >
            <h3 className="font-serif text-2xl font-bold text-coffee mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-text-secondary mb-6">
              Get exclusive access to new roasts, brewing tips, and special offers.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white border border-gold/20 text-coffee placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
              <AnimatedButton
                variant="primary"
                size="md"
                className="w-full"
                type="submit"
              >
                Subscribe
              </AnimatedButton>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gold/20 pt-8 text-center"
        >
          <p className="text-text-secondary">
            © 2025 Supreme Coffee Shop. Crafted with passion. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
