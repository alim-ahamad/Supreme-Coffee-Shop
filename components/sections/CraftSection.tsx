'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { VideoBackground } from '@/components/ui/VideoBackground'
import { Leaf, Flame, Clock, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { glowHover } from '@/lib/animations'

export function CraftSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const craftSteps = [
    {
      icon: Leaf,
      title: 'Premium Sourcing',
      description: 'Sourced from ethical farms across Ethiopia, Colombia, and Kenya. Each origin brings unique terroir and flavor complexity.',
      details: 'Direct trade partnerships since 2015',
    },
    {
      icon: Flame,
      title: 'Small Batch Roasting',
      description: 'Precision roasting in small batches to unlock each bean\'s unique characteristics and flavor potential.',
      details: 'Roasted fresh weekly',
    },
    {
      icon: Clock,
      title: 'Expert Extraction',
      description: 'Precise timing and technique ensure every cup reaches its full potential with optimal flavor and body.',
      details: 'Temperature controlled to perfection',
    },
  ]

  useEffect(() => {
    const cards = gsap.utils.toArray('.craft-card') as HTMLElement[]
    cards.forEach((card) => {
      glowHover(card, 0.3)
    })
  }, [])

  return (
    <section id="craft" ref={sectionRef} className="relative py-24 md:py-40 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Meticulous Process</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-coffee mb-6 text-balance">
            The Art of Craft
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every cup is a masterpiece created through decades of expertise, passion, and meticulous attention to detail. From sourcing to extraction, we perfect every step.
          </p>
        </motion.div>

        {/* Hero Video with cinematic treatment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 md:h-[550px] mb-24 rounded-3xl overflow-hidden group shadow-2xl"
        >
          <VideoBackground
            src="/assets/videos/Roasted_coffee_beans_macro_pan_202607121159.mp4"
            overlayOpacity={0.25}
            className="rounded-3xl"
          />

          {/* Cinematic top overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none rounded-3xl" />

          {/* Glow effect on hover */}
          <motion.div
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 transition-opacity rounded-3xl"
          />
        </motion.div>

        {/* Craft Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {craftSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="craft-card group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative"
                >
                  {/* Card background */}
<div
  className="
    absolute inset-0
    rounded-3xl
    overflow-hidden

    bg-gradient-to-br
    from-[#3B261D]/95
    via-[#2A1B15]/90
    to-[#18110E]/95

    border border-[#C89B5C]/15

    transition-all
    duration-500
    ease-out

    group-hover:-translate-y-2
    group-hover:scale-[1.015]
    group-hover:border-[#D6B175]/45

    shadow-[0_8px_20px_rgba(0,0,0,0.18)]
    group-hover:shadow-[0_12px_30px_rgba(200,155,92,0.25)]
  "
>
  {/* Luxury glow overlay */}
  <div
    className="
      absolute inset-0
      rounded-3xl
      opacity-0
      transition-all
      duration-500
      group-hover:opacity-100

      bg-gradient-to-br
      from-[#F5E6D3]/10
      via-transparent
      to-[#C89B5C]/8
    "
  />
</div>
                 
                  {/* Card content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Step number */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/40 to-gold/20 flex items-center justify-center mb-6 group-hover:from-gold/50 group-hover:to-gold/30 transition-all"
                    >
                      <Icon className="w-6 h-6 text-gold" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-bold text-coffee mb-3 group-hover:text-gold transition-colors">
                      {step.title}
                    </h3>

                    {/* Accent line */}
                    <div className="w-8 h-1 bg-gradient-to-r from-gold to-transparent rounded-full mb-4" />

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed flex-1 mb-4">
                      {step.description}
                    </p>

                    {/* Details tag */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-sm text-gold font-medium"
                    >
                      <span>{step.details}</span>
                      <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
