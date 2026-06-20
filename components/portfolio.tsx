'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

type Category = 'nails' | 'lashes'

type PortfolioItem = {
  src: string
  alt: string
  category: Category
}

/**
 * 22 real photos, organized by category for easy swapping.
 * Replace each `src` with the final image path (e.g. /images/portfolio/nail-1.jpg).
 * The placeholder paths below currently point to existing assets so the
 * gallery renders correctly until the real photos are dropped in.
 */
const portfolioItems: PortfolioItem[] = [
  // --- Nails (nail-1.jpg … nail-12.jpg) ---
  { src: '/portfolio/gelx-nude.png', alt: 'Gel-X nude set', category: 'nails' },
  { src: '/portfolio/gelx-detailed.png', alt: 'Detailed nail design', category: 'nails' },
  { src: '/portfolio/gelx-minimal.png', alt: 'Minimal nail design', category: 'nails' },
  { src: '/portfolio/hero-hands.png', alt: 'Polished manicure', category: 'nails' },
  { src: '/portfolio/gelx-nude.png', alt: 'Soft nude Gel-X', category: 'nails' },
  { src: '/portfolio/gelx-detailed.png', alt: 'Hand-painted nail art', category: 'nails' },
  { src: '/portfolio/gelx-1.png', alt: 'Clean almond shape', category: 'nails' },
  { src: '/portfolio/gelx-2.png', alt: 'Glossy finish manicure', category: 'nails' },
  { src: '/portfolio/gelx-3.png', alt: 'Neutral Gel-X extensions', category: 'nails' },
  { src: '/portfolio/gelx-4.png', alt: 'Statement nail design', category: 'nails' },
  { src: '/portfolio/gelx-5.png', alt: 'Everyday minimal set', category: 'nails' },
  { src: '/portfolio/gelx-6.png', alt: 'Elegant manicure detail', category: 'nails' },
  { src: '/portfolio/gelx-7.png', alt: 'Neutral Gel-X extensions', category: 'nails' },
  { src: '/portfolio/gelx-8.png', alt: 'Neutral Gel-X extensions', category: 'nails' },
  { src: '/portfolio/gelx-9.png', alt: 'Neutral Gel-X extensions', category: 'nails' },
  { src: '/portfolio/gelx-10.png', alt: 'Neutral Gel-X extensions', category: 'nails' },
  { src: '/portfolio/gelx-11.png', alt: 'Neutral Gel-X extensions', category: 'nails' },
  { src: '/portfolio/gelx-12.png', alt: 'Neutral Gel-X extensions', category: 'nails' },
  { src: '/portfolio/gelx-13.png', alt: 'Neutral Gel-X extensions', category: 'nails' },

  // --- Lashes (lash-1.jpg … lash-10.jpg) ---
  { src: '/portfolio/volume-lash.png', alt: 'Volume lash set', category: 'lashes' },
  { src: '/portfolio/classic-lash.png', alt: 'Classic lash extensions', category: 'lashes' },
  { src: '/portfolio/lash-lift.png', alt: 'Lash lift result', category: 'lashes' },
  { src: '/portfolio/volume-lash.png', alt: 'Dramatic volume lashes', category: 'lashes' },
  { src: '/portfolio/classic-lash.png', alt: 'Natural classic lashes', category: 'lashes' },

]

const filters: { label: string; value: 'all' | Category }[] = [
  { label: 'All Work', value: 'all' },
  { label: 'Nails', value: 'nails' },
  { label: 'Lashes', value: 'lashes' },
]

const INITIAL_COUNT = 6

export function Portfolio() {
  const [filter, setFilter] = useState<'all' | Category>('all')
  const [count, setCount] = useState(INITIAL_COUNT)

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === filter),
    [filter],
  )

  const visible = filtered.slice(0, count)
  const hasMore = count < filtered.length

  function handleFilter(value: 'all' | Category) {
    setFilter(value)
    setCount(INITIAL_COUNT)
  }

  return (
    <section id="portfolio" className="bg-sand/60 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-gold">
          The Portfolio
        </p>
        <h2 className="mt-4 text-balance font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Real Work. Real Results.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-muted-foreground">
          Every photo is a service performed by Jaqueline. Follow{' '}
          <a
            href="https://instagram.com/jackieymata"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold underline-offset-4 transition-colors hover:underline"
          >
            @jackieymata
          </a>{' '}
          for daily inspiration.
        </p>
        <div className="gold-rule mx-auto mt-6 h-px w-24" />
      </div>

      {/* Filter tabs */}
      <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 sm:gap-3">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => handleFilter(f.value)}
            aria-pressed={filter === f.value}
            className={cn(
              'rounded-full px-5 py-2 font-sans text-sm font-medium tracking-wide transition-all duration-300',
              filter === f.value
                ? 'bg-espresso text-cream shadow-sm'
                : 'border border-gold/50 text-foreground hover:border-gold hover:bg-gold/10',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div
        key={filter}
        className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 duration-500 animate-in fade-in sm:grid-cols-2 md:grid-cols-3"
      >
        {visible.map((item, i) => (
          <figure
            key={`${item.src}-${i}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <img
              src={item.src || '/placeholder.svg'}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Luxury hover overlay with brand mark */}
            <figcaption className="absolute inset-0 flex items-center justify-center bg-espresso/45 opacity-0 backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-100">
              <span className="text-center font-serif text-lg font-medium italic leading-tight text-cream">
                Jackiey&apos;s
                <br />
                Beauty Corner
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setCount(filtered.length)}
            className="inline-flex items-center justify-center rounded-full border border-gold/70 bg-transparent px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            View More Work
          </button>
        </div>
      )}
    </section>
  )
}
