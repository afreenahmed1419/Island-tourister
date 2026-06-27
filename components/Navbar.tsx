'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import Button from './Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  // Transparent over the hero → solid cream once scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the nav item for the on-page section in view (home only)
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }
    const ids = navLinks.filter((l) => l.href.startsWith('/#')).map((l) => l.href.slice(2))
    const onScroll = () => {
      const line = 140 // just below the navbar
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open
  const linkColor = solid ? 'text-shadow' : 'text-cream'

  // Active when: on-page section in view, home with no section (top), or matching route
  const isActive = (href: string) => {
    if (href.startsWith('/#')) return pathname === '/' && activeSection === href.slice(2)
    if (href === '/') return pathname === '/' && activeSection === ''
    return pathname === href
  }

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-cream/95 shadow-soft backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="flex w-full items-center justify-between gap-4 px-6 py-3 md:gap-6 md:px-12 md:py-3.5">
        {/* Col 1 — Logo: extreme left */}
        <div className="flex shrink-0 items-center justify-start">
          <Link href="/" aria-label="Islands Tourister home">
            <Image
              src="/logo.png"
              alt="Islands Tourister"
              width={106}
              height={48}
              priority
              className={`h-11 w-auto transition-all duration-300 md:h-14 ${
                solid ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>
        </div>

        {/* Col 2 — Nav links: centered, takes the middle space */}
        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-sage ${linkColor} ${
                  active
                    ? solid
                      ? 'text-sage'
                      : 'border-b-2 border-white pb-1'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Col 3 — CTA: extreme right */}
        <div className="hidden shrink-0 items-center justify-end lg:flex">
          <Button
            href="/contact"
            size="md"
            variant={solid ? 'primary' : 'outline-light'}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`focus-brand rounded-md p-1 lg:hidden ${linkColor}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

    </header>

    {/* Kinetic mobile menu — must be outside header to avoid backdrop-blur containing block */}
    <MobileMenu open={open} onClose={() => setOpen(false)} isActive={isActive} />
  </>
  )
}
