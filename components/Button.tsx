'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'outline' | 'outline-light' | 'dark' | 'shadow' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

// As a link
type LinkProps = CommonProps & {
  href: string
  onClick?: never
  type?: never
}
// As a button
type ButtonProps = CommonProps & {
  href?: never
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

type Props = LinkProps | ButtonProps

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium uppercase tracking-[0.16em] transition-all duration-300 focus-brand disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-sage text-cream hover:bg-ocean',
  shadow: 'bg-shadow text-cream hover:bg-shadow/85',
  secondary: 'bg-shoreline text-shadow hover:bg-shoreline/85',
  outline: 'border border-shadow/30 text-shadow hover:border-sage hover:text-ocean bg-transparent',
  // For use over dark imagery — transparent with a light border
  'outline-light': 'border border-cream/50 text-cream bg-transparent hover:border-cream hover:bg-cream/10',
  // Translucent shoreline-dark, gold-tinted border + soft warm glow — luxe over imagery
  dark: 'border border-[#d8c0aa]/35 bg-[#5a4233]/50 text-cream shadow-[0_6px_28px_-10px_rgba(216,192,170,0.3)] backdrop-blur-sm hover:border-[#d8c0aa]/70 hover:bg-[#5a4233]/80 hover:shadow-[0_14px_48px_-8px_rgba(216,192,170,0.5)]',
  ghost: 'text-shadow hover:text-ocean'
}

const sizes: Record<Size, string> = {
  sm: 'px-6 py-2.5 text-[11px]',
  md: 'px-7 py-3.5 text-xs',
  lg: 'px-9 py-4 text-[13px]'
}

/** Brand button with a soft hover-lift. Renders <Link> when `href` is set, otherwise a <button>. */
export default function Button(props: Props) {
  const { variant = 'primary', size = 'md', className = '', children } = props
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  // Subtle lift on hover/press
  const hover = { y: -2 }
  const tap = { y: 0, scale: 0.98 }
  const spring = { type: 'spring' as const, stiffness: 400, damping: 25 }

  if ('href' in props && props.href) {
    return (
      <motion.span
        whileHover={hover}
        whileTap={tap}
        transition={spring}
        className="inline-block"
      >
        <Link href={props.href} className={cls}>
          {children}
        </Link>
      </motion.span>
    )
  }

  return (
    <motion.button
      whileHover={hover}
      whileTap={tap}
      transition={spring}
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cls}
    >
      {children}
    </motion.button>
  )
}
