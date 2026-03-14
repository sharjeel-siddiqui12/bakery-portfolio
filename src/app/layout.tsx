import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CursorGlow from '@/components/ui/CursorGlow'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Hina Bakers — Premium Bakery in Karachi',
    template: '%s | Hina Bakers',
  },
  description:
    "Karachi's premier artisan bakery. Custom wedding cakes, birthday cakes, and pastries handcrafted with love. Order on WhatsApp or online.",
  keywords: [
    'bakery karachi',
    'custom cakes karachi',
    'wedding cake karachi',
    'birthday cake karachi',
    'hina bakers',
  ],
  openGraph: {
    title: 'Hina Bakers — Premium Artisan Bakery, Karachi',
    description: 'Handcrafted cakes and pastries made with love in Karachi.',
    url: 'https://hinabakers.com',
    siteName: 'Hina Bakers',
    locale: 'en_PK',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} antialiased font-sans bg-brand-cream text-brand-ink`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CursorGlow />
      </body>
    </html>
  )
}
