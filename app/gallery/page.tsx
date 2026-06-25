import React from 'react'
import type { Metadata } from 'next'
import GalleryHero from '@/components/GalleryHero'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A visual tour of Islands Tourister — rooms, dining, beaches and island experiences.'
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <section className="mx-auto max-w-content px-4 py-20 md:px-8 md:py-28">
        <GalleryGrid />
      </section>
    </>
  )
}
