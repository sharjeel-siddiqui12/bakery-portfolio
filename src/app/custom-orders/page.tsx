'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { Check, MessageCircle } from 'lucide-react'
import { WHATSAPP_ORDER_URL } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import CustomOrderForm from '@/components/custom-orders/CustomOrderForm'

const steps = [
  {
    num: '01',
    title: 'Choose Your Style',
    description: 'Browse our portfolio and decide your cake theme, flavour, and size.',
  },
  {
    num: '02',
    title: 'Contact Us',
    description: 'Fill the form below or WhatsApp us with your requirements and references.',
  },
  {
    num: '03',
    title: 'We Create Magic',
    description: 'Our artisans craft your dream cake and deliver it fresh to your door.',
  },
]

const benefits = [
  'Minimum 3 days advance notice required',
  'Payment: 50% advance, 50% on delivery',
  'Free delivery within Karachi (orders PKR 2,000+)',
  'Fresh ingredients — no frozen cakes ever',
  'Unlimited design revisions before baking',
  'Photo updates during the creation process',
]

export default function CustomOrdersPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[100vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1651346851254-a1c60422b0d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Custom Orders"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 to-brand-950/70" />
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-brand-gold text-md uppercase tracking-widest mb-3">
            Home &mdash; Custom Orders
          </p>
          <h1 className="font-display italic text-5xl md:text-9xl text-brand-ink font-bold">
            Custom Orders
          </h1>
          <p className="font-sans text-brand-ink/80 mt-4 text-2xl">
            Your vision, our craftsmanship
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Three Simple Steps"
            subtitle="From your imagination to our kitchen to your celebration"
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {steps.map((step, i) => (
              <motion.div key={step.num} variants={fadeUp} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-brand-950 text-lg font-bold">{step.num}</span>
                </div>
                <h3 className="font-display text-xl text-brand-ink font-semibold mb-3">{step.title}</h3>
                <p className="font-sans text-brand-muted text-sm">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-brand-gold/30" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Place Your Order"
            title="Tell Us Your Vision"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <CustomOrderForm />
            </div>

            {/* Info Panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} className="bg-brand-ivory rounded-xl p-8 border border-brand-gold/8">
                <h3 className="font-display text-xl text-brand-ink font-semibold mb-6">
                  Why Order With Us?
                </h3>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                      <span className="font-sans text-brand-muted text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-[#25D366]/10 rounded-xl p-8 border border-[#25D366]/20">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8 text-[#25D366]" />
                  <h3 className="font-display text-lg text-brand-ink font-semibold">
                    Prefer WhatsApp?
                  </h3>
                </div>
                <p className="font-sans text-brand-muted text-sm mb-4">
                  Chat with us directly for a faster, more personal ordering experience.
                </p>
                <a
                  href={WHATSAPP_ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-sans font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#1da851] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
