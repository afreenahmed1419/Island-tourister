'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import { navLinks, contactDetails } from '@/lib/data'

const EASE = [0.65, 0.01, 0.05, 0.99] as const

// Floating ambient shapes (brand tones) — give the open menu a kinetic, living feel.
const blobs = [
  { cls: 'left-[-18%] top-[10%] h-72 w-72 bg-sage/25', dur: 9, x: [0, 40, 0], y: [0, -28, 0] },
  { cls: 'right-[-22%] top-[34%] h-80 w-80 bg-shoreline/20', dur: 11, x: [0, -34, 0], y: [0, 26, 0] },
  { cls: 'left-[12%] bottom-[6%] h-72 w-72 bg-ocean/30', dur: 10, x: [0, 28, 0], y: [0, -22, 0] }
]

const linkVariants = {
  hidden: { y: '130%', rotate: 8 },
  show: { y: 0, rotate: 0, transition: { duration: 0.75, ease: EASE } }
}

type Props = { open: boolean; onClose: () => void; isActive: (href: string) => boolean }

export default function MobileMenu({ open, onClose, isActive }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div key="mobile-menu" className="fixed inset-0 z-[60] overflow-hidden lg:hidden">
          {/* Layered backdrop reveal — two panels sweep in */}
          <motion.div
            className="absolute inset-0 bg-ocean"
            initial={{ x: '103%' }}
            animate={{ x: 0 }}
            exit={{ x: '103%' }}
            transition={{ duration: 0.5, ease: EASE }}
          />
          <motion.div
            className="absolute inset-0 bg-shadow"
            initial={{ x: '103%' }}
            animate={{ x: 0 }}
            exit={{ x: '103%' }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.08 }}
          />

          {/* Ambient floating shapes */}
          <div className="pointer-events-none absolute inset-0">
            {blobs.map((b, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full blur-3xl ${b.cls}`}
                animate={{ x: b.x, y: b.y, scale: [1, 1.15, 1] }}
                transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col px-6 pb-10 pt-4">
            {/* Top bar — logo + rotating close */}
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.28 } }}
              exit={{ opacity: 0 }}
            >
              <Image
                src="/logo.png"
                alt="Islands Tourister"
                width={150}
                height={64}
                className="h-11 w-auto brightness-0 invert"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="focus-brand flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-sage hover:bg-sage hover:text-shadow"
              >
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 315 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative block h-4 w-4"
                >
                  <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                </motion.span>
              </button>
            </motion.div>

            {/* Links — masked staggered reveal */}
            <motion.ul
              className="flex flex-1 flex-col justify-center gap-1"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.34 } } }}
            >
              {navLinks.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.div variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-baseline gap-4 py-1.5"
                    >
                      <span className="font-sans text-xs font-semibold tracking-[0.1em] text-sage/70">
                        0{i + 1}
                      </span>
                      <span
                        className={`font-serif text-[2.35rem] leading-tight transition-colors duration-300 group-hover:text-sage ${
                          isActive(link.href) ? 'text-sage' : 'text-cream'
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </motion.ul>

            {/* Footer — script accent + contact + socials */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6, ease: EASE } }}
              exit={{ opacity: 0 }}
              className="border-t border-cream/10 pt-6"
            >
              <p className="font-script text-3xl leading-none text-sage">Your Andaman Escape</p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="mt-3 block text-sm text-cream/70 transition-colors hover:text-cream"
              >
                {contactDetails.email}
              </a>
              <div className="mt-4 flex gap-3">
                {[Instagram, Facebook, Twitter].map((Ico, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-sage hover:text-shadow"
                  >
                    <Ico className="h-[17px] w-[17px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
