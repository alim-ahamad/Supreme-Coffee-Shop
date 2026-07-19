'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: AnimatedButtonProps) {
  const baseStyles = 'relative font-medium rounded-lg transition-all duration-300 overflow-hidden'
  
  const variantStyles = {
    primary: 'bg-coffee text-cream hover:bg-coffee-light shadow-lg',
    secondary: 'bg-gold text-coffee hover:bg-gold-light shadow-lg',
    outline: 'border-2 border-coffee text-coffee hover:bg-coffee/5',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  )
}
