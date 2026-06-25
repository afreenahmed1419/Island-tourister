// Icon registry — maps string names to Lucide components.
// We store icon *names* (strings) in the data layer instead of component
// functions, because Next.js forbids passing functions from Server Components
// into Client Components. Resolve names to components via <Icon /> or this map.

import type { LucideIcon } from 'lucide-react'
import {
  Waves,
  Wifi,
  UtensilsCrossed,
  Plane,
  Sparkles,
  BedDouble,
  Users,
  Wind,
  Coffee,
  Bath,
  ShieldCheck,
  Palmtree,
  Ship,
  Fish,
  Sunset,
  HeartHandshake,
  Baby,
  Flower2,
  Snowflake,
  Droplets,
  Zap,
  Video,
  Tv,
  Shirt,
  Activity,
  Clock,
  Star,
  Flame,
  Music,
  MapPin,
  GlassWater
} from 'lucide-react'

export const iconMap = {
  Waves,
  Wifi,
  UtensilsCrossed,
  Plane,
  Sparkles,
  BedDouble,
  Users,
  Wind,
  Coffee,
  Bath,
  ShieldCheck,
  Palmtree,
  Ship,
  Fish,
  Sunset,
  HeartHandshake,
  Baby,
  Flower2,
  Snowflake,
  Droplets,
  Zap,
  Video,
  Tv,
  Shirt,
  Activity,
  Clock,
  Star,
  Flame,
  Music,
  MapPin,
  GlassWater
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof iconMap
