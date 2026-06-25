# Islands Tourister

A multi-page luxury hotel website for **Islands Tourister**, a premium tropical resort in the
Andaman & Nicobar Islands, India. _Tagline: "Luxury redefined!"_

Built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**,
**Framer Motion**, and **lucide-react**.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # production build
npm start        # serve the production build
```

## Editing content

All copy is placeholder text in `[square brackets]` and all images are labeled
placeholder boxes — drop in real content later. Structured content lives in one place:

- **`lib/data.ts`** — rooms, experiences, dining venues, amenities, testimonials,
  gallery items, nav links, contact details, etc. (typed arrays/objects)
- **`lib/icons.ts`** — icon registry (string name → Lucide component)

## Structure

- `app/` — the 7 pages (Home, Rooms, Dining, Experiences, Gallery, About, Contact)
  plus `layout.tsx` (fonts + nav/footer) and `template.tsx` (page transitions).
- `components/` — shared UI: `Navbar`, `Footer`, `Button`, `SectionHeading`,
  `ImagePlaceholder`, `AnimatedSection`, `Cards`, `PageHeader`, `Hero`, `Lightbox`,
  `GalleryGrid`, `EnquiryForm`, `Icon`.
- `styles/globals.css` — Tailwind layers + brand CSS variables.

## Design system

Palette ("Waves"): `sage`, `shoreline`, `shadow`, `ocean`, `sand`, `cream`.
Headings use Playfair Display; body uses Lato (both via `next/font/google`).
