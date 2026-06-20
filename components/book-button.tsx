'use client'

import { cn } from '@/lib/utils'
import { useBooking } from './booking-provider'
import { CalendarIcon } from './icons'

type BookButtonProps = {
  label?: string
  variant?: 'solid' | 'outline'
  className?: string
}

export function BookButton({
  label = 'Book Now',
  variant = 'solid',
  className,
}: BookButtonProps) {
  const { openBooking } = useBooking()

  return (
    <button
      type="button"
      onClick={openBooking}
      className={cn(
        'group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-sans text-sm font-medium tracking-wide transition-all duration-300',
        variant === 'solid' &&
          'bg-gold text-espresso shadow-[0_8px_24px_-8px_rgba(223,186,115,0.7)] hover:bg-gold-soft hover:shadow-[0_10px_30px_-6px_rgba(223,186,115,0.8)]',
        variant === 'outline' &&
          'border border-gold/70 bg-transparent text-foreground hover:border-gold hover:bg-gold/10',
        className,
      )}
    >
      <CalendarIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-translate-y-0.5" />
      {label}
    </button>
  )
}
