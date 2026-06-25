'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { useAnimationFrame } from 'framer-motion'

type Props = {
  items: string[]
  /** Fill of the wave shape (matches the section above). */
  waveFill?: string
  /** Colour of the scrolling text. */
  textColor?: string
  /** Path-units travelled per second. */
  speed?: number
}

// Wave silhouette + a baseline that mirrors it, sitting just below the crest.
// Wave sits lower so there's cream room above it; text rides in that cream band,
// flowing along the wave curve but ABOVE the cut.
const WAVE_FILL = 'M0,90 C240,57 480,57 720,90 C960,123 1200,123 1440,90 L1440,0 L0,0 Z'
const TEXT_PATH = 'M0,58 C240,25 480,25 720,58 C960,91 1200,91 1440,58'

/**
 * A marquee whose text flows along the exact curve of the section's wave edge,
 * scrolling continuously and seamlessly via an animated <textPath> offset.
 */
export default function WaveMarquee({
  items,
  waveFill = '#F7F4EC',
  textColor = '#264D52',
  speed = 60
}: Props) {
  const unit = items.join('    ✦    ') + '    ✦    '

  const rawId = useId().replace(/[:]/g, '')
  const pathId = `wave-text-${rawId}`

  const textPathRef = useRef<SVGTextPathElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const measureRef = useRef<SVGTextElement>(null)
  const offset = useRef(0)
  const unitLen = useRef(1)
  const [repeats, setRepeats] = useState(24)

  // Measure one text unit + the path length so we can tile and wrap seamlessly.
  useEffect(() => {
    const ul = measureRef.current?.getComputedTextLength() || 1
    const pl = pathRef.current?.getTotalLength() || 1440
    unitLen.current = ul
    setRepeats(Math.ceil((pl + ul) / ul) + 2)
  }, [unit])

  useAnimationFrame((_, delta) => {
    const ul = unitLen.current
    offset.current -= speed * (delta / 1000)
    if (offset.current <= -ul) offset.current += ul
    textPathRef.current?.setAttribute('startOffset', String(offset.current))
  })

  return (
    <div className="w-full" style={{ aspectRatio: '1440 / 130' }}>
      <svg viewBox="0 0 1440 130" preserveAspectRatio="none" className="h-full w-full">
        <path d={WAVE_FILL} fill={waveFill} />
        <path id={pathId} ref={pathRef} d={TEXT_PATH} fill="none" />

        {/* Hidden single unit, used only to measure its rendered length */}
        <text
          ref={measureRef}
          visibility="hidden"
          className="font-sans"
          fontSize="13"
          fontWeight={600}
          letterSpacing="3"
        >
          {unit}
        </text>

        <text className="font-sans" fontSize="13" fontWeight={600} letterSpacing="3" fill={textColor}>
          <textPath ref={textPathRef} href={`#${pathId}`} startOffset="0">
            {unit.repeat(repeats)}
          </textPath>
        </text>
      </svg>
    </div>
  )
}
