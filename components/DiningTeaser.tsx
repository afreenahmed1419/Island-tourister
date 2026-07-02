import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Reveal } from './motion/Reveal'
import { telHref } from '@/lib/data'

// A handful of crowd-pleaser dishes shown as a teaser
const menuHighlights = [
  { category: 'Starters', items: ['Chicken 65', 'Paneer Tikka Kabab', 'Tandoori Chicken', 'Crispy Prawn'] },
  { category: 'Main Course', items: ['Butter Chicken', 'Kadai Paneer', 'Prawn Curry', 'Mutton Rogan Josh'] },
  { category: 'Chinese', items: ['Chilli Chicken', 'Gobi Manchurian', 'Prawn Manchurian', 'Chilli Fish'] },
  { category: 'Biryani & Rice', items: ['Chicken Biryani', 'Prawn Biryani', 'Veg Biryani', 'Mutton Biryani'] },
]

const specialExperiences = [
  {
    label: 'Candlelight Dinner',
    kicker: 'An evening for two',
    tagline: 'Intimate terrace dining under the Andaman stars.',
    timing: '7:00 PM – 10:30 PM',
    note: 'By reservation',
    image: '/dining/candlelight-dinner.jpg',
  },
  {
    label: 'Family Buffet Night',
    kicker: 'For the whole family',
    tagline: 'A lavish multi-cuisine spread — every evening.',
    timing: '7:30 PM – 10:00 PM',
    note: 'Daily',
    image: '/dining/family-buffet.jpeg',
  },
]

export default function DiningTeaser() {
  return (
    <section id="dining" className="scroll-mt-24 overflow-hidden bg-cream">
      {/* Banner image with heading overlay */}
      <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[440px]">
        <Image
          src="/dining/dining-banner.jpg"
          alt="Dining at Islands Tourister"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <Reveal
            as="h2"
            blur
            once={false}
            className="rounded-2xl border border-white/30 bg-white/55 px-5 py-3.5 font-script text-[2.5rem] leading-none text-shadow backdrop-blur-sm md:px-14 md:py-7 md:text-7xl lg:text-8xl"
          >
            Dining at Islands Tourister
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-content px-4 pb-8 pt-16 md:px-8 md:pt-20">
        {/* Special experiences — two minimal cards */}
        <div className="mb-16 md:mb-24">
          <Reveal as="div" from="up" blur once={false} className="mb-8 text-center">
            <span className="eyebrow justify-center">Special Experiences</span>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {specialExperiences.map((exp) => (
              <Reveal key={exp.label} as="div" from="up" blur once={false}>
                <div className="group relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-shadow/10">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={exp.image}
                      alt={exp.label}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="font-script text-lg leading-none text-cream [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">{exp.kicker}</p>
                    <h3 className="mt-1 font-serif text-xl text-cream md:text-2xl">{exp.label}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-cream/75">{exp.tagline}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-cream/55">
                        {exp.timing} · {exp.note}
                      </span>
                      <a
                        href={telHref}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-cream backdrop-blur-sm transition-colors duration-200 hover:bg-sage hover:text-white"
                      >
                        <Phone className="h-3 w-3" />
                        Call to Book
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Menu highlights grid */}
        <Reveal as="div" from="up" blur once={false} className="text-center">
          <span className="eyebrow justify-center">À La Carte Menu</span>
          <h2 className="mt-3 font-serif text-3xl text-shadow md:text-4xl">From Our Kitchen</h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-shadow/65">
            A taste of what awaits — Indian, Chinese, Tandoor, fresh seafood and more.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuHighlights.map((col) => (
            <Reveal key={col.category} as="div" from="up" blur once={false}>
              <div className="rounded-2xl border border-shadow/10 bg-white/60 p-6 shadow-soft">
                <h3 className="mb-4 border-b border-shadow/10 pb-3 font-serif text-lg text-shadow">
                  {col.category}
                </h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-shadow/70">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-sage/60" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-medium text-ocean/70">+ many more dishes</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA to full dining page */}
        <Reveal as="div" from="up" blur once={false} className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-shadow/60">
            Breakfast, soups, tandoor, biryanis, breads, salads and more — explore the complete à la carte menu.
          </p>
          <Link
            href="/dining"
            className="group inline-flex items-center gap-2 font-medium text-ocean underline-offset-4 hover:underline"
          >
            Explore the complete dining experience
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
