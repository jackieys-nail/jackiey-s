'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function StickyNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const threshold = hero
        ? hero.offsetHeight * 0.75
        : window.innerHeight * 0.75
      setVisible(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex items-center justify-center border-b border-border/60 bg-cream/85 py-2.5 backdrop-blur-xl transition-all duration-500',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-full opacity-0',
      )}
    >
      <a
        href="#hero"
        className="font-serif text-lg font-medium tracking-tight text-foreground sm:text-xl"
      >
        Jackiey&apos;s Beauty Corner
      </a>
    </div>
  )
}
