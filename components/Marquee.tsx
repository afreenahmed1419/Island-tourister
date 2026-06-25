'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame, wrap } from 'framer-motion'

type Props = {
  items: string[]
  /** pixels per second */
  speed?: number
  className?: string
}

/**
 * Continuous, seamless horizontal marquee. Two identical copies of the row are
 * laid side by side and wrapped, so the scroll never shows a seam.
 */
export default function Marquee({ items, speed = 50, className = '' }: Props) {
  const x = useMotionValue(0)
  const copyRef = useRef<HTMLDivElement>(null)

  // Repeat the items so a single sequence is wider than any viewport — guarantees
  // the row always fills the screen with no empty gap, even on ultra-wide displays.
  const sequence = React.useMemo(
    () => Array.from({ length: 4 }).flatMap(() => items),
    [items]
  )

  useAnimationFrame((_, delta) => {
    const half = copyRef.current?.offsetWidth ?? 0
    if (half <= 0) return
    x.set(wrap(-half, 0, x.get() - speed * (delta / 1000)))
  })

  const Row = ({ aria }: { aria?: boolean }) => (
    <div
      ref={aria ? undefined : copyRef}
      aria-hidden={aria}
      className="flex shrink-0 items-center"
    >
      {sequence.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-6 text-sm font-medium uppercase tracking-[0.28em]">
            {item}
          </span>
          <span className="text-shoreline opacity-80">&#10022;</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="flex w-max">
        <Row />
        <Row aria />
      </motion.div>
    </div>
  )
}
