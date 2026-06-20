import { cn } from '@/lib/utils'

type BrandLogoSize = 'sm' | 'md' | 'lg'

type BrandLogoProps = {
  size?: BrandLogoSize
  className?: string
  /** Tailwind text-color class for the "Beauty Corner" line. Defaults to currentColor. */
  cornerClassName?: string
  /** Tailwind text-color class for the "Jackiey's" script line. Defaults to gold. */
  scriptClassName?: string
}

const sizeMap: Record<
  BrandLogoSize,
  { script: string; corner: string; gap: string }
> = {
  sm: { script: 'text-3xl', corner: 'text-[0.6rem]', gap: '-mt-1.5' },
  md: { script: 'text-4xl', corner: 'text-xs', gap: '-mt-1.5' },
  lg: { script: 'text-6xl sm:text-7xl', corner: 'text-sm sm:text-base', gap: '-mt-2' },
}

/**
 * Boutique signature lockup for "Jackiey's Beauty Corner".
 * - "Jackiey's" renders in the Ballet script font (fluid, cursive, gold).
 * - "Beauty Corner" renders in the Cormorant serif, uppercase, bold, with
 *   expanded letter-spacing, centered beneath the script for a luxury mark.
 */
export function BrandLogo({
  size = 'md',
  className,
  cornerClassName,
  scriptClassName,
}: BrandLogoProps) {
  const s = sizeMap[size]
  return (
    <span
      className={cn('inline-flex flex-col items-center leading-none', className)}
      aria-label="Jackiey's Beauty Corner"
    >
      <span
        aria-hidden="true"
        className={cn('font-script text-gold', s.script, scriptClassName)}
      >
        Jackiey&apos;s
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'font-serif font-bold uppercase tracking-[0.2em]',
          s.corner,
          s.gap,
          cornerClassName,
        )}
      >
        Beauty Corner
      </span>
    </span>
  )
}
