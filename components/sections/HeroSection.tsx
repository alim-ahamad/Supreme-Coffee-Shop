'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { VideoBackground } from '@/components/ui/VideoBackground'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { wordByWordReveal } from '@/lib/animations'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'

// Floating particle component
const FloatingParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: '4px',
      height: '4px',
      backgroundColor: 'rgb(200, 155, 92)',
    }}
    initial={{ opacity: 0, x, y }}
    animate={{ opacity: [0, 1, 0], y: y - 100, x: x + Math.random() * 40 - 20 }}
    transition={{ duration: 2.5, delay, ease: 'easeOut', repeat: Infinity }}
  />
)

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Word-by-word title reveal
    if (titleRef.current) {
      wordByWordReveal(titleRef.current, 0.4)
    }

    // Subtitle fade in
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: 'power2.out' }
      )
    }

    // Slow zoom on video
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        scale: 1.05,
        duration: 8,
        ease: 'power1.inOut'
      })
    }
  }, [])

  // Mouse follow glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePosition({ x, y })
      setGlowPosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16 bg-background"
    >
      {/* Mouse-follow glow effect */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          x: glowPosition.x,
          y: glowPosition.y,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
        style={{
          left: 0,
          top: 0,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(200, 155, 92, 0.15) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <VideoBackground
        src="/assets/videos/Barista_pouring_steamed_milk_coffee_202607121159.mp4"
        overlayOpacity={0.6}
        videoRef={videoRef}
      >
        {/* Multi-layer cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-accent/20" />
        
        {/* Floating coffee particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <FloatingParticle
              key={i}
              delay={i * 0.4}
              x={Math.random() * 800}
              y={300 + Math.random() * 200}
            />
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          {/* Premium accent line with glow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mb-12"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent mx-auto rounded-full shadow-lg shadow-accent/60" />
          </motion.div>

          {/* Main title - larger and more dramatic */}
          <h1
            ref={titleRef}
            className="headline-xl text-foreground leading-tight text-balance mb-8 tracking-tight"
          >
            Supreme Craft Coffee
          </h1>

          {/* Subtitle with better spacing */}
          <p
            ref={subtitleRef}
            className="body-lg text-foreground/80 max-w-3xl text-balance mb-16 font-light"
          >
            Experience the art of specialty coffee crafted with passion and precision. Every bean, every roast, every cup is a masterpiece.
          </p>

          {/* CTA Buttons with premium styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-8 mb-24"
          >
            <AnimatedButton
              size="lg"
              onClick={() => {
                document.getElementById('craft')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-10 py-4 font-semibold bg-accent text-background hover:bg-accent/90"
            >
              Discover Our Craft
            </AnimatedButton>
            <AnimatedButton
              size="lg"
              onClick={() => {
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-10 py-4 font-semibold border-2 border-accent text-accent hover:bg-accent/10"
            >
              View Menu
            </AnimatedButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-12 text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={28} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>
      </VideoBackground>
    </section>
  )
}
