'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { Component as EtherealShadow } from './ui/etheral-shadow'
import { Reveal, RevealGroup, RevealItem } from './motion/Reveal'

const STATS = [
  { to: 11, label: 'Deluxe Rooms' },
  { to: 4, label: 'Super Deluxe Rooms' },
  { to: 3, label: 'Standard Rooms' },
  { to: 2, label: 'Honeymoon Suites' }
]

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  // once:false → re-fires every time the number scrolls back into view
  const inView = useInView(ref, { amount: 0.6 })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(0)

  useEffect(() => {
    // Reset to 0 when out of view so it counts up again on the next entry
    if (!inView) {
      setVal(0)
      return
    }
    if (reduce) {
      setVal(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const dur = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, reduce])

  return <span ref={ref}>{val}</span>
}

export default function AboutStats() {
  return (
    <section className="relative overflow-hidden bg-shadow py-20 md:py-28">
      <EtherealShadow
        className="pointer-events-none"
        style={{ position: 'absolute', inset: 0 }}
        color="rgba(112, 172, 144, 0.32)"
        animation={{ scale: 70, speed: 40 }}
        noise={{ opacity: 0.18, scale: 1.2 }}
        sizing="fill"
      />

      <div className="relative z-10 mx-auto max-w-content px-4 md:px-8">
        <Reveal as="div" from="up" blur once={false} className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !text-sage justify-center">The Collection</span>
          <h2 className="mt-3 font-serif text-3xl text-cream md:text-4xl">
            Twenty Rooms, Crafted for Comfort
          </h2>
          <p className="mt-4 leading-relaxed text-cream/70">
            A curated mix of rooms and suites that blends comfort, style and elegance — for an
            unmatched stay in the city&apos;s most dynamic location.
          </p>
        </Reveal>

        <RevealGroup as="div" stagger={0.1} once={false} className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {STATS.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div className="font-serif text-5xl text-sage md:text-6xl">
                <Counter to={s.to} />
              </div>
              <div className="mx-auto mt-3 h-px w-8 bg-shoreline/60" />
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-cream/70">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
