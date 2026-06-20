import { InstagramIcon, PhoneIcon, PinIcon } from './icons'

export function SiteFooter() {
  return (
    <footer className="bg-espresso px-4 py-16 text-cream sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="font-serif text-4xl font-medium tracking-tight text-cream">
          Jackiey&apos;s Beauty Corner
        </span>
        <p className="mt-2 font-sans text-xs uppercase tracking-[0.35em] text-gold">
          Nail Artist & Lash Tech
        </p>

        <div className="gold-rule mt-8 h-px w-24" />

        <div className="mt-8 grid gap-6 font-sans text-sm font-light text-cream/80 sm:grid-cols-3 sm:gap-10">
          <a
            href="tel:+17472967636"
            className="flex flex-col items-center gap-2 transition-colors hover:text-gold"
          >
            <PhoneIcon className="h-5 w-5 text-gold" />
            <span>+1 747 296 7636</span>
          </a>

          <span className="flex flex-col items-center gap-2">
            <PinIcon className="h-5 w-5 text-gold" />
            <span className="leading-relaxed">
              8601 Glen Myrtle Ave
              <br />
              Norfolk, VA 23505
            </span>
          </span>

          <a
            href="https://instagram.com/jackieymata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 transition-colors hover:text-gold"
          >
            <InstagramIcon className="h-5 w-5 text-gold" />
            <span>jackieymata</span>
          </a>
        </div>

        <p className="mt-12 font-sans text-xs font-light tracking-wide text-cream/40">
          © {new Date().getFullYear()}&nbsp;Jackiey&apos;s Beauty Corner. By
          appointment only.
        </p>
      </div>
    </footer>
  )
}
