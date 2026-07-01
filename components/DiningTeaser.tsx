import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Reveal } from './motion/Reveal'
import Button from './Button'
import { diningExperiences, telHref } from '@/lib/data'

// A handful of crowd-pleaser dishes shown as a teaser
const menuHighlights = [
  { category: 'Starters', items: ['Chicken 65', 'Paneer Tikka Kabab', 'Tandoori Chicken', 'Crispy Prawn'] },
  { category: 'Main Course', items: ['Butter Chicken', 'Kadai Paneer', 'Prawn Curry', 'Mutton Rogan Josh'] },
  { category: 'Chinese', items: ['Chilli Chicken', 'Gobi Manchurian', 'Prawn Manchurian', 'Chilli Fish'] },
  { category: 'Biryani & Rice', items: ['Chicken Biryani', 'Prawn Biryani', 'Veg Biryani', 'Mutton Biryani'] },
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

      <div className="mx-auto max-w-content px-4 pb-8 pt-20 md:px-8 md:pt-24">
        {/* Signature experiences — first one only as a teaser */}
        <div className="mb-20 md:mb-28">
          {diningExperiences.slice(0, 1).map((exp) => (
            <div key={exp.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
              <Reveal as="div" from="right" blur once={false} duration={1} className="md:order-2">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft ring-1 ring-shadow/10">
                  <Image
                    src={exp.image}
                    alt={exp.imageLabel}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]"
                  />
                </div>
              </Reveal>
              <Reveal as="div" from="left" blur once={false} duration={1} delay={0.1} className="px-2 text-center md:order-1 md:px-8 md:text-left">
                <p className="font-script text-[1.75rem] leading-none text-shoreline md:text-3xl">{exp.kicker}</p>
                <h3 className="mt-3 font-serif text-[2rem] leading-tight text-shadow md:text-[2.5rem]">{exp.title}</h3>
                <p className="mx-auto mt-5 max-w-md text-[15px] leading-[1.85] text-shadow/70 md:mx-0">{exp.desc}</p>
                <a
                  href={telHref}
                  className="focus-brand mt-8 inline-flex items-center gap-2 border border-shadow/70 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-shadow transition-colors duration-300 hover:bg-shadow hover:text-cream"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call to Reserve
                </a>
              </Reveal>
            </div>
          ))}
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
        <Reveal as="div" from="up" blur once={false} className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-shadow/60">
            Breakfast, soups, tandoor, biryanis, breads, salads and more — see the complete menu
          </p>
          <Link
            href="/dining"
            className="group inline-flex items-center gap-2 font-medium text-ocean underline-offset-4 hover:underline"
          >
            Explore the full dining page
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
