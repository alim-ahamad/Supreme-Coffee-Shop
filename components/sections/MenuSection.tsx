'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Coffee, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { glowHover } from '@/lib/animations'

export function MenuSection() {
  const menuRef = useRef(null)

  const menu = [
    {
      category: 'Espresso Classics',
      icon: '☕',
      items: [
        { name: 'Single Shot Espresso', description: 'Pure, concentrated excellence', price: '$3.50' },
        { name: 'Americano', description: 'Espresso meets hot water', price: '$4.00' },
        { name: 'Cappuccino', description: 'The perfect balance of espresso and milk', price: '$5.50' },
      ],
    },
    {
      category: 'Specialty Drinks',
      icon: '✨',
      items: [
        { name: 'Cortado', description: 'Equal parts espresso and steamed milk', price: '$4.50' },
        { name: 'Flat White', description: 'Velvety milk with espresso intensity', price: '$5.50' },
        { name: 'Macchiato', description: '"Marked" espresso with foam', price: '$4.50' },
      ],
    },
    {
      category: 'Single Origins',
      icon: '🌍',
      items: [
        { name: 'Ethiopian Yirgacheffe', description: 'Floral notes, vibrant acidity', price: '$6.00' },
        { name: 'Colombian Geisha', description: 'Complex flavor profile, smooth finish', price: '$7.00' },
        { name: 'Kenyan AA', description: 'Bold, fruit-forward, exceptional', price: '$6.50' },
      ],
    },
  ]

  useEffect(() => {
    const cards = gsap.utils.toArray('.menu-card') as HTMLElement[]
    cards.forEach((card) => {
      glowHover(card, 0.4)
    })
  }, [])

  return (
    <section id="menu" ref={menuRef} className="relative py-24 md:py-40 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/3 rounded-full blur-3xl" />

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
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Curated Selection</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          <h2 className="headline-lg text-foreground mb-6 text-balance">
            Our Premium Menu
          </h2>
          <p className="body-lg text-foreground/70 max-w-2xl mx-auto">
            Carefully curated selections crafted to elevate your coffee experience
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {menu.map((section, sectionIdx) => (
            <motion.div
              key={sectionIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIdx * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="menu-card"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="h-full relative group"
              >
                {/* Premium card background with luxury glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface/50 to-surface/20 rounded-2xl backdrop-blur-2xl border border-accent/30 group-hover:border-accent/60 group-hover:bg-surface/60 transition-all duration-300 shadow-2xl shadow-black/30" />

                {/* Card content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-8">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center text-2xl mb-4 group-hover:from-accent/60 group-hover:to-accent/30 transition-all shadow-lg shadow-accent/20"
                    >
                      {section.icon}
                    </motion.div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                      {section.category}
                    </h3>
                    <div className="w-10 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-full" />
                  </div>

                  {/* Items */}
                  <div className="space-y-5 flex-1">
                    {section.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: sectionIdx * 0.15 + itemIdx * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="pb-5 border-b border-accent/10 last:border-b-0 group/item"
                      >
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <h4 className="font-semibold text-foreground group-hover/item:text-accent transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-accent font-bold text-lg whitespace-nowrap flex-shrink-0 ml-2">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/60 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer glow accent */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent blur-sm mt-4"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
