'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Leaf, Flame, Wind, Droplets, Coffee } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function CoffeeJourneySection() {
  const journeyRef = useRef(null)
  const containerRef = useRef(null)

  const steps = [
    {
      icon: Leaf,
      title: 'Bean Selection',
      description: 'Sourced from ethical farms across Ethiopia, Colombia, and Kenya',
      number: '01',
    },
    {
      icon: Flame,
      title: 'Roasting',
      description: 'Small-batch roasted to perfection, bringing out unique flavor profiles',
      number: '02',
    },
    {
      icon: Wind,
      title: 'Cooling',
      description: 'Precision-cooled to lock in the perfect roast level',
      number: '03',
    },
    {
      icon: Droplets,
      title: 'Grinding',
      description: 'Freshly ground moments before brewing for maximum flavor',
      number: '04',
    },
    {
      icon: Coffee,
      title: 'Brewing',
      description: 'Expert extraction using premium equipment and techniques',
      number: '05',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger items on scroll
      const items = gsap.utils.toArray('.journey-item') as HTMLElement[]
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 0.5,
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="journey" ref={containerRef} className="py-24 md:py-40 bg-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -mr-48" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">The Journey</span>
          <h2 className="headline-lg text-foreground mt-4 mb-6 text-balance">
            From Bean to Cup
          </h2>
          <p className="body-lg text-foreground/70 max-w-2xl mx-auto">
            Every cup of Supreme Coffee tells a story. Witness the meticulous process behind our craft.
          </p>
        </motion.div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Premium connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  className="journey-item"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-full">
                    {/* Step number background - premium glow */}
                    <div className="absolute -top-8 left-0 md:left-1/2 md:-translate-x-1/2 z-20">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-background font-serif font-bold text-xl shadow-2xl shadow-accent/50"
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Premium glass card */}
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="h-full pt-12 md:pt-16 px-6 py-10 rounded-2xl glass-luxury hover:bg-surface/60 transition-all duration-300 group"
                    >
                      {/* Icon with animation */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 rounded-lg bg-accent/30 flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/50 transition-all shadow-lg shadow-accent/20"
                      >
                        <Icon className="w-7 h-7 text-accent" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="font-serif text-xl font-bold text-foreground text-center mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-foreground/60 text-center leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
