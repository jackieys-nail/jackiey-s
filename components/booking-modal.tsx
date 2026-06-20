'use client'

import { useEffect, useState } from 'react'
import { BrandLogo } from './brand-logo'

const SQUARE_WIDGET_SRC =
  'https://app.squareup.com/appointments/buyer/widget/36k3xt3b9m7yl6/LJHM1FKAX3EYT'

type BookingModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Lock background scroll while the modal is open.
  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  // Reset the loading state each time the modal opens.
  useEffect(() => {
    if (isOpen) setIsLoaded(false)
  }, [isOpen])

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close booking"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-espresso/55 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative z-10 flex h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <BrandLogo size="sm" cornerClassName="text-foreground" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {/* Square booking widget rendered directly as an iframe */}
        <div className="relative flex-1 overflow-hidden bg-cream">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <span className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
                <p className="font-sans text-sm tracking-wide">
                  Loading availability…
                </p>
              </div>
            </div>
          )}
          <iframe
            src={SQUARE_WIDGET_SRC}
            title="Book an appointment at Jackiey's Beauty Corner"
            onLoad={() => setIsLoaded(true)}
            className="h-full w-full border-0"
            allow="payment"
          />
        </div>
      </div>
    </div>
  )
}
