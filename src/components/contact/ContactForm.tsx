'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form:', data)
    setSubmitted(true)
  }

  const inputClass =
    'w-full border border-brand-gold/15 bg-brand-ivory rounded-lg px-4 py-3 font-sans text-brand-ink placeholder:text-brand-light focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/10 outline-none transition-all duration-500'
  const labelClass = 'block font-sans text-xs uppercase tracking-widest text-brand-gold font-medium mb-2'
  const errorClass = 'text-red-500 text-xs font-sans mt-1'

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-16"
        >
          <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-brand-gold" />
          </div>
          <h3 className="font-display text-2xl text-brand-ink font-semibold mb-3">
            Message Sent!
          </h3>
          <p className="font-sans text-brand-muted">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Name *</label>
              <input
                {...register('name', { required: 'Name is required' })}
                className={inputClass}
                placeholder="Your name"
              />
              {errors.name && <p className={errorClass}>{errors.name.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input
                {...register('email', { required: 'Email is required' })}
                type="email"
                className={inputClass}
                placeholder="your@email.com"
              />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Phone</label>
              <input
                {...register('phone')}
                type="tel"
                className={inputClass}
                placeholder="03XX-XXXXXXX"
              />
            </div>
            <div>
              <label className={labelClass}>Subject *</label>
              <select
                {...register('subject', { required: 'Please select a subject' })}
                className={inputClass}
              >
                <option value="">Select subject</option>
                <option value="general">General Enquiry</option>
                <option value="custom-order">Custom Order</option>
                <option value="feedback">Feedback</option>
                <option value="catering">Catering</option>
              </select>
              {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
            </div>
          </div>

          <div>
            <label className={labelClass}>Message *</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className={`${inputClass} min-h-[150px]`}
              placeholder="How can we help you?"
            />
            {errors.message && <p className={errorClass}>{errors.message.message}</p>}
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Send Message
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
