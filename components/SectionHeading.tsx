import React from 'react'

type Props = {
  /** Small uppercase label above the title */
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'left' | 'center'
  /** Render the title in cream (for dark backgrounds) */
  inverted?: boolean
  className?: string
}

/** Consistent section header: eyebrow + Playfair title + optional subtitle. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  inverted = false,
  className = ''
}: Props) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${inverted ? '!text-sage' : ''}`}>{eyebrow}</span>
      )}
      <h2
        className={`font-serif text-3xl leading-tight md:text-4xl lg:text-[2.75rem] ${
          inverted ? 'text-cream' : 'text-shadow'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed ${inverted ? 'text-cream/80' : 'text-shadow/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
