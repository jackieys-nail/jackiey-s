'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronIcon } from './icons'

const faqs = [
  {
    q: 'Do I need to book in advance?',
    a: 'Yes. Jackiey\u2019s Beauty Corner is by appointment only. Walk-ins are not available. Please note that there is a $20 deposit fee required per booking to secure your slot. Booking through Square guarantees your spot and gives you a confirmation instantly.',
  },
  {
    q: 'How long does Gel-X last?',
    a: 'With proper aftercare, Gel-X extensions from Jackiey\u2019s Beauty Corner typically last 3 to 4 weeks. Jaqueline will walk you through everything you need to do to keep your set looking fresh.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We ask for at least 24 hours\u2019 notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee. Life happens, just let us know in advance.',
  },
  {
    q: 'Can I bring nail inspo photos?',
    a: 'Absolutely, and encouraged. The more reference you bring, the better Jaqueline can personalize your design to match your vision.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Good to Know
        </p>
        <h2 className="mt-4 text-balance font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Your Questions, Answered
        </h2>
        <div className="gold-rule mx-auto mt-6 h-px w-24" />
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="border-b border-border/70">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-gold"
              >
                <span className="font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {item.q}
                </span>
                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold transition-all duration-300',
                    isOpen && 'bg-gold/10',
                  )}
                >
                  <ChevronIcon
                    className={cn(
                      'h-4 w-4 transition-transform duration-300',
                      isOpen && '-rotate-180',
                    )}
                  />
                </span>
              </button>
              <div
                className={cn(
                  'grid transition-all duration-500 ease-in-out',
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 font-sans text-base font-light leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
