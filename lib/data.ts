// ─────────────────────────────────────────────────────────────────────────────
// CONTENT DATA LAYER
// Edit site content here. Everything is typed and consumed by the pages/components.
// Image placeholders are referenced by label only — drop real assets in later.
// ─────────────────────────────────────────────────────────────────────────────

import type { IconName } from './icons'

// ── Navigation ───────────────────────────────────────────────────────────────
export type NavLink = { label: string; href: string }

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Rooms & Suites', href: '/#rooms' },
  { label: 'Dining', href: '/dining' },
  { label: 'Experiences', href: '/#experiences' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' }
]

// ── Brand pillars (footer) ─────────────────────────────────────────────────────
export type Pillar = { label: string; icon: IconName }

export const pillars: Pillar[] = [
  { label: 'Family Friendly', icon: 'Users' },
  { label: 'Tropical Luxury', icon: 'Palmtree' },
  { label: 'Premium Stay', icon: 'Sparkles' },
  { label: 'Memorable Experiences', icon: 'HeartHandshake' }
]

// ── Rooms & Suites ──────────────────────────────────────────────────────────────
export type Amenity = { label: string; icon: IconName; blurb?: string }

export type Room = {
  slug: string
  name: string
  shortDesc: string
  /** Evocative one-liner shown under the room name */
  tagline: string
  description: string
  /** Short descriptive bullet points */
  highlights: string[]
  priceFrom: string
  image: string
  imageLabel: string
  amenities: Amenity[]
}

export const rooms: Room[] = [
  {
    slug: 'standard-room',
    name: 'Standard Room',
    shortDesc: 'Comfortable essentials for an easy stay',
    tagline: 'Easy, breezy and effortlessly comfortable.',
    description:
      'A cosy, well-appointed room with all the modern essentials — air-conditioning, a comfortable bed and a clean, restful space. The ideal hassle-free base for solo travellers and couples exploring the Andamans.',
    highlights: ['Air-conditioned all day', 'Clean, restful interiors', 'A perfect hassle-free base'],
    priceFrom: 'from ₹3,000 / night',
    image: '/rooms/standard-room.jpeg',
    imageLabel: 'Standard Room',
    amenities: [
      { label: 'Queen Bed', icon: 'BedDouble' },
      { label: 'Free WiFi', icon: 'Wifi' },
      { label: 'Air Conditioning', icon: 'Wind' },
      { label: 'Tea / Coffee', icon: 'Coffee' }
    ]
  },
  {
    slug: 'deluxe-room',
    name: 'Deluxe Room',
    shortDesc: 'Extra space and premium comfort',
    tagline: 'A little more room to spread out and unwind.',
    description:
      'A spacious, elegantly furnished room with premium comforts and thoughtful touches. Plenty of room to unwind after a day of island exploring, with a plush king bed and modern amenities throughout.',
    highlights: ['Spacious, elegant layout', 'Plush king bed', 'Modern comforts throughout'],
    priceFrom: 'from ₹3,300 / night',
    image: '/rooms/deluxe-room.jpg',
    imageLabel: 'Deluxe Room',
    amenities: [
      { label: 'King Bed', icon: 'BedDouble' },
      { label: 'Free WiFi', icon: 'Wifi' },
      { label: 'Air Conditioning', icon: 'Wind' },
      { label: 'Tea / Coffee', icon: 'Coffee' }
    ]
  },
  {
    slug: 'super-deluxe-room',
    name: 'Super Deluxe Room',
    shortDesc: 'Elevated comfort with extra space',
    tagline: 'Elevated comfort, with room to breathe.',
    description:
      'Our most generously sized rooms, blending premium furnishings with extra space and upscale touches. Thoughtfully designed for guests who want a little more luxury and comfort during their island stay.',
    highlights: ['Our most generous rooms', 'Premium furnishings', 'Upscale finishing touches'],
    priceFrom: 'from ₹3,400 / night',
    image: '/rooms/super-deluxe-room.jpeg',
    imageLabel: 'Super Deluxe Room',
    amenities: [
      { label: 'King Bed', icon: 'BedDouble' },
      { label: 'Free WiFi', icon: 'Wifi' },
      { label: 'Air Conditioning', icon: 'Wind' },
      { label: 'Flat-Screen TV', icon: 'Tv' }
    ]
  },
  {
    slug: 'honeymoon-suite',
    name: 'Honeymoon Suite',
    shortDesc: 'A romantic escape for two',
    tagline: 'A romantic hideaway made for two.',
    description:
      'Our most romantic retreat — a private, beautifully styled suite designed for couples to relax and celebrate. A plush king bed, a special romantic setup and indulgent extras make for a memorable island getaway.',
    highlights: ['Private, beautifully styled suite', 'Special romantic setup', 'Indulgent couple’s extras'],
    priceFrom: 'from ₹3,600 / night',
    image: '/rooms/honeymoon-suite.jpeg',
    imageLabel: 'Honeymoon Suite',
    amenities: [
      { label: 'King Bed', icon: 'BedDouble' },
      { label: 'Romantic Setup', icon: 'Flower2' },
      { label: 'Flat-Screen TV', icon: 'Tv' },
      { label: 'Free WiFi', icon: 'Wifi' }
    ]
  }
]

export type Experience = {
  slug: string
  title: string
  desc: string
  icon: IconName
  image?: string
  imageLabel: string
}

export const experiences: Experience[] = [
  {
    slug: "scuba",
    title: "Scuba Diving at North Bay Island",
    desc: "Descend into crystal-clear waters and glide over vivid coral gardens with certified local guides.",
    icon: "Fish",
    image: "/experiences/scuba-diving.jpg",
    imageLabel: "Scuba Diving at North Bay Island"
  },
  {
    slug: 'cellular-jail',
    title: 'Step Into History at Cellular Jail',
    desc: 'Walk through the haunting corridors of the Cellular Jail and relive the powerful story of India\'s freedom struggle.',
    icon: 'Ship',
    image: "/experiences/cellular-jail.jpg",
    imageLabel: 'Step Into History at Cellular Jail'
  },
  {
    slug: 'sunset-cruise',
    title: 'Sunset at Chidiya Tapu Beach',
    desc: 'Watch the sun paint the sky in golden hues from the cliffs of Chidiya Tapu, one of the Andamans most breathtaking natural viewpoints.',
    icon: 'Sunset',
    image: "/experiences/chidiya-tapu.jpg",
    imageLabel: 'Sunset at Chidiya Tapu Beach'
  },
  {
    slug: 'corbyns-cove',
    title: 'Relax at Corbyn\'s Cove Beach',
    desc: 'Unwind on pristine white sands where turquoise waters meet lush tropical palms — Corbyn\'s Cove is your island paradise.',
    icon: 'Flower2',
    image: "/experiences/corbyns-cove.jpg",
    imageLabel: 'Relax at Corbyn\'s Cove Beach'
  },
  {
    slug: 'ross-island',
    title: 'Explore the Ruins of Ross Island',
    desc: 'Wander through colonial-era ruins reclaimed by nature on this storied island just a short ferry ride from Port Blair.',
    icon: 'HeartHandshake',
    image: "/experiences/ross-island.webp",
    imageLabel: 'Explore the Ruins of Ross Island'
  },
  {
    slug: 'samudrika-museum',
    title: 'Discover Marine Life at Samudrika Museum',
    desc: 'Explore vibrant coral ecosystems and fascinating marine exhibits that bring the Andaman seas to life.',
    icon: 'Baby',
    image: "/experiences/samudrika-museum.jpg",
    imageLabel: 'Discover Marine Life at Samudrika Museum'
  }
]

// ── Dining ────────────────────────────────────────────────────────────────────
// Highlight chips for the home-page Dining section
export const diningHighlights: Amenity[] = [
  { label: 'Buffet Breakfast', icon: 'Coffee' },
  { label: 'Multi-Cuisine Menu', icon: 'UtensilsCrossed' },
  { label: 'Fresh Local Seafood', icon: 'Fish' },
  { label: 'In-Room Dining', icon: 'Sparkles' }
]

export type DiningVenue = {
  slug: string
  name: string
  cuisine: string
  desc: string
  hours: string
  imageLabel: string
}

export const diningVenues: DiningVenue[] = [
  {
    slug: 'main-restaurant',
    name: '[Main Restaurant]',
    cuisine: '[Cuisine type]',
    desc: '[Short venue description — 2 sentences of placeholder copy.]',
    hours: '[Open 7:00 AM – 11:00 PM]',
    imageLabel: 'Main Restaurant'
  },
  {
    slug: 'beach-grill',
    name: '[Beach Grill]',
    cuisine: '[Cuisine type]',
    desc: '[Short venue description — 2 sentences of placeholder copy.]',
    hours: '[Open 6:00 PM – 11:00 PM]',
    imageLabel: 'Beach Grill'
  },
  {
    slug: 'poolside-cafe',
    name: '[Poolside Café]',
    cuisine: '[Cuisine type]',
    desc: '[Short venue description — 2 sentences of placeholder copy.]',
    hours: '[Open 10:00 AM – 8:00 PM]',
    imageLabel: 'Poolside Café'
  }
]

export type DiningExperience = {
  title: string
  kicker: string
  tagline: string
  desc: string
  highlights: { label: string; icon: IconName }[]
  timing: string
  price: string
  image: string
  imageLabel: string
}

export const diningExperiences: DiningExperience[] = [
  {
    title: 'Candlelight Dinner',
    kicker: 'An evening for two',
    tagline: 'An intimate evening under the Andaman stars.',
    desc: 'Step onto our rooftop terrace as the night sky unfolds above you and your loved one. Our chef prepares a bespoke multi-course menu — fresh island seafood, flame-grilled delicacies and artisan desserts — while soft music and the glow of a hundred candles turn an ordinary evening into a memory that lasts forever.',
    highlights: [
      { label: 'Private Beachside Setup', icon: 'Palmtree' },
      { label: 'Multi-Course Gourmet Menu', icon: 'UtensilsCrossed' },
      { label: 'Handpicked Wine & Cocktails', icon: 'GlassWater' },
      { label: 'Live Soft Music', icon: 'Music' },
      { label: 'Personalized Flower Décor', icon: 'Flower2' },
      { label: 'Dedicated Private Butler', icon: 'Star' }
    ],
    timing: '7:00 PM – 10:30 PM · By reservation',
    price: 'from ₹4,500 / couple',
    image: '/dining/candlelight-dinner.jpg',
    imageLabel: 'Candlelight Dinner'
  },
  {
    title: 'Family Buffet Night',
    kicker: 'For the whole family',
    tagline: 'Where the whole family gathers, feasts and celebrates.',
    desc: 'Every evening, our open-air buffet brings families together over a lavish spread of Indian classics, Continental favourites and fresh Andaman seafood. Kids love the live counters and dessert station, while parents unwind with a curated selection of beverages. It\'s the highlight of every family\'s stay — hearty, joyful and unmissably delicious.',
    highlights: [
      { label: 'Lavish Multi-Cuisine Spread', icon: 'UtensilsCrossed' },
      { label: 'Live Cooking Stations', icon: 'Flame' },
      { label: 'Kids\' Dessert Counter', icon: 'Coffee' },
      { label: 'Fresh Local Seafood', icon: 'Fish' },
      { label: 'Family-Friendly Ambiance', icon: 'Users' },
      { label: 'Open-Air Seating', icon: 'Wind' }
    ],
    timing: '7:30 PM – 10:00 PM · Daily',
    price: 'from ₹1,200 / person',
    image: '/dining/family-buffet.jpeg',
    imageLabel: 'Family Buffet Night'
  }
]

// ── Amenities (Why stay with us) ──────────────────────────────────────────────
export const amenities: Amenity[] = [
  {
    label: 'Free Wi-Fi',
    icon: 'Wifi',
    blurb: 'Stay effortlessly connected across the property with complimentary high-speed internet.'
  },
  {
    label: 'In-House Restaurant',
    icon: 'UtensilsCrossed',
    blurb: 'Multi-cuisine dining just steps from your room, from sunrise breakfast to a late supper.'
  },
  {
    label: 'Buffet Breakfast',
    icon: 'Coffee',
    blurb: 'Begin each morning with a generous spread of fresh local and continental favourites.'
  },
  {
    label: 'Air Conditioned',
    icon: 'Snowflake',
    blurb: 'Cool, climate-controlled rooms that stay serene through the tropical island heat.'
  },
  {
    label: 'Luxury Beds',
    icon: 'BedDouble',
    blurb: 'Plush, premium bedding designed for deep, restful island nights.'
  },
  {
    label: 'Hot & Cold Water',
    icon: 'Droplets',
    blurb: 'Round-the-clock hot and cold running water in every spotless bathroom.'
  },
  {
    label: 'Power Backup',
    icon: 'Zap',
    blurb: 'Seamless power backup, so your stay is never interrupted for a moment.'
  },
  {
    label: 'CCTV Surveillance',
    icon: 'Video',
    blurb: 'Round-the-clock monitored security across the property for complete peace of mind.'
  }
]

// ── Testimonials ──────────────────────────────────────────────────────────────
export type Testimonial = { quote: string; name: string; detail: string; rating: number }

export const testimonials: Testimonial[] = [
  {
    quote:
      'The staff at this hotel were incredibly welcoming and helpful throughout our stay. The rooms were immaculate and very comfortable, and we loved the delicious breakfast each morning and the convenient location close to major attractions.',
    name: 'Wedh Prakash',
    detail: 'Google Review',
    rating: 5
  },
  {
    quote:
      'A good and hygienic hotel. Any issue you raise, the staff resolve it immediately. They also help guide you and make your whole trip comfortable.',
    name: 'Shweta Chourey',
    detail: 'Local Guide · 17 reviews',
    rating: 5
  },
  {
    quote:
      'From check-in to check-out we had no problem at all — we only wish we could have stayed longer. Well-behaved staff and never any trouble with anything.',
    name: 'Dr. M',
    detail: 'Luxury with a cheaper price',
    rating: 5
  },
  {
    quote:
      'I would recommend Island Tourister — the rooms are clean and the food is good, but most importantly the service and hospitality were great. Thank you, Island Tourister!',
    name: 'Alfredo A. Nongrum',
    detail: 'Great value · Family stay',
    rating: 5
  },
  {
    quote:
      'Staff was very polite and kind. They even prepared breakfast for us at 3 am as we had to leave early for our next spot. Overall a good hotel, and the connectivity is good too.',
    name: 'Krishna Mistry',
    detail: '10 reviews',
    rating: 5
  },
  {
    quote:
      'Islands Tourister at Premnagar, Andaman is one of the best locations — the rooms are neat and clean and the service from the staff is very nice. Thanks to Islands Tourister!',
    name: 'Yogesh Airao',
    detail: 'One of the best hotels',
    rating: 5
  }
]

// ── Gallery ───────────────────────────────────────────────────────────────────
export type GalleryCategory = 'Rooms' | 'Dining' | 'Hotel' | 'Experiences'
export type GalleryItem = {
  id: number
  label: string
  category: GalleryCategory
  aspect: string
  image: string
}

export const galleryCategories: GalleryCategory[] = ['Rooms', 'Dining', 'Hotel', 'Experiences']

export const galleryItems: GalleryItem[] = [
  // Rooms
  { id: 1, label: 'Super Deluxe Room', category: 'Rooms', aspect: '4:3', image: '/rooms/super-deluxe-room.jpeg' },
  { id: 2, label: 'Room Interior', category: 'Rooms', aspect: '4:5', image: '/gallery/hero/3.jpg' },
  { id: 3, label: 'Honeymoon Suite', category: 'Rooms', aspect: '4:3', image: '/rooms/honeymoon-suite.jpeg' },
  { id: 4, label: 'Deluxe Room', category: 'Rooms', aspect: '4:3', image: '/rooms/deluxe-room.jpg' },
  { id: 5, label: 'Standard Room', category: 'Rooms', aspect: '4:3', image: '/rooms/standard-room.jpeg' },
  { id: 6, label: 'Flower-Bed Setup, Room 209', category: 'Rooms', aspect: '4:5', image: '/gallery/hero/4.jpg' },

  // Dining
  { id: 7, label: 'Restaurant Buffet', category: 'Dining', aspect: '4:5', image: '/dining/family-buffet.jpeg' },
  { id: 8, label: 'Candlelight Dinner', category: 'Dining', aspect: '3:4', image: '/dining/candlelight-dinner.jpg' },
  { id: 9, label: 'Multi-Cuisine Dining', category: 'Dining', aspect: '16:9', image: '/dining/dining-banner.jpg' },

  // Hotel
  { id: 10, label: 'Reception Area', category: 'Hotel', aspect: '4:5', image: '/gallery/hero/2.jpg' },
  { id: 11, label: 'Corridor', category: 'Hotel', aspect: '4:5', image: '/gallery/hero/5.jpg' },
  { id: 12, label: 'Hotel Front', category: 'Hotel', aspect: '4:5', image: '/gallery/hero/front.jpg' },
  { id: 13, label: 'First Floor', category: 'Hotel', aspect: '4:5', image: '/gallery/hero/7.jpg' },

  // Experiences
  { id: 14, label: 'Scuba Diving at North Bay', category: 'Experiences', aspect: '4:3', image: '/experiences/scuba-diving.jpg' },
  { id: 15, label: 'Cellular Jail', category: 'Experiences', aspect: '3:4', image: '/experiences/cellular-jail.jpg' },
  { id: 16, label: 'Ross Island', category: 'Experiences', aspect: '16:9', image: '/experiences/ross-island.webp' },
  { id: 17, label: 'Samudrika Museum', category: 'Experiences', aspect: '4:3', image: '/experiences/samudrika-museum.jpg' },
  { id: 18, label: 'Sunset at Chidiya Tapu', category: 'Experiences', aspect: '4:3', image: '/experiences/chidiya-tapu.jpg' },
  { id: 19, label: "Corbyn's Cove Beach", category: 'Experiences', aspect: '3:2', image: '/experiences/corbyns-cove.jpg' }
]

// ── About values ──────────────────────────────────────────────────────────────
export type Value = { title: string; desc: string; icon: IconName }

export const values: Value[] = [
  {
    title: '[Warm Hospitality]',
    desc: '[Short value description — 1–2 sentences of placeholder copy.]',
    icon: 'HeartHandshake'
  },
  {
    title: '[Tasteful Comfort]',
    desc: '[Short value description — 1–2 sentences of placeholder copy.]',
    icon: 'Sparkles'
  },
  {
    title: '[Effortless Convenience]',
    desc: '[Short value description — 1–2 sentences of placeholder copy.]',
    icon: 'Plane'
  },
  {
    title: '[Memorable Adventures]',
    desc: '[Short value description — 1–2 sentences of placeholder copy.]',
    icon: 'Palmtree'
  }
]

// ── Contact details (placeholders) ──────────────────────────────────────────────
export const contactDetails = {
  address: 'Premnagar, Port Blair (Sri Vijaya Puram), Andaman & Nicobar Islands 744101',
  phone: '+91 70639 90194',
  email: 'islandstourister@gmail.com',
  hours: 'Reception open 24 / 7'
}

// Bookings are phone-only — every "Book Now" / "Reserve" CTA dials this number.
export const telHref = `tel:${contactDetails.phone.replace(/\s/g, '')}`

// Room type options for the enquiry form dropdown
export const roomTypeOptions = rooms.map((r) => r.name)
