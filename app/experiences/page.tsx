import React from 'react'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import { ExperienceCard } from '@/components/Cards'
import { experiences } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Experiences',
  description: '[Experiences page description] — Curated island adventures with Islands Tourister.'
}

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Things to Do"
        title="Island Experiences"
        subtitle="[Short intro line for the experiences page.]"
        imageLabel="Experiences Banner"
      />

      {/* Experiences grid */}
      <section className="mx-auto max-w-content px-4 py-20 md:px-8 md:py-28">
        <AnimatedSection stagger as="div" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((ex) => (
            <ExperienceCard key={ex.slug} experience={ex} />
          ))}
        </AnimatedSection>
      </section>

      {/* CTA — custom packages */}
      <section className="bg-sand/30 py-20 md:py-24">
        <AnimatedSection className="mx-auto max-w-content px-4 text-center md:px-8">
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow="Tailored for You"
            title="Looking for Something Special?"
            subtitle="[Short copy inviting guests to ask for custom island packages.]"
          />
          <Button href="/contact" className="mt-8">
            Contact Us for Custom Packages
          </Button>
        </AnimatedSection>
      </section>
    </>
  )
}
