'use client'

import React from 'react'
import Icon from './Icon'
import { amenities } from '@/lib/data'

// Alternating checkerboard tones — tan and light tan.
const cardTones = ['bg-[#ECE3D4]', 'bg-cream', 'bg-[#ECE3D4]', 'bg-cream', 'bg-[#ECE3D4]']

export default function AmenitiesStack() {
  const top5 = amenities.slice(0, 5)

  return (
    <div className="relative mx-auto max-w-3xl">
      {top5.map((a, i) => (
        <div
          key={a.label}
          className="sticky"
          style={{ top: `calc(16vh + ${i * 1.5}rem)`, zIndex: i + 1 }}
        >
          <div
            className={`mb-24 flex h-[17rem] flex-col justify-center rounded-3xl px-8 py-8 shadow-[0_24px_60px_-24px_rgba(38,77,82,0.45)] ring-1 ring-shadow/10 md:px-12 ${cardTones[i]}`}
          >
            <Icon name={a.icon} className="h-9 w-9 text-ocean md:h-10 md:w-10" strokeWidth={1.5} />
            <h3 className="mt-5 font-serif text-3xl text-shadow md:text-4xl">{a.label}</h3>
            <p className="mt-3 max-w-lg leading-relaxed text-shadow/70">{a.blurb}</p>
            <span className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-shadow/40">
              {String(i + 1).padStart(2, '0')} / 05
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
