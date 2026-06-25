'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from './Button'
import Marquee from './Marquee'
import { Component as EtherealShadow } from './ui/etheral-shadow'

const EASE = [0.22, 1, 0.36, 1] as const

// Soft fade-up; pass a delay via `custom`. Replays each time the section re-enters view.
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay: d } })
}

export default function WelcomeIntro() {
  return (
    <section className="relative overflow-hidden bg-[#F0E7D9]">
      {/* Ethereal animated shadow background */}
      <EtherealShadow
        className="pointer-events-none"
        style={{ position: 'absolute', inset: 0 }}
        color="rgba(91, 62, 38, 0.40)"
        animation={{ scale: 80, speed: 45 }}
        noise={{ opacity: 0.2, scale: 1.2 }}
        sizing="fill"
      />
      <div className="relative z-10 mx-auto grid max-w-content items-center gap-14 px-6 py-28 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:px-12 md:py-40">
        {/* Welcome image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="md:order-2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-soft">
            <Image
              src="/welcome/welcome-collage.jpg"
              alt="Islands Tourister"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text — creative layered, masked-reveal headline */}
        <div className="flex flex-col md:order-1">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="flex items-center gap-3"
          >
            <span aria-hidden className="h-px w-8 bg-ocean" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ocean">
              Port Blair · Andaman Islands
            </span>
          </motion.div>

          {/* Layered headline */}
          <h2 className="mt-5 font-serif text-shadow">
            <motion.span
              variants={fadeUp}
              custom={0.08}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="block font-script text-[2.4rem] leading-none text-ocean md:text-[2.9rem]"
            >
              Welcome to
            </motion.span>
            <motion.span
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="mt-1 block text-[2.6rem] font-medium leading-[1.05] md:text-[3.6rem]"
            >
              Islands <span className="italic text-shadow">Tourister</span>
            </motion.span>
          </h2>

          {/* Animated accent underline */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.36 }}
            className="mt-6 block h-[2px] w-28 origin-left bg-shoreline/80"
          />

          {/* Body */}
          <motion.p
            variants={fadeUp}
            custom={0.52}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="mt-7 max-w-md leading-relaxed text-shadow/80"
          >
            Tucked just minutes from the airport in the heart of the Andamans, we&apos;re a serene
            retreat where modern comfort meets the natural beauty of island living — and where warm
            hospitality makes every stay feel like home.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            custom={0.62}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="mt-8 self-start"
          >
            <Button href="/about" variant="shadow" size="md" className="group">
              Our Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Minimal text marquee at the end of the section */}
      <div className="relative z-10">
        <Marquee
          items={[
            'Rooms & Suites',
            'Luxury Redefined',
            'Wake Up to Paradise',
            'Island Comfort',
            'Your Andaman Escape'
          ]}
          speed={38}
          className="py-6 text-shadow/90"
        />
      </div>
    </section>
  )
}
