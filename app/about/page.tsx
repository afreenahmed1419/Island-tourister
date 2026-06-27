import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, MapPin, Plane, Ship } from 'lucide-react'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import AboutStats from '@/components/AboutStats'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import type { IconName } from '@/lib/icons'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Islands Tourister — one of Port Blair’s best transit and budget hotels, in the heart of Sri Vijaya Puram, minutes from the airport and ferry harbour.'
}

const facilities: { label: string; icon: IconName }[] = [
  { label: 'Deluxe Room', icon: 'BedDouble' },
  { label: 'Super Deluxe Room', icon: 'Sparkles' },
  { label: 'Honeymoon Suite', icon: 'HeartHandshake' },
  { label: 'Standard Room', icon: 'BedDouble' },
  { label: 'Child / Pet Friendly Room', icon: 'Baby' },
  { label: 'Candlelight Dinner', icon: 'Flame' },
  { label: 'Flower Bed Decoration', icon: 'Flower2' },
  { label: 'Short Duration Stay', icon: 'Clock' },
  { label: 'In-House Restaurant', icon: 'UtensilsCrossed' }
]

const idealFor = ['Leisure Travellers', 'Families', 'Honeymoon Couples', 'Transit Guests']

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
        <Image
          src="/gallery/hero/front.jpg"
          alt="Islands Tourister, Port Blair"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/35" />
        <div className="relative z-10 flex items-center justify-center px-4">
          <div className="flex max-w-xl flex-col items-center rounded-3xl border border-white/25 bg-white/10 px-8 py-10 text-center shadow-2xl backdrop-blur-2xl md:px-14 md:py-12">
            <Reveal as="span" from="up" once={false} className="font-script text-4xl text-[#B7E0C9] [text-shadow:0_1px_12px_rgba(0,0,0,0.6)] md:text-5xl">
              About Us
            </Reveal>
            <Reveal as="h1" from="up" blur delay={0.08} once={false} className="mt-2 font-serif text-5xl text-cream [text-shadow:0_2px_22px_rgba(0,0,0,0.55)] md:text-6xl lg:text-7xl">
              Islands Tourister
            </Reveal>
            <Reveal as="p" from="up" delay={0.16} once={false} className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/95 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
              Comfort, warmth and an unbeatable location — in the heart of Port Blair.
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Story intro ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-content items-center gap-14 px-4 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-8">
          {/* Image with a layered accent frame */}
          <Reveal as="div" from="left" blur once={false} className="relative">
            <div className="pointer-events-none absolute -left-4 -top-4 hidden h-full w-full rounded-2xl border border-shoreline/45 md:block" />
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft ring-1 ring-shadow/10">
              <Image
                src="/about/story.jpg"
                alt="Islands Tourister"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]"
              />
            </div>
          </Reveal>

          <Reveal as="div" from="right" blur delay={0.1} once={false}>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-[1.12] text-shadow md:text-5xl">
              Comfort at the <span className="italic text-ocean">Heart</span> of the Island
            </h2>
            <div className="mt-6 h-px w-14 bg-shoreline/70" />
            <p className="mt-6 max-w-prose leading-relaxed text-shadow/80">
              Set in the heart of Port Blair — Sri Vijaya Puram — Islands Tourister is one of the
              city&apos;s best transit and budget hotels. Thoughtfully equipped with best-in-class
              facilities, every corner is designed to make your stay cozy, comfortable and truly
              memorable.
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-shadow/80">
              Whether you&apos;re here for a single night between ferries or a longer island
              escape, our team brings the same warm, attentive hospitality to every guest who
              walks through our doors.
            </p>
            <p className="mt-8 font-script text-3xl text-ocean md:text-4xl">
              The Islands Tourister Family
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────────────────── */}
      <AboutStats />

      {/* ── Facilities ───────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-content px-4 md:px-8">
          <Reveal as="div" from="up" blur once={false} className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">What We Offer</span>
            <h2 className="mt-3 font-serif text-3xl text-shadow md:text-4xl">Facilities &amp; Experiences</h2>
            <p className="mt-4 leading-relaxed text-shadow/70">
              Everything you need for an easy, comfortable stay — and a few thoughtful touches to
              make it special.
            </p>
          </Reveal>

          <RevealGroup
            as="div"
            stagger={0.06}
            once={false}
            className="mt-14 grid grid-cols-3 gap-3 sm:grid-cols-3 sm:gap-4"
          >
            {facilities.map((f) => (
              <RevealItem key={f.label} blur>
                <div className="group flex h-full flex-col items-center gap-2.5 rounded-2xl border border-shadow/10 bg-white/60 px-3 py-5 text-center shadow-soft transition-colors duration-300 hover:border-sage/50 hover:bg-white sm:flex-row sm:gap-4 sm:px-5 sm:py-5 sm:text-left">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/12 text-ocean transition-colors duration-300 group-hover:bg-sage group-hover:text-cream sm:h-12 sm:w-12">
                    <Icon name={f.icon} className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-[13px] font-medium leading-tight text-shadow sm:text-base">{f.label}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── Location / Why here ──────────────────────────────────────────── */}
      <section className="bg-sand/25 py-24 md:py-32">
        <div className="mx-auto grid max-w-content items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <Reveal as="div" from="up" blur once={false} className="md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
                <Image src="/gallery/hero/2.jpg" alt="Reception at Islands Tourister" fill sizes="22vw" className="object-cover" />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
                <Image src="/rooms/honeymoon-suite.jpeg" alt="Honeymoon suite" fill sizes="22vw" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal as="div" from="up" blur delay={0.1} once={false} className="md:order-1">
            <span className="eyebrow">
              <MapPin className="h-4 w-4" /> The Location
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-shadow md:text-4xl lg:text-[2.75rem]">
              Minutes From Everywhere That Matters
            </h2>
            <p className="mt-5 leading-relaxed text-shadow/80">
              Just minutes from Veer Savarkar International Airport and the ferry harbour, and
              close to the city&apos;s major attractions, Islands Tourister is the ideal base for
              exploring the Andamans — a rare blend of comfort, affordability and an unbeatable
              location.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <span className="flex items-center gap-3 text-shadow/80">
                <Plane className="h-5 w-5 shrink-0 text-ocean" strokeWidth={1.5} />
                Minutes from Veer Savarkar International Airport
              </span>
              <span className="flex items-center gap-3 text-shadow/80">
                <Ship className="h-5 w-5 shrink-0 text-ocean" strokeWidth={1.5} />
                Close to the ferry harbour &amp; city attractions
              </span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-shadow/50">
              Ideal for
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {idealFor.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-shadow/15 bg-white/60 px-4 py-1.5 text-sm text-shadow/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background image with a soft white cast */}
        <Image
          src="/about/location-bg.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/80" />
        <Reveal once={false} blur className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-script text-5xl leading-[1.1] text-shadow [text-shadow:0_1px_16px_rgba(247,244,236,0.9)] md:text-6xl lg:text-7xl">
            Come Stay With Us
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-shadow/75">
            Your island holiday begins the moment you arrive. Reserve your room and let us take
            care of the rest.
          </p>
          <Button href="/contact" variant="shadow" size="lg" className="group mt-8">
            Book Your Stay
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </section>
    </>
  )
}
