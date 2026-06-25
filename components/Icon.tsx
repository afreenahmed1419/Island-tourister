import React from 'react'
import { iconMap, type IconName } from '@/lib/icons'

type Props = {
  name: IconName
  className?: string
  strokeWidth?: number
}

/**
 * Renders a Lucide icon by string name. Safe to use in both Server and Client
 * components — only the *name* string crosses the server/client boundary.
 */
export default function Icon({ name, className, strokeWidth }: Props) {
  const Cmp = iconMap[name]
  if (!Cmp) return null
  return <Cmp className={className} strokeWidth={strokeWidth} />
}
