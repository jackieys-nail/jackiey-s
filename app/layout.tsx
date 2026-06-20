import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Ballet, Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const jost = Jost({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const ballet = Ballet({
  variable: '--font-script',
  subsets: ['latin'],
  weight: '400',
})

const siteUrl = 'https://jackieysbeautycorner.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Nail Artist & Lash Extensions in Norfolk VA | Jackiey's Beauty Corner",
    template: "%s | Jackiey's Beauty Corner",
  },
  description:
    "Jackiey's Beauty Corner is an independent nail artist and lash studio in Norfolk, VA. Specializing in Gel-X nails, lash lifts, and lash extensions by Jaqueline. Serving Norfolk, Virginia Beach & Hampton Roads. Book by appointment today.",
  keywords: [
    'nail artist Norfolk VA',
    'Gel-X nails Norfolk',
    'lash extensions Norfolk VA',
    'lash lift Norfolk',
    'nail salon Norfolk Virginia',
    'eyelash extensions Hampton Roads',
    'Virginia Beach nail artist',
    "Jackiey's Beauty Corner",
  ],
  authors: [{ name: "Jackiey's Beauty Corner" }],
  creator: "Jackiey's Beauty Corner",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: "Jackiey's Beauty Corner",
    title:
      "Nail Artist & Lash Extensions in Norfolk VA | Jackiey's Beauty Corner",
    description:
      'Gel-X nails, lash lifts, and lash extensions by Jaqueline in Norfolk, VA. Boutique, by-appointment beauty studio serving Hampton Roads.',
    images: [
      {
        url: '/portfolio/hero-hands.png',
        width: 1200,
        height: 630,
        alt: "Gel-X nail artistry by Jackiey's Beauty Corner in Norfolk VA",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nail Artist & Lash Extensions in Norfolk VA | Jackiey's Beauty Corner",
    description:
      'Gel-X nails, lash lifts, and lash extensions by Jaqueline in Norfolk, VA.',
    images: ['/portfolio/hero-hands.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  '@id': `${siteUrl}/#business`,
  name: "Jackiey's Beauty Corner",
  description:
    'Independent nail artist and lash studio in Norfolk, VA specializing in Gel-X nails, lash lifts, and lash extensions.',
  url: siteUrl,
  telephone: '+17472967636',
  image: `${siteUrl}/portfolio/hero-hands.png`,
  priceRange: '$$',
  currenciesAccepted: 'USD',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8601 Glen Myrtle Ave',
    addressLocality: 'Norfolk',
    addressRegion: 'VA',
    postalCode: '23505',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.9095,
    longitude: -76.2636,
  },
  areaServed: [
    { '@type': 'City', name: 'Norfolk' },
    { '@type': 'City', name: 'Virginia Beach' },
    { '@type': 'AdministrativeArea', name: 'Hampton Roads' },
  ],
  sameAs: ['https://instagram.com/jackieymata'],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gel-X Nail Extensions' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lash Extensions' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lash Lift' } },
  ],
}

export const viewport: Viewport = {
  themeColor: '#FDFBF7',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${ballet.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
