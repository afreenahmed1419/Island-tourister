import React from 'react'

// Maps a human aspect-ratio label to a CSS aspect-ratio value.
const ASPECTS: Record<string, string> = {
  '16:9': '16 / 9',
  '21:9': '21 / 9',
  '16:6': '16 / 6',
  '3:2': '3 / 2',
  '4:3': '4 / 3',
  '1:1': '1 / 1',
  '3:4': '3 / 4',
  '4:5': '4 / 5'
}

type Props = {
  /** What goes here, e.g. "Hero Image" — the aspect ratio is appended automatically */
  label?: string
  /** Aspect ratio key, e.g. "16:9", "4:3" */
  aspect?: keyof typeof ASPECTS | string
  className?: string
  /** When true the box fills its (positioned) parent instead of using an intrinsic ratio */
  fill?: boolean
  /** Visually hidden alt text used for accessibility */
  alt?: string
}

/**
 * Reusable labeled image placeholder.
 * Renders a sand/sage tinted dashed box with a centered label like "[Hero Image — 16:9]".
 * Drop a real <Image/> in later — keep the same aspect ratio.
 */
export default function ImagePlaceholder({
  label = 'Image',
  aspect = '4:3',
  className = '',
  fill = false,
  alt
}: Props) {
  const ratio = ASPECTS[aspect] ?? aspect

  return (
    <div
      role="img"
      aria-label={alt ?? `${label} image placeholder`}
      className={`ph-surface group relative flex items-center justify-center rounded-2xl ${
        fill ? 'h-full w-full' : ''
      } ${className}`}
      style={fill ? undefined : { aspectRatio: ratio }}
    >
      <span className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
        <svg
          className="h-7 w-7 text-shadow/35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="select-none text-[11px] font-semibold uppercase tracking-widearrow text-shadow/45">
          {label}
        </span>
      </span>
    </div>
  )
}
