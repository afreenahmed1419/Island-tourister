import React from 'react'
import Image from 'next/image'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { Reveal } from './motion/Reveal'
import BorderGlow from './ui/BorderGlow'
import { rooms } from '@/lib/data'

export default function RoomsShowcase() {
  return (
    <div className="relative z-10 mx-auto max-w-content px-4 md:px-8">
      <SectionHeading
        align="center"
        eyebrow="Accommodation"
        title="Rooms & Suites"
        subtitle="Four distinct stays — from easy comfort to a romantic island retreat."
      />

      <div className="mt-14 space-y-8 md:mt-16 md:space-y-10">
        {rooms.map((room, i) => (
          <Reveal key={room.slug} from="up" blur duration={1.2} delay={i * 0.14} once={false}>
            <BorderGlow
              backgroundColor="#E9D8C4"
              glowColor="188 38 26"
              colors={['#264D52', '#496A49', '#5A4233']}
              borderRadius={24}
              glowRadius={28}
              glowIntensity={1.15}
              coneSpread={28}
              edgeSensitivity={28}
              className="shadow-soft"
            >
              <div className="p-6 md:p-9">
              {/* Centered title + accent */}
              <h3 className="text-center font-serif text-2xl text-shadow md:text-3xl">{room.name}</h3>
              <span className="mx-auto mt-3 block h-px w-12 bg-shoreline" />

              <div className="mt-7 grid items-center gap-8 md:grid-cols-[1.3fr_1fr] md:gap-10">
                {/* Image — shown first on mobile (order-first), second on desktop (md:order-last) */}
                <div className="group relative order-first aspect-[4/3] overflow-hidden rounded-2xl shadow-soft md:order-last">
                  <Image
                    src={room.image}
                    alt={room.imageLabel}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Description + amenities + CTA */}
                <div>
                  <p className="text-center leading-relaxed text-shadow/75 md:text-left">
                    {room.description}
                  </p>

                  <div className="mt-7 grid grid-cols-4 gap-3">
                    {room.amenities.map(({ label, icon }) => (
                      <div key={label} className="flex flex-col items-center gap-2 text-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-shadow/15 bg-cream/60 text-ocean">
                          <Icon name={icon} className="h-5 w-5" strokeWidth={1.5} />
                        </span>
                        <span className="text-[11px] leading-tight text-shadow/70">{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-5 md:justify-start">
                    <span className="font-serif text-lg text-ocean">
                      {room.priceFrom.replace('from ', '')}
                    </span>
                    <a
                      href="/contact"
                      className="focus-brand inline-flex rounded-lg bg-shadow px-7 py-3 text-xs font-medium uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-ocean"
                    >
                      Book Now
                    </a>
                  </div>
                </div>

              </div>
              </div>
            </BorderGlow>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
