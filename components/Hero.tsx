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

      {/* Left fade into black — anchors the heading text */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(6,10,12,0.92) 0%, rgba(6,10,12,0.7) 24%, rgba(6,10,12,0.3) 48%, transparent 70%)'
        }}
      />

      {/* Premium dark blend behind the navbar — top fades into the image */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#070f11] via-[#070f11]/55 to-transparent" />

      {/* Soft bottom gradient — just enough to separate cards from the image */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#050b0d]/60 to-transparent" />

      {/* Mobile-only scrim — darkens the top, where the heading now sits. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-black/30 md:hidden" />

      {/* ── Hero heading ──────────────────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-start pt-28 md:items-center md:pt-32">
        <div className="w-full max-w-2xl px-6 text-center md:pb-28 md:pl-28 md:pr-12 md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="font-script text-6xl leading-[0.9] text-cream [text-shadow:0_2px_24px_rgba(0,0,0,0.7)] md:text-8xl md:[text-shadow:none]"
          >
            Luxury redefined
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mx-auto mt-5 max-w-sm text-xs leading-relaxed text-cream/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.85)] md:mx-0 md:text-sm md:text-cream/75 md:[text-shadow:none]"
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

      {/* ── Highlights marquee (continuous auto-scroll) ────────────────────── */}
      <div className="group absolute inset-x-0 bottom-0 hidden overflow-hidden bg-[#5a4233]/35 py-4 backdrop-blur-md md:block">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        >
          {[...features, ...features].map((f, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3.5 border-l border-white/15 px-8 lg:px-12"
            >
              <f.icon className="h-6 w-6 shrink-0 text-white/90" strokeWidth={1.3} />
              <div className="whitespace-nowrap">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  {f.title}
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-white/65">{f.desc}</p>
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
