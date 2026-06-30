'use client'

import React from 'react'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { Reveal } from './motion/Reveal'
import { diningExperiences, telHref } from '@/lib/data'

export default function DiningSection() {
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

      <div className="mx-auto max-w-content px-4 pb-28 pt-20 md:px-8 md:pb-36 md:pt-24">
        {/* Feature blocks — clean side-by-side, alternating sides */}
        <div className="flex flex-col gap-20 md:gap-28">
          {diningExperiences.map((exp, i) => {
            const textLeft = i % 2 === 0

            return (
              <div
                key={exp.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20"
              >
                {/* Image */}
                <Reveal
                  as="div"
                  from={textLeft ? 'right' : 'left'}
                  blur
                  once={false}
                  duration={1}
                  className={textLeft ? 'md:order-2' : 'md:order-1'}
                >
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft ring-1 ring-shadow/10">
                    <Image
                      src={exp.image}
                      alt={exp.imageLabel}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05] ${
                        i === 1 ? 'saturate-[0.9] brightness-[0.97]' : ''
                      }`}
                    />
                  </div>
                </Reveal>

                {/* Text — centered */}
                <Reveal
                  as="div"
                  from={textLeft ? 'left' : 'right'}
                  blur
                  once={false}
                  duration={1}
                  delay={0.1}
                  className={`px-2 text-center md:px-8 ${textLeft ? 'md:order-1' : 'md:order-2'}`}
                >
                  <p className="font-script text-[1.75rem] leading-none text-shoreline md:text-3xl">
                    {exp.kicker}
                  </p>

                  <h3 className="mt-3 font-serif text-[2rem] leading-tight text-shadow md:text-[2.5rem]">
                    {exp.title}
                  </h3>

                  <p className="mx-auto mt-5 max-w-md text-[15px] leading-[1.85] text-shadow/70">
                    {exp.desc}
                  </p>

                  <a
                    href={telHref}
                    className="focus-brand mt-8 inline-flex items-center gap-2 border border-shadow/70 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-shadow transition-colors duration-300 hover:bg-shadow hover:text-cream"
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
  )
}
