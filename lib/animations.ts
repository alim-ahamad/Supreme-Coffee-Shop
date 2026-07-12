import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const fadeInUp = (element: HTMLElement, delay = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power2.out',
    }
  )
}

export const staggerFadeIn = (elements: NodeListOf<Element>, delay = 0) => {
  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay,
      stagger: 0.1,
      ease: 'power2.out',
    }
  )
}

export const parallaxVideo = (element: HTMLElement, offset = 50) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
    yPercent: offset,
    ease: 'none',
  })
}

export const slideInOnScroll = (element: HTMLElement, direction: 'left' | 'right' = 'left') => {
  const xStart = direction === 'left' ? -60 : 60
  
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: xStart,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 0,
        markers: false,
      },
    }
  )
}

export const scaleOnScroll = (element: HTMLElement, startScale = 0.9) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: startScale,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'back.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 0,
        markers: false,
      },
    }
  )
}

export const createHoverGlow = (element: HTMLElement) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
      duration: 0.3,
    })
  })

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      boxShadow: '0 0 20px rgba(212, 175, 55, 0)',
      duration: 0.3,
    })
  })
}

export const createButtonRipple = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLElement
  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`
  circle.classList.add('ripple')

  const ripple = button.querySelector('.ripple')
  if (ripple) {
    ripple.remove()
  }

  button.appendChild(circle)
}

export const textReveal = (element: HTMLElement) => {
  const text = element.textContent || ''
  element.innerHTML = ''
  
  const chars = text.split('').map((char) => {
    const span = document.createElement('span')
    span.textContent = char
    span.style.display = 'inline-block'
    element.appendChild(span)
    return span
  })

  gsap.fromTo(
    chars,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.02,
      ease: 'power2.out',
    }
  )
}

// WORD-BY-WORD REVEAL
export const wordByWordReveal = (element: HTMLElement, delay = 0) => {
  if (!element) return
  
  const text = element.textContent || ''
  const words = text.split(' ')
  element.innerHTML = words
    .map(word => `<span style="opacity: 0; display: inline-block; margin-right: 0.25em;">${word}</span>`)
    .join('')
  
  const spans = element.querySelectorAll('span')
  spans.forEach((span, i) => {
    gsap.to(span, {
      opacity: 1,
      duration: 0.4,
      delay: delay + i * 0.12,
      ease: 'power1.out'
    })
  })
}

// CLIP-PATH REVEAL
export const clipPathReveal = (element: HTMLElement, delay = 0, direction: 'left' | 'right' | 'top' | 'bottom' = 'left') => {
  const clipPaths = {
    left: ['inset(0 100% 0 0)', 'inset(0 0 0 0)'],
    right: ['inset(0 0 0 100%)', 'inset(0 0 0 0)'],
    top: ['inset(100% 0 0 0)', 'inset(0 0 0 0)'],
    bottom: ['inset(0 0 100% 0)', 'inset(0 0 0 0)']
  }
  
  gsap.fromTo(
    element,
    { clipPath: clipPaths[direction][0], opacity: 0 },
    { 
      clipPath: clipPaths[direction][1],
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.inOut'
    }
  )
}

// MAGNETIC HOVER EFFECT
export const magneticHover = (element: HTMLElement, strength = 0.2) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distX = (e.clientX - centerX) * strength
    const distY = (e.clientY - centerY) * strength
    
    gsap.to(element, {
      x: distX,
      y: distY,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto'
    })
  }
  
  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
      overwrite: 'auto'
    })
  }
  
  element.addEventListener('mousemove', handleMouseMove)
  element.addEventListener('mouseleave', handleMouseLeave)
  
  return () => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
  }
}

// STAGGER ANIMATION
export const staggerIn = (elements: NodeListOf<Element> | Element[], delay = 0, staggerDelay = 0.1) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.7,
      delay,
      stagger: staggerDelay,
      ease: 'power3.out'
    }
  )
}

// CHARACTER REVEAL
export const characterReveal = (element: HTMLElement, delay = 0) => {
  if (!element) return
  
  const text = element.textContent || ''
  const chars = text.split('')
  element.innerHTML = chars
    .map(char => `<span style="opacity: 0; display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('')
  
  const spans = element.querySelectorAll('span')
  spans.forEach((span, i) => {
    gsap.to(span, {
      opacity: 1,
      duration: 0.05,
      delay: delay + i * 0.02,
      ease: 'none'
    })
  })
}

// HOVER GLOW EFFECT
export const glowHover = (element: HTMLElement, intensity = 0.5) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      boxShadow: `0 0 40px rgba(212, 175, 55, ${intensity})`,
      duration: 0.3,
      ease: 'power2.out'
    })
  })
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      boxShadow: '0 0 0px rgba(212, 175, 55, 0)',
      duration: 0.3,
      ease: 'power2.out'
    })
  })
}

// INFINITE FLOAT
export const infiniteFloat = (element: HTMLElement, distance = 10, duration = 3) => {
  gsap.to(element, {
    y: distance,
    duration,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  })
}

// COUNTER ANIMATION
export const countUp = (element: HTMLElement, target: number, duration = 2, delay = 0) => {
  const obj = { value: 0 }
  gsap.to(obj, {
    value: target,
    duration,
    delay,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString()
    }
  })
}
