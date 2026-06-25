'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from './Lightbox'
import { galleryItems, galleryCategories, type GalleryCategory } from '@/lib/data'

type Filter = 'All' | GalleryCategory
const filters: Filter[] = ['All', ...galleryCategories]

/** Filterable masonry-style gallery with a click-to-open lightbox. */
export default function GalleryGrid() {
  const [active, setActive] = useState<Filter>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visible = useMemo(
    () => (active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)),
    [active]
  )

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`focus-brand rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === f
                ? 'bg-sage text-cream'
                : 'border border-shadow/20 text-shadow hover:border-sage hover:text-ocean'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry columns */}
      <motion.div layout className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -4 }}
              type="button"
              onClick={() => setLightboxIndex(visible.indexOf(item))}
              className="group focus-brand relative block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
              aria-label={`Open ${item.label}`}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: item.aspect.replace(':', ' / ') }}>
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>
              {/* Label on hover */}
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-shadow/85 via-shadow/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 text-left font-serif text-sm leading-tight text-cream md:text-base">
                  {item.label}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox navigates within the currently visible (filtered) set */}
      <Lightbox
        items={visible}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  )
}
