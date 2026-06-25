import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { contactDetails } from '@/lib/data'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Rooms & Suites', href: '/#rooms' },
  { label: 'Dining', href: '/#dining' },
  { label: 'Experiences', href: '/#experiences' }
]

const discoverLinks = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' }
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' }
]

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-shadow text-cream">
      <div className="mx-auto max-w-content px-6 pt-14 md:px-8 md:pt-16">
        {/* Top: brand + link columns */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Image
              src="/logo.png"
              alt="Islands Tourister"
              width={200}
              height={90}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
              A serene, family-friendly retreat in the heart of Port Blair — elegant rooms, island
              dining and curated experiences across the Andamans.
            </p>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
            <FooterCol title="Quick Links">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-cream/65 transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </FooterCol>

            <FooterCol title="Discover">
              {discoverLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-cream/65 transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </FooterCol>

            <FooterCol title="Contact">
              <li>
                <a href={`tel:${contactDetails.phone}`} className="text-cream/65 transition-colors hover:text-cream">
                  {contactDetails.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactDetails.email}`} className="break-all text-cream/65 transition-colors hover:text-cream">
                  {contactDetails.email}
                </a>
              </li>
              <li className="text-cream/65">Port Blair, Andaman</li>
            </FooterCol>

            <FooterCol title="Social">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-cream/65 transition-colors hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </FooterCol>
          </div>
        </div>

        {/* Copyright row */}
        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 py-5 text-xs text-cream/45 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Islands Tourister. All rights reserved.</span>
          <span>Andaman &amp; Nicobar Islands, India</span>
        </div>
      </div>

      {/* Big wordmark anchored at the bottom (clipped, so it stays compact) */}
      <div aria-hidden className="relative mt-6 -mb-[1.2vw] select-none overflow-hidden">
        <h2 className="whitespace-nowrap bg-gradient-to-b from-sage to-sage/10 bg-clip-text text-center font-serif text-[11vw] font-bold leading-[0.8] tracking-tight text-transparent">
          Islands&nbsp;Tourister
        </h2>
      </div>
    </footer>
  )
}
