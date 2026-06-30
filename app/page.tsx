import '../styles/welcome-pattern.css'
import React from 'react'
import type { Metadata } from 'next'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import Hero from '@/components/Hero'
import AnimatedSection from '@/components/AnimatedSection'
import Button from '@/components/Button'
import WelcomeIntro from '@/components/WelcomeIntro'
import ExperiencesSection from '@/components/ExperiencesSection'
import AmenitiesShowcase from '@/components/AmenitiesShowcase'
import RoomsShowcase from '@/components/RoomsShowcase'
import TestimonialsGallery from '@/components/TestimonialsGallery'
import { Reveal } from '@/components/motion/Reveal'
import DiningSection from '@/components/DiningSection'
import SilkBackground from '@/components/SilkBackground'
import { telHref } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Islands Tourister — Luxury Redefined in the Andamans',
  description:
    'A serene, family-friendly retreat minutes from Port Blair airport. Elegant rooms, island dining and curated experiences across the Andaman Islands.'
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Welcome / Intro ─────────────────────────────────────────────── */}
      <WelcomeIntro />

      {/* ── Rooms & Suites ──────────────────────────────────────────────── */}
      <section id="rooms" className="relative z-10 scroll-mt-24 overflow-hidden bg-cream py-20 md:py-28">
        <RoomsShowcase />
      </section>

      {/* ── Why stay with us / Amenities ────────────────────────────────── */}
      <AmenitiesShowcase />

      {/* ── Dining ──────────────────────────────────────────────────────── */}
      <DiningSection />

      {/* ── Guest reviews (circular gallery) ────────────────────────────── */}
      <TestimonialsGallery />

      {/* ── Island Experiences (bento) ──────────────────────────────────── */}
      <ExperiencesSection />

      {/* ── Location ────────────────────────────────────────────────────── */}
      <AnimatedSection className="mx-auto max-w-content px-4 py-28 md:px-8 md:py-40">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow">
              <MapPin className="h-4 w-4" /> Location
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-shadow md:text-4xl">
              Minutes From the Airport, Close to Everything
            </h2>
            <p className="mt-5 leading-relaxed text-shadow/70">
              Tucked away in Premnagar, Port Blair, Islands Tourister sits just a short drive from
              Veer Savarkar International Airport — so your island holiday begins the moment you
              land, with no long transfers to tire you out.
            </p>
            <p className="mt-4 leading-relaxed text-shadow/70">
              From here you're perfectly placed to explore the Andamans, with the city's beaches,
              markets and ferry points to Havelock and Neil all within easy reach.
            </p>
            <Button
              href="https://www.google.com/maps/dir/?api=1&destination=11.6726877,92.723769"
              variant="outline"
              className="mt-7"
            >
              Get Directions <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          {/* Google Maps embed */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
            <iframe
              title="Islands Tourister location"
              src="https://maps.google.com/maps?q=11.6726877,92.723769&z=15&hl=en&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA banner ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-shadow">
        {/* Animated Silk background (brand shadow tone) */}
        <div className="absolute inset-0">
          <SilkBackground />
        </div>
        {/* Subtle scrim to anchor the headline over the silk */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-shadow/70 via-shadow/30 to-shadow/55" />

        <div className="pointer-events-none relative mx-auto flex max-w-content flex-col items-center px-4 py-28 text-center md:px-8 md:py-40">
          <Reveal as="span" className="eyebrow !text-sage" from="up">
            Your Andaman Escape
          </Reveal>
          <Reveal as="h2" from="up" delay={0.08} blur className="mt-4 max-w-2xl font-serif text-4xl text-cream md:text-5xl lg:text-6xl">
            Plan Your Island Escape
          </Reveal>
          <Reveal as="p" from="up" delay={0.16} className="mt-5 max-w-lg leading-relaxed text-cream/85">
            Your slice of the Andamans is waiting — reserve your stay and let the island do the rest.
          </Reveal>
          <Reveal from="up" delay={0.24} className="pointer-events-auto mt-9">
            <Button href={telHref} size="lg" className="group">
              <Phone className="h-4 w-4" />
              Call to Book Your Stay
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
