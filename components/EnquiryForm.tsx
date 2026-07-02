'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from './Button'

type Fields = {
  name: string
  email: string
  message: string
}

const empty: Fields = {
  name: '',
  email: '',
  message: ''
}

type Errors = Partial<Record<keyof Fields, string>>

const labelCls = 'mb-1.5 block text-sm font-medium text-shadow'
const inputCls =
  'w-full rounded-xl border border-shadow/15 bg-white px-4 py-3 text-shadow placeholder:text-shadow/40 focus-brand'

/** Client-side general enquiry form — for questions and messages only. No backend — logs to console + shows a success message. Bookings are phone-only; see the "Call to Book" CTA elsewhere on the page. */
export default function EnquiryForm() {
  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function update<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'Please enter a valid email.'
    if (!values.message.trim()) next.message = 'Please enter your message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      setValues(empty)
    } catch {
      setErrors({ message: 'Something went wrong. Please try again or call us directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            className={inputCls}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your name"
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            type="email"
            className={inputCls}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@email.com"
          />
        </Field>
      </div>

      {/* Message */}
      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          rows={5}
          className={inputCls}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Ask us anything — we'll get back to you by email."
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? 'Sending…' : 'Send Message'}
        </Button>
      </div>

      {/* Success message / toast */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            role="status"
            className="flex items-center gap-3 rounded-xl bg-sage/15 px-4 py-3 text-ocean"
          >
            <Check className="h-5 w-5" />
            <span className="text-sm font-medium">
              Thank you! Your message has been received. We&apos;ll get back to you soon.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}

// Small labelled field wrapper with inline error text
function Field({
  id,
  label,
  error,
  children
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
