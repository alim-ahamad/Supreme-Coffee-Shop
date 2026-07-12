'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { magneticHover } from '@/lib/animations'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const navLinksRef = useRef<Record<string, HTMLAnchorElement>>({})

  const navLinks = [
    { label: 'The Craft', href: '#craft' },
    { label: 'Experience', href: '#experience' },
    { label: 'Menu', href: '#menu' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Track active section
      for (const link of navLinks) {
        const section = document.querySelector(link.href)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(link.href)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Apply magnetic hover to nav links
    Object.values(navLinksRef.current).forEach(link => {
      if (link) magneticHover(link, 0.15)
    })
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-gold/30 shadow-lg shadow-coffee/10' 
          : 'bg-background/50 backdrop-blur-sm border-b border-gold/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-serif text-2xl font-bold bg-gradient-to-r from-coffee to-gold bg-clip-text text-transparent"
        >
          Supreme
        </motion.div>

        {/* Desktop Menu */}
        {/* Desktop Menu */}
<div className="hidden md:flex items-center gap-10">
  {navLinks.map((link, i) => (
    <motion.div
      key={link.href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
    >
      <a
        ref={(el) => {
          if (el) navLinksRef.current[link.href] = el
        }}
        href={link.href}
        onClick={(e) => {
          e.preventDefault()
          document.querySelector(link.href)?.scrollIntoView({
            behavior: 'smooth',
          })
        }}
        className={`group relative inline-flex items-center justify-center px-5 py-2 rounded-full overflow-hidden transition-all duration-300 ${
          activeSection === link.href
            ? 'text-gold'
            : 'text-coffee hover:text-gold'
        }`}
      >
        {/* Soft hover background */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-gradient-to-r
            from-[#F5E6D3]/10
            via-gold/20
            to-gold/10
            opacity-0
            scale-75
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:scale-100
          "
        />

        {/* Glow */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            shadow-[0_0_0px_rgba(200,155,92,0)]
            transition-all
            duration-300
            group-hover:shadow-[0_0_25px_rgba(200,155,92,0.35)]
          "
        />

        {/* Text */}
        <span className="relative z-10 font-medium tracking-wide transition-all duration-300 group-hover:tracking-wider">
          {link.label}
        </span>

        {/* Underline */}
        <span
          className={`
            absolute
            bottom-1
            left-1/2
            h-[2px]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#C89B5C]
            to-transparent
            transition-all
            duration-300
            -translate-x-1/2
            ${
              activeSection === link.href
                ? 'w-10 opacity-100'
                : 'w-0 opacity-0 group-hover:w-10 group-hover:opacity-100'
            }
          `}
        />
      </a>
    </motion.div>
  ))}
</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-coffee hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-gold/20"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    const target = document.querySelector(link.href)
                    target?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block text-coffee hover:text-gold transition-colors py-2 font-medium text-lg"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
