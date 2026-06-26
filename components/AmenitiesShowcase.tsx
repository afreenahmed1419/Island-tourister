import React from 'react'
import Image from 'next/image'
import Icon from './Icon'
import { Reveal } from './motion/Reveal'
import AmenitiesStack from './AmenitiesStack'
import { amenities } from '@/lib/data'

export default function AmenitiesShowcase() {
  return (
    <section className="bg-cream pb-24 md:pb-32">
      {/* Intro banner — image bg + centered title */}
      <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[440px]">
        <Image
          src="/amenities-banner.jpg"
          alt="A lovingly prepared room at Islands Tourister"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/50" />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <Reveal
            as="h2"
            blur
            className="font-script text-[3.5rem] leading-none text-shadow [text-shadow:0_1px_16px_rgba(247,244,236,0.85)] md:text-7xl lg:text-8xl"
          >
            Comfort in Every Detail
          </Reveal>
        </div>
      </div>

      {/* Stacking cards — top 5 amenities (brand colours) */}
      <div className="mx-auto max-w-content px-4 pt-16 md:px-8 md:pt-24">
        <AmenitiesStack />
      </div>

      {/* Checkerboard grid of facilities — alternating cream tones */}
      <div className="mx-auto mt-2 max-w-content px-4 md:px-8">
        <Reveal as="p" blur className="mx-auto mb-10 max-w-2xl text-center font-serif text-xl leading-relaxed text-shadow/70 md:text-2xl">
          Thoughtful comforts and modern essentials — everything you need for an easy, restful
          island stay.
        </Reveal>
        <Reveal
          as="div"
          className="grid grid-cols-2 overflow-hidden rounded-2xl shadow-soft ring-1 ring-shadow/10 sm:grid-cols-4"
        >
          {amenities.map((a, i) => {
            const darkAt2 = (Math.floor(i / 2) + (i % 2)) % 2 === 1
            const darkAt4 = (Math.floor(i / 4) + (i % 4)) % 2 === 1
            return (
              <div
                key={a.label}
                className={`group flex aspect-square flex-col items-center justify-center gap-3 px-3 text-center transition-colors duration-300 ${
                  darkAt2 ? 'bg-[#ECE3D4] hover:bg-[#E3D7C2]' : 'bg-cream hover:bg-[#F1ECE1]'
                } ${
                  darkAt4 ? 'sm:bg-[#ECE3D4] sm:hover:bg-[#E3D7C2]' : 'sm:bg-cream sm:hover:bg-[#F1ECE1]'
                }`}
              >
                <Icon
                  name={a.icon}
                  className="h-7 w-7 text-shadow transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium text-shadow/85">{a.label}</span>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
