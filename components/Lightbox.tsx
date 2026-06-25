'use client'

import React, { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryItem } from '@/lib/data'

type Props = {
  items: GalleryItem[]
  /** Index into `items` of the open image, or null when closed */
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

/** Accessible modal lightbox with keyboard navigation (Esc / ← / →). */
export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const open = index !== null
  const item = open ? items[index] : null

  const goNext = useCallback(() => {
    if (index === null) return
    onNavigate((index + 1) % items.length)
  }, [index, items.length, onNavigate])

  const goPrev = useCallback(() => {
    if (index === null) return
    onNavigate((index - 1 + items.length) % items.length)
  }, [index, items.length, onNavigate])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, goNext, goPrev])

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-shadow/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.label} enlarged`}
          onClick={onClose}
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="focus-brand absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            aria-label="Previous image"
            className="focus-brand absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 md:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Image */}
          <motion.div
            key={item.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: item.aspect.replace(':', ' / ') }}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm text-cream/70">
              {item.label} · {index! + 1} / {items.length}
            </p>
          </motion.div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            aria-label="Next image"
            className="focus-brand absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 md:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
