'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'

// Shared scroll-reveal variants — subtle fade-up + slight slide.
// Children using `fadeUpChild` will stagger when nested in a stagger container.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
}

export const fadeUpChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

// Per-direction entry offsets
const OFFSETS = {
  up: { x: 0, y: 24 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 }
}

type Props = {
  children: React.ReactNode
  className?: string
  /** Use a stagger container so direct children animate in sequence */
  stagger?: boolean
  /** HTML element to render (section by default) */
  as?: 'section' | 'div'
  /** Direction the content slides in from */
  from?: 'up' | 'left' | 'right'
  /** Animate only once, or every time it scrolls into view */
  once?: boolean
  /** Reveal duration in seconds */
  duration?: number
}

/**
 * Wraps content in a scroll-triggered reveal. Use `stagger` and wrap children
 * in <motion.div variants={fadeUpChild}> (or import the variants) for sequenced reveals.
 */
export default function AnimatedSection({
  children,
  className = '',
  stagger = false,
  as = 'section',
  from = 'up',
  once = true,
  duration = 0.7
}: Props) {
  const directional: Variants = {
    hidden: { opacity: 0, ...OFFSETS[from] },
    show: { opacity: 1, x: 0, y: 0, transition: { duration, ease: [0.33, 1, 0.68, 1] } }
  }
  const common = {
    initial: 'hidden' as const,
    whileInView: 'show' as const,
    viewport: { once, amount: 0.2 },
    variants: stagger ? staggerContainer : directional,
    className
  }

  if (as === 'div') {
    return <motion.div {...common}>{children}</motion.div>
  }
  return <motion.section {...common}>{children}</motion.section>
}
