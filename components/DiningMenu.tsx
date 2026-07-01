'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuTabs } from '@/lib/menuData'

const tagConfig: Record<string, { dot: string; badge: string; label: string }> = {
  veg:       { dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', label: 'Veg' },
  'non-veg': { dot: 'bg-rose-500',    badge: 'bg-rose-50 text-rose-700 border-rose-200',         label: 'Non Veg' },
}

export default function DiningMenu() {
  const [activeTab, setActiveTab] = useState(menuTabs[0].id)
  const currentTab = menuTabs.find((t) => t.id === activeTab)!

  return (
    <div>
      {/* ── Tab bar ─────────────────────────────────────────────────── */}
      <div className="sticky top-[68px] z-30 bg-shadow shadow-md">
        {/* Mobile: wrap to 2 rows so all 9 tabs are visible */}
        <div className="flex flex-wrap justify-center gap-1.5 px-3 py-3 md:hidden">
          {menuTabs.map((tab) => {
            const active = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                  active ? 'bg-cream text-shadow' : 'text-cream/55 hover:bg-white/10 hover:text-cream'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="tab-pill-mobile"
                    className="absolute inset-0 rounded-full bg-cream"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Desktop: single scrollable row, centred */}
        <div className="no-scrollbar hidden overflow-x-auto md:flex md:justify-center md:px-8 md:py-3">
          {menuTabs.map((tab) => {
            const active = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative shrink-0 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                  active ? 'bg-cream text-shadow' : 'text-cream/55 hover:bg-white/10 hover:text-cream'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="tab-pill-desktop"
                    className="absolute inset-0 rounded-full bg-cream"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Tab content ──────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto max-w-content px-4 py-8 md:px-8 md:py-12"
        >
          <div className="space-y-10 md:space-y-12">
            {currentTab.sections.map((section) => {
              const tag = section.tag ? tagConfig[section.tag] : null
              return (
                <div key={section.heading}>
                  {/* Section header */}
                  <div className="mb-4 flex flex-wrap items-center gap-2 md:mb-6 md:gap-3">
                    {tag && (
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${tag.badge}`}>
                        <span className={`h-1.5 w-1.5 rounded-sm ${tag.dot}`} />
                        {tag.label}
                      </span>
                    )}
                    <h3 className="font-serif text-xl text-shadow md:text-2xl lg:text-3xl">
                      {section.heading}
                    </h3>
                    <div className="h-px flex-1 bg-shadow/10" />
                  </div>

                  {/* Items grid — 2 col on mobile, 3 on desktop */}
                  <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="group flex flex-col gap-1.5 rounded-xl border border-shadow/8 bg-white p-3 transition-all duration-200 hover:border-sage/40 hover:bg-sage/5 md:flex-row md:items-center md:justify-between md:gap-4 md:px-5 md:py-4"
                      >
                        <span className="text-[12px] font-medium leading-snug text-shadow/85 group-hover:text-shadow md:text-[14px]">
                          {item.name}
                        </span>
                        <span className="shrink-0 self-start rounded-md bg-shadow/6 px-2 py-1 font-serif text-[11px] font-semibold text-ocean md:rounded-lg md:px-3 md:py-1.5 md:text-[13px]">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
