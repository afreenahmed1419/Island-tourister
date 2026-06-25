'use client'

import React from 'react'
import { Reveal } from './motion/Reveal'
import './GalleryHero.css'

// 12 images, 4 per row. Drop your files at public/gallery/hero/1.jpg … 12.jpg
const HERO_IMAGES = Array.from({ length: 12 }, (_, i) => `/gallery/hero/${i + 1}.jpg`)

const ROWS = [
  { images: HERO_IMAGES.slice(0, 4), dir: 'left' as const },
  { images: HERO_IMAGES.slice(4, 8), dir: 'right' as const },
  { images: HERO_IMAGES.slice(8, 12), dir: 'left' as const }
]

export default function GalleryHero() {
  return (
    <section className="gh-section">
      {/* Three continuous marquees, alternating direction */}
      <div className="gh-stage" aria-hidden>
        {ROWS.map((row, r) => (
          <div key={r} className={`gh-row ${row.dir === 'left' ? 'gh-row--left' : 'gh-row--right'}`}>
            {/* 3 copies of the row's 4 images for a seamless loop */}
            {[0, 1, 2].map((copy) =>
              row.images.map((src, i) => (
                <div
                  key={`${copy}-${i}`}
                  className="gh-tile"
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))
            )}
          </div>
        ))}
      </div>

      {/* Heading on a light frosted-glass panel (images stay clear behind it) */}
      <div className="absolute inset-0 z-[3] flex items-center justify-center px-4">
        <div className="flex max-w-xl flex-col items-center rounded-3xl border border-white/25 bg-white/10 px-8 py-12 text-center shadow-2xl backdrop-blur-2xl md:px-16 md:py-16">
          <Reveal as="span" from="up" className="font-script text-4xl text-[#B7E0C9] [text-shadow:0_1px_12px_rgba(0,0,0,0.6)] md:text-5xl">
            Moments
          </Reveal>
          <Reveal as="h1" from="up" blur delay={0.08} className="mt-2 font-serif text-5xl text-cream [text-shadow:0_2px_22px_rgba(38,77,82,0.55)] md:text-6xl lg:text-7xl">
            Gallery
          </Reveal>
          <Reveal as="p" from="up" delay={0.16} className="mt-5 leading-relaxed text-cream/95 [text-shadow:0_1px_12px_rgba(38,77,82,0.5)]">
            A visual journey through Islands Tourister — our rooms, our island, and the moments
            our guests carry home.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
