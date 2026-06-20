'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useBooking } from './booking-provider'
import { CalendarIcon } from './icons'

export function FloatingCta() {
  const { openBooking } = useBooking()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const threshold = hero
        ? hero.offsetHeight * 0.85
        : window.innerHeight * 0.85
      setVisible(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:hidden',
        'transition-all duration-500 ease-out will-change-transform',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-[140%] opacity-0',
      )}
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      {/* Dark outer container creating the wide elegant border effect */}
      <div
        className="rounded-2xl bg-espresso p-2 shadow-[0_-10px_40px_-12px_rgba(0,0,0,0.45)]"
        style={{ borderRadius: 16 }}
      >
        <button
          type="button"
          onClick={openBooking}
          className="flex w-full items-center justify-center gap-2.5 bg-gold py-3.5 font-sans text-sm font-semibold tracking-wide text-espresso transition-colors duration-300 active:bg-gold-soft"
          style={{ borderRadius: 12 }}
        >
          <CalendarIcon className="h-[18px] w-[18px]" />
          Book Your Appointment
        </button>
      </div>
    </div>
  )
}
