'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Component as EtherealShadow } from './ui/etheral-shadow'
import { testimonials } from '@/lib/data'

const AUTO_MS = 6000

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -50 : 50, opacity: 0 })
}

export default function TestimonialsGallery() {
  const n = testimonials.length
  const [[active, dir], setActive] = useState<[number, number]>([0, 0])
  const [paused, setPaused] = useState(false)

  const go = (d: number) => setActive(([a]) => [(a + d + n) % n, d])
  const jump = (i: number) => setActive(([a]) => [i, i >= a ? 1 : -1])

  // Autoplay — re-arms on every change so manual nav resets the countdown
  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setActive(([a]) => [(a + 1) % n, 1]), AUTO_MS)
    return () => clearTimeout(id)
  }, [active, paused, n])

  const t = testimonials[active]

  return (
    <section className="relative overflow-hidden bg-shadow py-24 md:py-32">
      <EtherealShadow
        className="pointer-events-none"
        style={{ position: 'absolute', inset: 0 }}
        color="rgba(112, 172, 144, 0.38)"
        animation={{ scale: 80, speed: 45 }}
        noise={{ opacity: 0.2, scale: 1.2 }}
        sizing="fill"
      />

      <div className="relative z-10 mx-auto max-w-content px-4 md:px-8">
        <div className="text-center">
          <span className="eyebrow !text-sage justify-center">Guest Stories</span>
          <h2 className="mt-3 font-serif text-3xl text-cream md:text-4xl lg:text-[2.75rem]">
            What Our Guests Say
          </h2>
        </div>

        {/* Single-card slider */}
        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Arrows */}
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="focus-brand absolute -left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-sage hover:bg-sage hover:text-shadow md:-left-16"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => go(1)}
            className="focus-brand absolute -right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-sage hover:bg-sage hover:text-shadow md:-right-16"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Card */}
          <div className="relative flex min-h-[360px] items-center md:min-h-[340px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1)
                  else if (info.offset.x > 60) go(-1)
                }}
                className="w-full"
              >
                <div className="flex flex-col items-center rounded-3xl bg-cream px-8 py-12 text-center shadow-2xl ring-1 ring-shadow/5 md:px-16 md:py-14">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={s < t.rating ? 'text-[#F5B301]' : 'text-shadow/15'}
                        fill="currentColor"
                        strokeWidth={0}
                        size={18}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mt-7 max-w-2xl font-serif text-xl leading-relaxed text-shadow/90 md:text-2xl md:leading-relaxed">
                    “{t.quote}”
                  </p>

                  {/* Divider + attribution */}
                  <div className="mt-9 h-px w-12 bg-shoreline/60" />
                  <p className="mt-6 font-serif text-lg text-shadow">{t.name}</p>
                  <p className="mt-1 text-sm text-shadow/55">{t.detail}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-9 flex items-center justify-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                onClick={() => jump(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-7 bg-sage' : 'w-2 bg-cream/25 hover:bg-cream/45'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
