import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react'
import EnquiryForm from '@/components/EnquiryForm'
import Button from '@/components/Button'
import { Reveal } from '@/components/motion/Reveal'
import { contactDetails } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Islands Tourister — book your stay, ask a question, or plan your Andaman holiday. We reply within 24 hours.'
}

const details = [
  {
    icon: MapPin,
    label: 'Address',
    value: contactDetails.address,
    href: 'https://www.google.com/maps/dir/?api=1&destination=11.6726877,92.723769'
  },
  { icon: Phone, label: 'Phone', value: contactDetails.phone, href: `tel:${contactDetails.phone}` },
  { icon: Mail, label: 'Email', value: contactDetails.email, href: `mailto:${contactDetails.email}` },
  { icon: Clock, label: 'Front Desk', value: contactDetails.hours }
]

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' }
]

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex h-[58vh] min-h-[420px] items-center justify-center overflow-hidden">
        <Image src="/gallery/hero/2.jpg" alt="Islands Tourister reception" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/35" />
        <div className="relative z-10 flex items-center justify-center px-4">
          <div className="flex max-w-xl flex-col items-center rounded-3xl border border-white/25 bg-white/10 px-8 py-10 text-center shadow-2xl backdrop-blur-2xl md:px-14 md:py-12">
            <Reveal as="span" from="up" once={false} className="font-script text-4xl text-[#B7E0C9] [text-shadow:0_1px_12px_rgba(0,0,0,0.6)] md:text-5xl">
              Get in Touch
            </Reveal>
            <Reveal as="h1" from="up" blur delay={0.08} once={false} className="mt-2 font-serif text-5xl text-cream [text-shadow:0_2px_22px_rgba(0,0,0,0.55)] md:text-6xl">
              Contact Us
            </Reveal>
            <Reveal as="p" from="up" delay={0.16} once={false} className="mx-auto mt-5 max-w-md leading-relaxed text-cream/95 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
              We&apos;d love to help plan your island stay — reach out and we&apos;ll reply within 24 hours.
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Form + details ───────────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-content gap-12 px-4 md:px-8 lg:grid-cols-5 lg:gap-16">
          {/* Form */}
          <Reveal as="div" from="up" blur once={false} className="lg:col-span-3">
            <span className="eyebrow">Booking Enquiry</span>
            <h2 className="mt-3 font-serif text-3xl text-shadow md:text-4xl">Plan Your Stay</h2>
            <p className="mt-3 leading-relaxed text-shadow/70">
              Share your dates and preferences, and our team will get back to you with availability
              and the best rates.
            </p>
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-shadow/10 md:p-8">
              <EnquiryForm />
            </div>
          </Reveal>

          {/* Details */}
          <Reveal as="div" from="up" blur delay={0.1} once={false} className="lg:col-span-2">
            <span className="eyebrow">Reach Us</span>
            <h2 className="mt-3 font-serif text-3xl text-shadow md:text-4xl">Here to Help</h2>

            <ul className="mt-8 space-y-4">
              {details.map(({ icon: Ico, label, value, href }) => {
                const inner = (
                  <div className="flex items-start gap-4 rounded-2xl border border-shadow/10 bg-white/60 p-4 transition-colors duration-300 group-hover:border-sage/50 group-hover:bg-white">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/12 text-ocean transition-colors duration-300 group-hover:bg-sage group-hover:text-cream">
                      <Ico className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-shadow/50">
                        {label}
                      </span>
                      <span className="mt-1 block leading-relaxed text-shadow/85">{value}</span>
                    </div>
                  </div>
                )
                return (
                  <li key={label} className="group">
                    {href ? (
                      <a href={href} className="focus-brand block rounded-2xl">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Socials */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-shadow/50">Follow Along</span>
              <div className="mt-3 flex gap-3">
                {socials.map(({ icon: Ico, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="focus-brand inline-flex h-11 w-11 items-center justify-center rounded-full border border-shadow/15 text-ocean transition-colors hover:border-sage hover:bg-sage hover:text-cream"
                  >
                    <Ico className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick call */}
            <Button href={`tel:${contactDetails.phone}`} variant="shadow" className="group mt-8 w-full justify-center">
              Call the Front Desk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ── Map ──────────────────────────────────────────────────────────── */}
      <section className="bg-sand/25 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-content px-4 md:px-8">
          <Reveal as="div" from="up" blur once={false} className="text-center">
            <span className="eyebrow justify-center">Find Us</span>
            <h2 className="mt-3 font-serif text-3xl text-shadow md:text-4xl">Minutes From the Airport</h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-shadow/70">
              Tucked away in Premnagar, Port Blair — a short drive from Veer Savarkar International
              Airport and the ferry harbour.
            </p>
          </Reveal>
          <div className="mt-10 aspect-[21/9] overflow-hidden rounded-2xl shadow-soft ring-1 ring-shadow/10">
            <iframe
              title="Islands Tourister location"
              src="https://maps.google.com/maps?q=11.6726877,92.723769&z=15&hl=en&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
