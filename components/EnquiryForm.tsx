'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from './Button'
import { roomTypeOptions } from '@/lib/data'

type Fields = {
  name: string
  email: string
  phone: string
  checkIn: string
  checkOut: string
  adults: string
  children: string
  roomType: string
  message: string
}

const empty: Fields = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  adults: '2',
  children: '0',
  roomType: '',
  message: ''
}

type Errors = Partial<Record<keyof Fields, string>>

const labelCls = 'mb-1.5 block text-sm font-medium text-shadow'
const inputCls =
  'w-full rounded-xl border border-shadow/15 bg-white px-4 py-3 text-shadow placeholder:text-shadow/40 focus-brand'

/** Client-side enquiry/booking form. No backend — logs to console + shows a success message. */
export default function EnquiryForm() {
  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

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
    if (!values.phone.trim()) next.phone = 'Please enter a phone number.'
    if (!values.checkIn) next.checkIn = 'Select a check-in date.'
    if (!values.checkOut) next.checkOut = 'Select a check-out date.'
    else if (values.checkIn && values.checkOut <= values.checkIn)
      next.checkOut = 'Check-out must be after check-in.'
    if (!values.roomType) next.roomType = 'Choose a room type.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    // No backend yet — log the enquiry and show success.
    console.log('Enquiry submitted:', values)
    setSent(true)
    setValues(empty)
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

      {/* Phone */}
      <Field id="phone" label="Phone" error={errors.phone}>
        <input
          id="phone"
          className={inputCls}
          value={values.phone}
          onChange={(e) => update('phone', e.target.value)}
          placeholder="+91 00000 00000"
        />
      </Field>

      {/* Dates */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="checkIn" label="Check-in" error={errors.checkIn}>
          <input
            id="checkIn"
            type="date"
            className={inputCls}
            value={values.checkIn}
            onChange={(e) => update('checkIn', e.target.value)}
          />
        </Field>
        <Field id="checkOut" label="Check-out" error={errors.checkOut}>
          <input
            id="checkOut"
            type="date"
            className={inputCls}
            value={values.checkOut}
            onChange={(e) => update('checkOut', e.target.value)}
          />
        </Field>
      </div>

      {/* Guests */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="adults" label="Adults">
          <select
            id="adults"
            className={inputCls}
            value={values.adults}
            onChange={(e) => update('adults', e.target.value)}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </Field>
        <Field id="children" label="Children">
          <select
            id="children"
            className={inputCls}
            value={values.children}
            onChange={(e) => update('children', e.target.value)}
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Room type */}
      <Field id="roomType" label="Room Type" error={errors.roomType}>
        <select
          id="roomType"
          className={inputCls}
          value={values.roomType}
          onChange={(e) => update('roomType', e.target.value)}
        >
          <option value="">Select a room type</option>
          {roomTypeOptions.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </Field>

      {/* Message */}
      <Field id="message" label="Message">
        <textarea
          id="message"
          rows={4}
          className={inputCls}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us about your trip — anything special you'd like?"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button type="submit" size="lg">
          Send Enquiry
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
              Thank you! Your enquiry has been received. (Demo: logged to console.)
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
