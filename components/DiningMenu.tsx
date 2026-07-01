'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuTabs } from '@/lib/menuData'

const tagConfig: Record<string, { dot: string; badge: string; label: string }> = {
  veg:     { dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', label: 'Veg' },
  'non-veg': { dot: 'bg-rose-500',  badge: 'bg-rose-50 text-rose-700 border-rose-200',         label: 'Non Veg' },
}

export default function DiningMenu() {
  const [activeTab, setActiveTab] = useState(menuTabs[0].id)
  const currentTab = menuTabs.find((t) => t.id === activeTab)!

  return (
    <div>
      {/* ── Tab bar ─────────────────────────────────────────────────── */}
      <div className="sticky top-[68px] z-30 bg-shadow shadow-md">
        <div className="no-scrollbar mx-auto flex max-w-content gap-1 overflow-x-auto px-4 py-3 md:gap-2 md:px-8">
          {menuTabs.map((tab) => {
            const active = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 md:px-5 md:text-xs ${
                  active
                    ? 'bg-cream text-shadow shadow-sm'
                    : 'text-cream/60 hover:bg-white/10 hover:text-cream'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="tab-pill"
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
          className="mx-auto max-w-content px-4 py-12 md:px-8 md:py-16"
        >
          <div className="space-y-12">
            {currentTab.sections.map((section) => {
              const tag = section.tag ? tagConfig[section.tag] : null
              return (
                <div key={section.heading}>
                  {/* Section header */}
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    {tag && (
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${tag.badge}`}>
                        <span className={`h-2 w-2 rounded-sm ${tag.dot}`} />
                        {tag.label}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl text-shadow md:text-3xl">
                      {section.heading}
                    </h3>
                    <div className="h-px flex-1 bg-shadow/10" />
                  </div>

                  {/* Items — card grid */}
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-shadow/8 bg-white px-5 py-4 transition-all duration-200 hover:border-sage/40 hover:bg-sage/5 hover:shadow-sm"
                      >
                        <span className="text-[14px] font-medium leading-snug text-shadow/85 transition-colors duration-200 group-hover:text-shadow">
                          {item.name}
                        </span>
                        <span className="shrink-0 rounded-lg bg-shadow/6 px-3 py-1.5 font-serif text-[13px] font-semibold text-ocean">
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
