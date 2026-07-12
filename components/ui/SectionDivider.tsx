export function SectionDivider() {
  return (
    <div className="relative h-32 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
      <div className="relative z-10 bg-background px-6">
        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
      </div>
    </div>
  )
}
