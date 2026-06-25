'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'

type Props = {
  children: React.ReactNode
  variants?: Variants
  className?: string
}

/**
 * Thin client wrapper around motion.div so server components can drop
 * individual stagger children inside an AnimatedSection stagger container.
 */
export default function MotionItem({ children, variants, className = '' }: Props) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
