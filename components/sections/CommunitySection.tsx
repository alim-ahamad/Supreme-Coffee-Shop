'use client'

import { motion } from 'framer-motion'
import { VideoBackground } from '@/components/ui/VideoBackground'
import { Star, Sparkles } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { glowHover } from '@/lib/animations'

export function CommunitySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Coffee Enthusiast & Barista',
      text: 'The attention to detail and quality is absolutely unmatched. Every cup tastes different, and that\'s the true beauty of specialty coffee. Supreme Coffee has transformed my daily ritual.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Marcus Thompson',
      role: 'Cafe Owner',
      text: 'Supreme Coffee has become essential to our cafe experience. Our customers notice the difference immediately. The consistency and quality keep them coming back.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Home Barista & Coffee Roaster',
      text: 'I\'ve tried many beans from around the world, but these remind me why I fell in love with specialty coffee in the first place. Excellence in every grain.',
      rating: 5,
      avatar: '👩‍🍳',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cards = gsap.utils.toArray('.testimonial-card') as HTMLElement[]
    cards.forEach((card) => {
      glowHover(card, 0.35)
    })
  }, [])

  return (
    <section id="community" className="relative py-24 md:py-40 bg-background overflow-hidden">
      {/* Background video - Full screen */}
      <div className="absolute inset-0 h-full">
        <VideoBackground
          src="/assets/videos/Cafe_patrons_talking_bartenders_…_202607121200.mp4"
          overlayOpacity={0.5}
        />
        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/80" />
      </div>

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
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Community Voice</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-coffee mb-6 text-balance">
            Loved by Coffee Lovers
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Hear from those who have experienced the Supreme Coffee difference
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div ref={containerRef} className="relative">
          {/* Main testimonial display */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                className="testimonial-card"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="group relative h-full"
                >
                  {/* Premium card background */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

                  {/* Card content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Avatar and info */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/40 to-gold/20 flex items-center justify-center text-2xl"
                      >
                        {testimonial.avatar}
                      </motion.div>
                      <div>
                        <h4 className="font-serif font-bold text-coffee">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Rating stars */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <motion.div key={j} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 * j }}>
                          <Star size={18} className="fill-gold text-gold" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quotation mark design */}
                    <motion.div
                      initial={{ opacity: 0.3 }}
                      whileHover={{ opacity: 0.6 }}
                      className="text-6xl font-serif text-gold/20 leading-none mb-3"
                    >
                      "
                    </motion.div>

                    {/* Testimonial text */}
                    <p className="text-text-secondary leading-relaxed flex-1 mb-6 text-lg">
                      {testimonial.text}
                    </p>

                    {/* Bottom accent */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      className="h-1 bg-gradient-to-r from-gold to-transparent rounded-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Carousel indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mt-12"
          >
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === activeIndex ? 'bg-gold w-8' : 'bg-gold/30 hover:bg-gold/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
