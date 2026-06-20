'use client'

import { BookButton } from './book-button'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden mesh-gradient px-4 py-24"
    >
      {/* Soft floating accent imagery */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-20 hidden h-72 w-72 rotate-6 overflow-hidden rounded-[40%] opacity-70 blur-[1px] md:block"
      >
        <img
          src="/portfolio/hero-hands.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Glass overlay card */}
      <div className="relative z-10 mx-auto w-full max-w-3xl rounded-[2rem] border border-white/50 bg-white/35 px-4 py-12 text-center shadow-[0_20px_60px_-30px_rgba(120,90,50,0.35)] backdrop-blur-2xl sm:px-12 sm:py-16">
        <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Nail Artist & Lash Tech
        </p>

        <h1 className="text-balance font-serif text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Your Nails. Your Lashes.
          <br />
          <span className="italic text-gold">Your Signature Look.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
          Precision nail artistry and lash extensions by Jaqueline. Norfolk&apos;s
          independent beauty specialist for women who refuse to settle for
          ordinary.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BookButton label="Book Your Experience" className="w-full sm:w-auto" />
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-gold/70 bg-transparent px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-gold hover:bg-gold/10 sm:w-auto"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-gold/60 pt-1.5">
          <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-gold" />
        </span>
      </div>
    </section>
  )
}
