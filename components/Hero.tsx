'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Plane,
  Ship,
  Users,
  PawPrint,
  Wine,
  Utensils,
  Flower2,
  Heart,
  Clock,
  HeartHandshake,
  Palmtree,
  ArrowDown
} from 'lucide-react'
import Button from './Button'

const features = [
  { icon: Plane, title: 'Near the Airport', desc: 'Minutes from the airport' },
  { icon: Ship, title: 'Ferry Harbour Nearby', desc: 'Close to the jetty' },
  { icon: Users, title: 'Family Friendly', desc: 'Designed with families in mind' },
  { icon: PawPrint, title: 'Child & Pet Friendly', desc: 'Little ones and pets welcome' },
  { icon: Wine, title: 'Candle-Light Dinner', desc: 'Romantic dining on request' },
  { icon: Utensils, title: 'In-House Restaurant', desc: 'Fresh meals all day' },
  { icon: Flower2, title: 'Flower Bed Decoration', desc: 'Special occasion setups' },
  { icon: Heart, title: 'Honeymoon Suites', desc: 'Romantic escapes for two' },
  { icon: Clock, title: 'Short & Transit Stays', desc: 'Flexible stay durations' },
  { icon: Palmtree, title: 'Island Experiences', desc: 'Gateway to pristine beaches' },
  { icon: HeartHandshake, title: 'Warm Hospitality', desc: 'We care like family' }
]

/** Full-screen home hero — enhanced exterior image with a bottom highlights strip. */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // Gentle parallax: background drifts slower than the page
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '4%'])

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden bg-black">
      {/* Parallax background image + its vignette (scaled together) */}
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Mobile — portrait hero photo, fills the screen */}
        <Image
          src="/hero/hero-mobile.jpg"
          alt="Islands Tourister hotel entrance lit up at night"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        {/* Desktop — wide exterior */}
        <Image
          src="/hero/hero-night.png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="hidden object-contain brightness-110 md:block"
        />
      </motion.div>

      {/* Left fade into black — desktop only */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(6,10,12,0.92) 0%, rgba(6,10,12,0.7) 24%, rgba(6,10,12,0.3) 48%, transparent 70%)'
        }}
      />

      {/* Top blend behind the navbar — lighter on mobile */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/50 to-transparent md:h-56 md:from-[#070f11] md:via-[#070f11]/55" />

      {/* Bottom gradient — lighter on mobile for marquee readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent md:h-52 md:from-[#050b0d]/60" />

      {/* ── Hero heading ──────────────────────────────────────────────────── */}
      {/* Desktop — left-aligned, vertically centred */}
      <div className="absolute inset-0 hidden md:flex md:items-center md:pt-32">
        <div className="w-full max-w-2xl pb-28 pl-28 pr-12 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="font-script text-8xl leading-[0.9] text-cream"
          >
            Luxury redefined
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-5 max-w-sm text-sm leading-relaxed text-cream/75"
          >
            A serene island escape where comfort meets charm — moments from the airport.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-9"
          >
            <Button href="/rooms" size="md" variant="dark">
              Explore
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <ArrowDown className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile — heading at top, subtext + CTA pinned to bottom */}
      <div className="absolute inset-0 flex flex-col md:hidden">
        {/* Top: heading */}
        <div className="px-6 pt-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="font-script text-6xl leading-[0.9] text-cream [text-shadow:0_2px_24px_rgba(0,0,0,0.7)]"
          >
            Luxury redefined
          </motion.h1>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom: subtext + CTA */}
        <div className="px-6 pb-[72px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mx-auto max-w-xs text-[13px] leading-relaxed text-cream/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.85)]"
          >
            A serene island escape where comfort meets charm — moments from the airport.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-5"
          >
            <Button href="/rooms" size="md" variant="dark">
              Explore
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <ArrowDown className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* ── Highlights marquee (continuous auto-scroll) ────────────────────── */}
      <div className="group absolute inset-x-0 bottom-0 overflow-hidden bg-[#5a4233]/35 py-3 backdrop-blur-md md:py-4">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        >
          {[...features, ...features].map((f, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 border-l border-white/15 px-5 md:gap-3.5 md:px-8 lg:px-12"
            >
              <f.icon className="h-5 w-5 shrink-0 text-white/90 md:h-6 md:w-6" strokeWidth={1.3} />
              <div className="whitespace-nowrap">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white md:text-[11px] md:tracking-[0.16em]">
                  {f.title}
                </p>
                <p className="mt-0.5 hidden text-[11px] leading-relaxed text-white/65 md:block">{f.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll cue — subtle, on the dark right edge ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute right-7 top-[42%] z-10 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
      >
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-cream/45"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.35, 1], opacity: [0.55, 0.15, 0.55] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="h-12 w-px origin-top bg-cream/45"
        />
      </motion.div>
    </section>
  )
}
