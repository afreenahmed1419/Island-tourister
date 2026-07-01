'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuTabs } from '@/lib/menuData'

const tagDot: Record<string, string> = {
  'veg': 'bg-emerald-500',
  'non-veg': 'bg-rose-500',
}

const tagLabel: Record<string, string> = {
  'veg': 'Veg',
  'non-veg': 'Non Veg',
}

export default function DiningMenu() {
  const [activeTab, setActiveTab] = useState(menuTabs[0].id)
  const scrollRef = useRef<HTMLDivElement>(null)

  const currentTab = menuTabs.find((t) => t.id === activeTab)!

  return (
    <div>
      {/* ── Tab bar ────────────────────────────────────────────────── */}
      <div className="sticky top-[68px] z-30 border-b border-shadow/10 bg-cream/95 backdrop-blur-sm">
        <div
          ref={scrollRef}
          className="no-scrollbar mx-auto flex max-w-content gap-0 overflow-x-auto px-4 md:px-8"
        >
          {menuTabs.map((tab) => {
            const active = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative shrink-0 px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 md:px-6 md:text-xs ${
                  active ? 'text-shadow' : 'text-shadow/45 hover:text-shadow/75'
                }`}
              >
                {tab.label}
                {active && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-shadow"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Tab content ────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto max-w-content px-4 py-14 md:px-8 md:py-16"
        >
          <div className="space-y-14">
            {currentTab.sections.map((section) => (
              <div key={section.heading}>
                {/* Section header */}
                <div className="mb-6 flex items-center gap-4">
                  {section.tag && (
                    <span
                      className={`inline-block h-2.5 w-2.5 shrink-0 rounded-sm ${tagDot[section.tag]}`}
                      title={tagLabel[section.tag]}
                    />
                  )}
                  <h3 className="font-serif text-xl text-shadow md:text-2xl">
                    {section.heading}
                  </h3>
                  <div className="h-px flex-1 bg-shadow/10" />
                  {section.tag && (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-shadow/40">
                      {tagLabel[section.tag]}
                    </span>
                  )}
                </div>

                {/* Items grid */}
                <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-baseline justify-between border-b border-shadow/8 py-3 transition-colors duration-200 hover:border-sage/30"
                    >
                      <span className="pr-4 text-sm leading-snug text-shadow/80 transition-colors duration-200 group-hover:text-shadow md:text-[15px]">
                        {item.name}
                      </span>
                      <span className="shrink-0 font-serif text-sm text-ocean md:text-[15px]">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
