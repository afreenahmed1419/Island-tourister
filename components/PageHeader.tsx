'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  imageLabel: string
}

/** Shared inner-page banner: full-width placeholder image with overlaid title. */
export default function PageHeader({ eyebrow, title, subtitle, imageLabel }: Props) {
  return (
    <section className="relative">
      {/* Banner image fills the header */}
      <div className="absolute inset-0">
        <ImagePlaceholder label={imageLabel} aspect="16:6" fill alt={`${title} banner`} />
        <div className="absolute inset-0 bg-shadow/45" />
      </div>

      <div className="relative mx-auto flex min-h-[44vh] max-w-content flex-col items-center justify-center px-4 pt-28 pb-16 text-center md:min-h-[52vh]">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-cream"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 font-serif text-4xl text-cream md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 max-w-xl text-cream/85"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
