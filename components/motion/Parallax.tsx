'use client'

import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

type Props = {
  children: React.ReactNode
  /** Vertical travel in px across the element's scroll range. Positive = moves up as you scroll. */
  amount?: number
  className?: string
}

/**
 * Wraps content and gives it a gentle scroll-linked vertical drift.
 * Disabled automatically when the user prefers reduced motion.
 */
export default function Parallax({ children, amount = 60, className }: Props) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount])

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}
