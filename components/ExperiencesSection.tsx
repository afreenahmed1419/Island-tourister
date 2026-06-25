'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import { Reveal } from './motion/Reveal'
import { experiences } from '@/lib/data'

const DIAMETER = 260
const SLOT_GAP = 44
const AUTO_SPEED = 0.6 // px per 60fps-frame

export default function ExperiencesSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const offset = useRef(0)
  const velocity = useRef(0)
  const isDragging = useRef(false)
  const lastX = useRef(0)
  const autoEnabled = useRef(true)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Triple the set so the loop is seamless no matter the viewport width.
  const items = [...experiences, ...experiences, ...experiences]

  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const w = experiences.length * (DIAMETER + SLOT_GAP)

    const loop = (now: number) => {
      const dt = Math.min(now - last, 50) / (1000 / 60)
      last = now

      if (autoEnabled.current && !isDragging.current) {
        offset.current += AUTO_SPEED * dt
      }
      offset.current += velocity.current
      velocity.current *= 0.9
      if (Math.abs(velocity.current) < 0.01) velocity.current = 0

      offset.current = ((offset.current % w) + w) % w

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-offset.current}px, 0, 0)`
      }
      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  const pauseAuto = () => {
    autoEnabled.current = false
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => { autoEnabled.current = true }, 2500)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    lastX.current = e.clientX
    velocity.current = 0
    autoEnabled.current = false
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    const dx = lastX.current - e.clientX
    offset.current += dx
    velocity.current = dx
    lastX.current = e.clientX
  }

  const onPointerUp = () => {
    if (!isDragging.current) return
    isDragging.current = false
    pauseAuto()
  }

  const onWheel = (e: React.WheelEvent) => {
    velocity.current += (e.deltaY + e.deltaX) * 0.25
    pauseAuto()
  }

  return (
    <section id="experiences" className="scroll-mt-24 bg-cream pb-20 pt-28 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-content px-4 md:px-8">
        <SectionHeading
          eyebrow="Explore"
          title="Nearby Experiences"
          subtitle="Must-visit destinations and activities just a short ride from Islands Tourister."
        />
      </div>

      <Reveal from="up" blur once={false} className="mt-16">
        <div
          className="relative w-full cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
          onWheel={onWheel}
        >
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent md:w-28" />

          <div
            ref={trackRef}
            className="flex select-none will-change-transform"
            style={{ gap: `${SLOT_GAP}px`, paddingLeft: SLOT_GAP }}
          >
            {items.map((ex, i) => (
              <div
                key={`${ex.slug}-${i}`}
                className="flex shrink-0 flex-col items-center"
                style={{ width: DIAMETER }}
              >
                <div
                  className="group relative overflow-hidden rounded-full shadow-soft ring-4 ring-white transition-transform duration-500 hover:scale-[1.04]"
                  style={{ width: DIAMETER, height: DIAMETER }}
                >
                  {ex.image ? (
                    <Image
                      src={ex.image}
                      alt={ex.imageLabel}
                      fill
                      sizes={`${DIAMETER}px`}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      draggable={false}
                    />
                  ) : (
                    <div className="ph-surface absolute inset-0" />
                  )}

                  {/* Detail on hover */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-shadow/80 px-7 text-center opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-[13px] leading-relaxed text-cream/95">{ex.desc}</p>
                  </div>
                </div>

                {/* Caption */}
                <h3 className="mt-5 px-2 text-center font-serif text-lg leading-snug text-shadow">
                  {ex.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-content px-4 md:px-8">
        <Reveal once={false} className="mt-12 flex items-center justify-center gap-3 text-center">
          <span aria-hidden className="h-px w-8 bg-shadow/20" />
          <p className="text-sm text-shadow/60">
            Our team can arrange every excursion for you — just ask at the front desk.
          </p>
          <span aria-hidden className="h-px w-8 bg-shadow/20" />
        </Reveal>
      </div>
    </section>
  )
}
