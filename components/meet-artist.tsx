export function MeetArtist() {
  return (
    <section id="artist" className="bg-background px-4 py-24 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(120,90,50,0.4)]">
            <img
              src="/portfolio/artist.png"
              alt="Jaqueline, nail artist and lash technician"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-[2rem] border border-gold/40"
          />
        </div>

        <div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-gold">
            The Artist
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
            Hi, I&apos;m Jaqueline.
          </h2>

          <div className="mt-6 space-y-5 font-sans text-base font-light leading-relaxed text-muted-foreground">
            <p>
              I&apos;m an independent nail artist and lash technician based in
              Norfolk, Virginia. Every set of nails, every lash extension, every
              lift is done by me, for you.
            </p>
            <p>
              No rushing, no guessing, no one-size-fits-all. I pay attention to
              your nail health, your eye shape, and your personal style.
              That&apos;s what makes the difference between a good set and a
              perfect one.
            </p>
            <p>
              When you sit in my chair, you&apos;re not a number. You&apos;re the
              only client that matters. That&apos;s the Jackiey&apos;s Beauty Corner standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
