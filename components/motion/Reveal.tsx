'use client'

import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

// Unified motion language for the whole site.
// Soft "expo-out" curve for entrances; everything is prefers-reduced-motion aware.
const EASE = [0.22, 1, 0.36, 1] as const

type Dir = 'up' | 'down' | 'left' | 'right' | 'none'
const OFFSET: Record<Dir, { x: number; y: number }> = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
  none: { x: 0, y: 0 }
}

type Tag = 'div' | 'section' | 'article' | 'li' | 'span' | 'h1' | 'h2' | 'h3' | 'p'

type RevealProps = {
  children: React.ReactNode
  as?: Tag
  from?: Dir
  delay?: number
  duration?: number
  /** Add a soft blur-in for a premium, lens-focus feel */
  blur?: boolean
  once?: boolean
  amount?: number
  className?: string
}

/** Single scroll-reveal element. */
export function Reveal({
  children,
  as = 'div',
  from = 'up',
  delay = 0,
  duration = 0.75,
  blur = false,
  once = true,
  amount = 0.25,
  className
}: RevealProps) {
  const reduce = useReducedMotion()
  const off = reduce ? { x: 0, y: 0 } : OFFSET[from]
  const variants: Variants = {
    hidden: { opacity: 0, ...off, filter: blur && !reduce ? 'blur(10px)' : 'blur(0px)' },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: reduce ? 0.01 : duration, ease: EASE, delay: reduce ? 0 : delay }
    }
  }
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </Comp>
  )
}

type GroupProps = {
  children: React.ReactNode
  as?: Tag
  stagger?: number
  delayChildren?: number
  once?: boolean
  amount?: number
  className?: string
}

/** Stagger container — wrap <RevealItem> children for a sequenced cascade. */
export function RevealGroup({
  children,
  as = 'div',
  stagger = 0.08,
  delayChildren = 0.05,
  once = true,
  amount = 0.2,
  className
}: GroupProps) {
  const reduce = useReducedMotion()
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delayChildren
      }
    }
  }
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </Comp>
  )
}

type ItemProps = {
  children: React.ReactNode
  as?: Tag
  from?: Dir
  blur?: boolean
  className?: string
}

/** Child of <RevealGroup>; inherits the parent's stagger timing. */
export function RevealItem({ children, as = 'div', from = 'up', blur = false, className }: ItemProps) {
  const reduce = useReducedMotion()
  const off = reduce ? { x: 0, y: 0 } : OFFSET[from]
  const variants: Variants = {
    hidden: { opacity: 0, ...off, filter: blur && !reduce ? 'blur(10px)' : 'blur(0px)' },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: reduce ? 0.01 : 0.7, ease: EASE }
    }
  }
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp variants={variants} className={className}>
      {children}
    </Comp>
  )
}
