import { PinIcon, StarIcon } from './icons'

export function TrustBar() {
  return (
    <section
      aria-label="Why clients trust Jackiey's Beauty Corner"
      className="border-y border-border/60 bg-blush px-4 py-7 sm:py-8"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-center sm:flex-row sm:gap-0">
        {/* Rating */}
        <div className="flex flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className="h-4 w-4 transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Five Star Rated
          </p>
        </div>

        <span aria-hidden="true" className="hidden h-10 w-px bg-border sm:block" />

        {/* Location */}
        <div className="flex flex-1 flex-col items-center gap-2">
          <PinIcon className="h-5 w-5 text-gold" />
          <p className="max-w-[15rem] text-pretty font-sans text-sm font-light leading-relaxed text-foreground">
            Serving Norfolk, Virginia Beach &amp; Hampton Roads
          </p>
        </div>

        <span aria-hidden="true" className="hidden h-10 w-px bg-border sm:block" />

        {/* Appointment only */}
        <div className="flex flex-1 flex-col items-center gap-2">
          <span className="font-serif text-lg font-medium italic text-gold">
            By Appointment
          </span>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Only
          </p>
        </div>
      </div>
    </section>
  )
}
