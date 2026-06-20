'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { BookButton } from './book-button'
import { LashIcon, NailIcon } from './icons'

type Service = {
  name: string
  price: string
}

const nails: Service[] = [
  { name: 'Gel-X (No Design)', price: '$55' },
  { name: 'Gel-X (Minimal Design)', price: 'Starting at $60' },
  { name: 'Gel-X (Detailed Design)', price: 'Starting at $72' },
]

const lashes: Service[] = [
  { name: 'Lash Lift', price: '$50' },
  { name: 'Classic Lash Extension', price: '$115' },
  { name: 'Hybrid Lash Extension', price: '$140' },
  { name: 'Volume Lash Extension', price: '$165' },
  { name: 'Russian Lash Extension', price: '$180' },
]

type Category = 'nails' | 'lashes'

export function ServiceMenu() {
  const [active, setActive] = useState<Category>('nails')
  const services = active === 'nails' ? nails : lashes

  return (
    <section id="services" className="bg-blush px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-gold">
          The Experience Menu
        </p>
        <h2 className="mt-4 text-balance font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Invest in Yourself
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-muted-foreground">
          Every service is performed exclusively by Jaqueline, tailored to your
          nail shape, lash line, and personal style.
        </p>
        <div className="gold-rule mx-auto mt-6 h-px w-24" />
      </div>

      {/* Tabs */}
      <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3">
        <TabButton
          isActive={active === 'nails'}
          onClick={() => setActive('nails')}
          icon={<NailIcon className="h-5 w-5" />}
          label="Nails"
        />
        <TabButton
          isActive={active === 'lashes'}
          onClick={() => setActive('lashes')}
          icon={<LashIcon className="h-5 w-5" />}
          label="Lashes"
        />
      </div>

      {/* Price list */}
      <div className="mx-auto mt-12 max-w-2xl">
        <ul className="divide-y divide-border/70">
          {services.map((s) => (
            <li
              key={s.name}
              className="flex items-baseline justify-between gap-6 py-5"
            >
              <span className="font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                {s.name}
              </span>
              <span className="shrink-0 font-sans text-sm font-medium tracking-wide text-muted-foreground sm:text-base">
                {s.price}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <BookButton label="Book Your Experience" />
        </div>
      </div>
    </section>
  )
}

function TabButton({
  isActive,
  onClick,
  icon,
  label,
}: {
  isActive: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        'flex flex-1 items-center justify-center gap-2.5 rounded-full px-6 py-3 font-sans text-sm font-medium tracking-wide transition-all duration-300',
        isActive
          ? 'bg-gold text-espresso shadow-[0_8px_24px_-10px_rgba(223,186,115,0.8)]'
          : 'border border-dashed border-gold/50 bg-cream/60 text-muted-foreground hover:border-gold hover:text-foreground',
      )}
    >
      {icon}
      {label}
    </button>
  )
}
