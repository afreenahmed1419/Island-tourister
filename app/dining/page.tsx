import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Clock, UtensilsCrossed, Dot } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import Button from '@/components/Button'
import DiningMenu from '@/components/DiningMenu'
import { diningExperiences, telHref, contactDetails } from '@/lib/data'
import { restaurantTimings } from '@/lib/menuData'

export const metadata: Metadata = {
  title: 'Dining',
  description:
    'Savour fresh island flavours at Islands Tourister — a full à la carte menu spanning Indian, Chinese, Tandoor and seafood, served across breakfast, lunch and dinner.'
}

export default function DiningPage() {
  return (
    <>
      {/* ── Hero — full viewport with info strip baked in ─────────────────── */}
      <section className="relative flex h-screen min-h-[600px] flex-col overflow-hidden">
        <Image
          src="/dining/dining-restaurant.jpg"
          alt="Dining at Islands Tourister"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Centre: frosted heading panel */}
        <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-8 text-center">
          <div className="flex flex-col items-center rounded-2xl border border-white/25 bg-white/15 px-6 py-8 shadow-2xl backdrop-blur-md sm:rounded-3xl md:px-16 md:py-14">
            <Reveal as="span" from="up" once={false} className="font-script text-3xl text-[#B7E0C9] [text-shadow:0_1px_12px_rgba(0,0,0,0.6)] md:text-5xl">
              Savour the Island
            </Reveal>
            <Reveal
              as="h1"
              from="up"
              blur
              delay={0.08}
              once={false}
              className="mt-2 font-serif text-4xl leading-tight text-cream [text-shadow:0_2px_22px_rgba(0,0,0,0.55)] md:text-6xl lg:text-7xl"
            >
              Dining at Islands Tourister
            </Reveal>
            <Reveal
              as="p"
              from="up"
              delay={0.16}
              once={false}
              className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-cream/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] md:max-w-lg md:text-base"
            >
              Fresh flavours, warm hospitality and a full menu — from morning chai to a candlelit dinner.
            </Reveal>
            <Reveal from="up" delay={0.24} once={false} className="mt-6 md:mt-8">
              <Button href={telHref} variant="primary" size="md">
                <Phone className="h-3.5 w-3.5" />
                Call to Reserve
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Bottom: continuous marquee timings strip */}
        <div className="relative z-10 overflow-hidden border-t border-white/20 bg-black/50 py-3 backdrop-blur-sm">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black/50 to-transparent" />

          <div
            className="flex w-max animate-marquee items-center gap-0"
            style={{ animation: 'marquee 28s linear infinite' }}
          >
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex items-center">
                {/* Restaurant label */}
                <div className="flex shrink-0 items-center gap-2 px-8">
                  <UtensilsCrossed className="h-3.5 w-3.5 text-sage" strokeWidth={1.5} />
                  <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-sage">
                    Restaurant · 1st Floor
                  </span>
                </div>
                <Dot className="h-4 w-4 shrink-0 text-white/25" />
                {/* Timings */}
                {restaurantTimings.map((t, i) => (
                  <div key={t.label} className="flex shrink-0 items-center">
                    <div className="flex items-center gap-2 px-8">
                      <Clock className="h-3.5 w-3.5 text-cream/60" strokeWidth={1.5} />
                      <span className="whitespace-nowrap text-[11px] text-cream/80">
                        <span className="font-semibold text-cream">{t.label}</span>{' '}{t.time}
                      </span>
                    </div>
                    {i < restaurantTimings.length - 1 && (
                      <Dot className="h-4 w-4 shrink-0 text-white/25" />
                    )}
                  </div>
                ))}
                <Dot className="h-4 w-4 shrink-0 text-white/25" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Signature dining experiences ─────────────────────────────────── */}
      <section className="bg-cream pt-16 md:pt-24">
        <div className="mx-auto max-w-content px-4 md:px-8">
          <Reveal as="div" from="up" blur once={false} className="text-center">
            <span className="eyebrow justify-center">Signature Experiences</span>
            <h2 className="mt-3 font-serif text-3xl text-shadow md:text-4xl">Special Dining Events</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-shadow/70">
              Beyond the menu — memorable dining moments curated just for you.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-24">
            {diningExperiences.map((exp, i) => {
              const textLeft = i % 2 === 0
              return (
                <div
                  key={exp.title}
                  className="grid items-center gap-8 md:grid-cols-2 md:gap-16 lg:gap-20"
                >
                  {/* Image — always on top on mobile */}
                  <Reveal
                    as="div"
                    from={textLeft ? 'right' : 'left'}
                    blur
                    once={false}
                    duration={1}
                    className={`order-first ${textLeft ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-soft ring-1 ring-shadow/10">
                      <Image
                        src={exp.image}
                        alt={exp.imageLabel}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                  </Reveal>

                  {/* Text */}
                  <Reveal
                    as="div"
                    from={textLeft ? 'left' : 'right'}
                    blur
                    once={false}
                    duration={1}
                    delay={0.1}
                    className={`px-1 text-center md:px-8 ${textLeft ? 'md:order-1' : 'md:order-2'}`}
                  >
                    <p className="font-script text-2xl leading-none text-shoreline md:text-3xl">
                      {exp.kicker}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl leading-tight text-shadow md:text-[2.5rem]">
                      {exp.title}
                    </h3>
                    <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-shadow/70 md:text-[15px] md:leading-[1.85]">
                      {exp.desc}
                    </p>
                    <a
                      href={telHref}
                      className="focus-brand mt-6 inline-flex items-center gap-2 border border-shadow/70 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-shadow transition-colors duration-300 hover:bg-shadow hover:text-cream md:mt-8 md:px-9 md:py-3.5"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Call to Reserve
                    </a>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Full menu ────────────────────────────────────────────────────── */}
      <section className="mt-16 border-t border-shadow/10 bg-cream md:mt-24">
        <div className="mx-auto max-w-content px-4 pb-4 pt-12 text-center md:px-8 md:pt-16">
          <Reveal as="span" from="up" once={false} className="eyebrow justify-center">
            À La Carte
          </Reveal>
          <Reveal as="h2" from="up" blur delay={0.06} once={false} className="mt-3 font-serif text-3xl text-shadow md:text-4xl">
            Our Full Menu
          </Reveal>
          <Reveal as="p" from="up" delay={0.12} once={false} className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-shadow/65 md:text-base">
            Browse our complete menu — Indian, Chinese, Tandoor, fresh seafood, breads, rice and more.
          </Reveal>
        </div>

        <DiningMenu />

        {/* Bottom CTA */}
        <div className="border-t border-shadow/10 bg-sand/30 px-4 py-10 text-center md:py-14">
          <p className="font-serif text-lg text-shadow md:text-2xl">
            Ready to dine? Call ahead and we&apos;ll have your table ready.
          </p>
          <div className="mt-5">
            <Button href={telHref} variant="shadow" size="lg">
              <Phone className="h-4 w-4" />
              {contactDetails.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
