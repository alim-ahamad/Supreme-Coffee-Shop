'use client'

import { motion } from 'framer-motion'
import { VideoBackground } from '@/components/ui/VideoBackground'
import { Heart, Flame, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { infiniteFloat } from '@/lib/animations'

export function ExperienceSection() {
  const heartRef = useRef<HTMLDivElement>(null)
  const flameRef = useRef<HTMLDivElement>(null)
  const usersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heartRef.current) infiniteFloat(heartRef.current, 8, 3)
    if (flameRef.current) infiniteFloat(flameRef.current, 8, 3.2)
    if (usersRef.current) infiniteFloat(usersRef.current, 8, 3.4)
  }, [])

  const experiences = [
    {
      icon: Heart,
      ref: heartRef,
      title: 'Essence of Ritual',
      description: 'Our coffee isn\'t just a beverage—it\'s a moment of mindfulness. Feel the warmth in your hands, inhale the aroma, and let every sip transport you to a moment of pure presence.',
    },
    {
      icon: Flame,
      ref: flameRef,
      title: 'Craft Meets Comfort',
      description: 'We believe exceptional coffee is an everyday luxury. Whether you\'re starting your day or taking a pause, Supreme Coffee elevates the moment with precision and care.',
    },
    {
      icon: Users,
      ref: usersRef,
      title: 'Community Connection',
      description: 'From our expert baristas to our global farmer partners, every hand in the process shares our passion for excellence and sustainability.',
    },
  ]

  return (
    <section id="experience" className="relative py-24 md:py-40 bg-gradient-to-b from-coffee to-coffee/95 text-cream overflow-hidden">
      {/* Ambient glow effect */}
      <div className="absolute top-1/2 right-0 w-full h-96 bg-gradient-to-l from-gold/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold/80 text-sm font-semibold tracking-widest uppercase">The Experience</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance mt-4">
            Warmth in Every Cup
          </h2>
          <p className="text-xl text-cream/70 max-w-3xl mx-auto leading-relaxed">
            More than coffee—a sensory journey that awakens your senses and nourishes your soul
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Video - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <VideoBackground
              src="/assets/videos/Steam_rising_from_coffee_mug_202607121200.mp4"
              overlay={false}
              overlayOpacity={0}
              className="rounded-3xl"
            />

            {/* Cinematic overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-transparent rounded-3xl group-hover:from-coffee/30 transition-all duration-500" />

            {/* Glow ring on hover */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute inset-0 rounded-3xl border-2 border-gold/0 group-hover:border-gold/30 transition-all duration-500"
            />
          </motion.div>

          {/* Content - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((exp, i) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="group/card cursor-default"
                >
                  <div className="flex gap-4">
                    {/* Icon */}
                    <motion.div
                      ref={exp.ref}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="flex-shrink-0 w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center group-hover/card:bg-gold/30 transition-all duration-300"
                    >
                      <Icon className="w-7 h-7 text-gold" />
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold mb-2 group-hover/card:text-gold transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        className="h-1 bg-gradient-to-r from-gold to-transparent rounded-full mb-3"
                      />
                      <p className="text-cream/75 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
