'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame, wrap } from 'framer-motion'
import Icon from './Icon'
import type { Amenity } from '@/lib/data'

function Chip({ a }: { a: Amenity }) {
  return (
    <div className="flex shrink-0 select-none items-center gap-3 rounded-full border border-sage/15 bg-white/85 px-5 py-3 shadow-soft">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage/15 text-ocean">
        <Icon name={a.icon} className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-shadow">{a.label}</span>
    </div>
  )
}

function Row({
  items,
  speed,
  direction
}: {
  items: Amenity[]
  speed: number
  direction: 1 | -1
}) {
  const x = useMotionValue(0)
  const copyRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  // Continuous auto-scroll, paused while dragging. Wrap keeps it seamless.
  useAnimationFrame((_, delta) => {
    if (dragging.current) return
    const half = copyRef.current?.offsetWidth ?? 0
    if (half <= 0) return
    const moveBy = direction * speed * (delta / 1000)
    x.set(wrap(-half, 0, x.get() - moveBy))
  })

  return (
    <motion.div
      style={{ x }}
      drag="x"
      dragMomentum={false}
      onDragStart={() => (dragging.current = true)}
      onDragEnd={() => (dragging.current = false)}
      className="flex w-max cursor-grab active:cursor-grabbing"
    >
      {/* Two identical copies → seamless loop; pr-4 gives the trailing gap */}
      <div ref={copyRef} className="flex shrink-0 gap-4 pr-4">
        {items.map((a) => (
          <Chip key={a.label} a={a} />
        ))}
      </div>
      <div className="flex shrink-0 gap-4 pr-4" aria-hidden>
        {items.map((a) => (
          <Chip key={`${a.label}-dup`} a={a} />
        ))}
      </div>
    </motion.div>
  )
}

export default function AmenitiesMarquee({ amenities }: { amenities: Amenity[] }) {
  const mid = Math.ceil(amenities.length / 2)
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <Row items={amenities.slice(0, mid)} speed={45} direction={1} />
      <Row items={amenities.slice(mid)} speed={45} direction={-1} />
    </div>
  )
}
