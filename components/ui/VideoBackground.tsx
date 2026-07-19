'use client'

import { useEffect, useRef, ForwardedRef } from 'react'

interface VideoBackgroundProps {
  src: string
  overlay?: boolean
  overlayOpacity?: number
  children?: React.ReactNode
  className?: string
  videoRef?: React.RefObject<HTMLVideoElement>
}

export function VideoBackground({
  src,
  overlay = true,
  overlayOpacity = 0.4,
  children,
  className = '',
  videoRef: externalVideoRef,
}: VideoBackgroundProps) {
  const internalVideoRef = useRef<HTMLVideoElement>(null)
  const videoRef = externalVideoRef || internalVideoRef

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => {
      console.log('[v0] Video autoplay prevented, user interaction may be required')
    })
  }, [])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {overlay && (
        <div
          className="absolute inset-0 bg-black/30"
          style={{ opacity: overlayOpacity }}
        />
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}
