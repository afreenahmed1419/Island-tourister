'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Quote, Star } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'
import Button from './Button'
import Icon from './Icon'
import { fadeUpChild } from './AnimatedSection'
import type { IconName } from '@/lib/icons'
import type { Room, Experience, DiningVenue, Amenity, Testimonial } from '@/lib/data'

// Shared hover-lift props for cards. Spread onto a motion element.
const cardMotion = {
  variants: fadeUpChild,
  whileHover: { y: -6 },
  transition: { type: 'spring', stiffness: 300, damping: 22 }
} as const

// ── Room card (used in Home "Featured Rooms") ─────────────────────────────────
export function RoomCard({ room }: { room: Room }) {
  return (
    <motion.article
      {...cardMotion}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft"
    >
      <ImagePlaceholder label={room.imageLabel} aspect="4:3" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-shadow">{room.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-shadow/70">{room.shortDesc}</p>
        <div className="mt-4 flex items-center justify-between border-t border-sand/60 pt-4">
          <span className="text-sm font-semibold text-ocean">{room.priceFrom}</span>
          <Button href="/rooms" variant="ghost" size="sm" className="px-0">
            View Details <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

// ── Experience card ───────────────────────────────────────────────────────────
export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.article
      {...cardMotion}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft"
    >
      <div className="relative">
        <ImagePlaceholder label={experience.imageLabel} aspect="4:3" />
        <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-ocean shadow-soft">
          <Icon name={experience.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-lg text-shadow">{experience.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-shadow/70">{experience.desc}</p>
      </div>
    </motion.article>
  )
}

// ── Dining venue card ─────────────────────────────────────────────────────────
export function DiningCard({ venue }: { venue: DiningVenue }) {
  return (
    <motion.article
      {...cardMotion}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft"
    >
      <ImagePlaceholder label={venue.imageLabel} aspect="4:3" />
      <div className="flex flex-1 flex-col p-6">
        <span className="eyebrow">{venue.cuisine}</span>
        <h3 className="mt-1 font-serif text-xl text-shadow">{venue.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-shadow/70">{venue.desc}</p>
        <p className="mt-4 border-t border-sand/60 pt-4 text-xs uppercase tracking-widearrow text-shoreline">
          {venue.hours}
        </p>
      </div>
    </motion.article>
  )
}

// ── Amenity item (icon + label) ───────────────────────────────────────────────
export function AmenityCard({ amenity }: { amenity: Amenity }) {
  return (
    <motion.div
      {...cardMotion}
      className="group flex flex-col items-center gap-4 rounded-2xl border border-sage/10 bg-white p-7 text-center shadow-soft transition-shadow duration-300 hover:shadow-xl"
    >
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-ocean transition-all duration-300 group-hover:scale-110 group-hover:bg-sage group-hover:text-cream">
        <Icon name={amenity.icon} className="h-7 w-7" strokeWidth={1.5} />
      </span>
      <span className="text-sm font-semibold text-shadow">{amenity.label}</span>
    </motion.div>
  )
}

// ── Value card (About page) ───────────────────────────────────────────────────
export function ValueCard({
  value
}: {
  value: { title: string; desc: string; icon: IconName }
}) {
  return (
    <motion.div {...cardMotion} className="rounded-2xl bg-white p-7 shadow-soft">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-shoreline/20 text-shadow">
        <Icon name={value.icon} className="h-6 w-6" strokeWidth={1.5} />
      </span>
      <h3 className="mt-4 font-serif text-lg text-shadow">{value.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-shadow/70">{value.desc}</p>
    </motion.div>
  )
}

// ── Testimonial card ──────────────────────────────────────────────────────────
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.figure
      {...cardMotion}
      className="flex flex-col rounded-2xl bg-white p-7 shadow-soft"
    >
      <div className="flex items-center justify-between">
        <Quote className="h-8 w-8 text-sage/60" />
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-shadow/85">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-sand/60 pt-4">
        <span className="block font-semibold text-shadow">{testimonial.name}</span>
        <span className="text-sm text-shadow/60">{testimonial.detail}</span>
      </figcaption>
    </motion.figure>
  )
}
