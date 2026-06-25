import '../styles/globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Montserrat, Allura } from 'next/font/google'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Elegant serif for big headings & luxury storytelling
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap'
})

// Clean, modern sans for navigation, buttons, body & UI
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap'
})

// Signature script for taglines & accents
const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Islands Tourister — Luxury redefined!',
    template: '%s — Islands Tourister'
  },
  description:
    '[SITE DESCRIPTION] — A premium tropical resort in the Andaman & Nicobar Islands. Luxury redefined!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${allura.variable}`}>
      <body className="min-h-screen bg-cream text-shadow">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
