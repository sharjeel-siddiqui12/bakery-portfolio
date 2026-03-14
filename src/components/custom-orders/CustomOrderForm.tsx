'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { OCCASIONS, CAKE_TYPES, SIZE_OPTIONS, FLAVOURS } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'
import Button from '@/components/ui/Button'

interface FormData {
  fullName: string
  phone: string
  email: string
  occasion: string
  cakeType: string
  cakeSize: string
  flavour: string
  designDescription: string
  deliveryDate: string
  deliveryAddress: string
  specialInstructions: string
  hearAboutUs: string
}

export default function CustomOrderForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  const minDate = new Date()
  minDate.setDate(minDate.getDate() + 3)
  const minDateStr = minDate.toISOString().split('T')[0]

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
            Thank You!
          </h3>
          <p className="font-sans text-brand-muted">
            We&apos;ll contact you within 24 hours to discuss your dream cake.
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
              <label className={labelClass}>Full Name *</label>
              <input
                {...register('fullName', { required: 'Name is required' })}
                className={inputClass}
                placeholder="Your full name"
              />
              {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Phone Number *</label>
              <input
                {...register('phone', { required: 'Phone is required' })}
                type="tel"
                className={inputClass}
                placeholder="03XX-XXXXXXX"
              />
              {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label className={labelClass}>Email Address</label>
            <input
              {...register('email')}
              type="email"
              className={inputClass}
              placeholder="your@email.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Occasion *</label>
              <select
                {...register('occasion', { required: 'Please select an occasion' })}
                className={inputClass}
              >
                <option value="">Select occasion</option>
                {OCCASIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              {errors.occasion && <p className={errorClass}>{errors.occasion.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Cake Type *</label>
              <select
                {...register('cakeType', { required: 'Please select a cake type' })}
                className={inputClass}
              >
                <option value="">Select type</option>
                {CAKE_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              {errors.cakeType && <p className={errorClass}>{errors.cakeType.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Cake Size *</label>
              <select
                {...register('cakeSize', { required: 'Please select a size' })}
                className={inputClass}
              >
                <option value="">Select size</option>
                {SIZE_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label} — Serves {s.serves} ({s.basePrice})
                  </option>
                ))}
              </select>
              {errors.cakeSize && <p className={errorClass}>{errors.cakeSize.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Preferred Flavour</label>
              <select {...register('flavour')} className={inputClass}>
                <option value="">Select flavour</option>
                {FLAVOURS.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Design Description *</label>
            <textarea
              {...register('designDescription', { required: 'Please describe your cake' })}
              className={`${inputClass} min-h-[120px]`}
              placeholder="Describe your dream cake — colours, theme, design references, text on cake, etc."
            />
            {errors.designDescription && <p className={errorClass}>{errors.designDescription.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Delivery Date *</label>
              <input
                {...register('deliveryDate', { required: 'Please select a date' })}
                type="date"
                min={minDateStr}
                className={inputClass}
              />
              {errors.deliveryDate && <p className={errorClass}>{errors.deliveryDate.message}</p>}
            </div>
            <div>
              <label className={labelClass}>How Did You Hear About Us?</label>
              <select {...register('hearAboutUs')} className={inputClass}>
                <option value="">Select</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="google">Google</option>
                <option value="friend">Friend / Family</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Delivery Address</label>
            <textarea
              {...register('deliveryAddress')}
              className={`${inputClass} min-h-[80px]`}
              placeholder="Complete delivery address in Karachi"
            />
          </div>

          <div>
            <label className={labelClass}>Special Instructions</label>
            <textarea
              {...register('specialInstructions')}
              className={`${inputClass} min-h-[80px]`}
              placeholder="Any allergies, dietary requirements, or special notes..."
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Submit Order Request
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
