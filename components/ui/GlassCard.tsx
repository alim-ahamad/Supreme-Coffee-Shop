interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'light' | 'dark'
  hover?: boolean
}

export function GlassCard({ 
  children, 
  className = '', 
  variant = 'light',
  hover = false 
}: GlassCardProps) {
  const baseStyles = variant === 'light' 
    ? 'bg-white/40 border border-white/20' 
    : 'bg-black/30 border border-white/10'
  
  const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-lg hover:bg-white/50' : ''
  
  return (
    <div className={`backdrop-blur-md rounded-xl p-6 ${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
