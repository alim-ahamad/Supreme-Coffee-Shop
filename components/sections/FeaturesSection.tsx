'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { Globe, Users, Award, Zap } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Globe,
      title: 'Ethically Sourced',
      description: 'Direct relationships with farmers ensuring fair trade and sustainable practices.',
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Our baristas train internationally to bring you world-class coffee preparation.',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Multiple specialty coffee competition winners, verified by industry experts.',
    },
    {
      icon: Zap,
      title: 'Fresh Daily',
      description: 'Small batch roasting ensures peak freshness within 48 hours of roast date.',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-coffee">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4 text-balance">
            Why Choose Supreme
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Excellence is our standard, not an exception
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <GlassCard variant="dark" className="h-full flex flex-col">
                  <div className="mb-4 p-3 bg-gold/30 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-cream mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-cream/80 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
