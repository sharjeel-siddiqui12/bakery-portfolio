'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, MessageCircle } from 'lucide-react'
import { TESTIMONIALS, WHATSAPP_URL } from '@/lib/constants'
import { fadeUp, scaleUp, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const stats = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '500+', label: 'Reviews' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '100%', label: 'Recommend Us' },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[100vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1652891771857-e9c2dc024f9e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Testimonials"
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
            Home &mdash; Testimonials
          </p>
          <h1 className="font-display italic text-5xl md:text-8xl text-brand-ink font-bold">
            What Our Customers Say
          </h1>
          <p className="font-sans text-brand-ink/80 mt-4 text-2xl">
            Over 10,000 satisfied customers and counting
          </p>
        </motion.div>
      </section>

      {/* Stats Row */}
      <section className="py-12 bg-brand-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={scaleUp}>
                <p className="font-display text-3xl md:text-4xl font-bold text-brand-gold">{stat.value}</p>
                <p className="font-sans text-brand-light/70 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
          >
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.id}
                variants={fadeUp}
                className="break-inside-avoid bg-brand-ivory rounded-xl p-8 border border-brand-gold/8"
              >
                <span className="font-serif text-7xl text-brand-gold/30 leading-none block -mb-6">&ldquo;</span>
                <p className="font-sans text-brand-ink leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/40">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-brand-ink">{t.name}</p>
                    <p className="font-sans text-xs text-brand-muted">{t.location}</p>
                  </div>
                  <span className="ml-auto font-sans text-xs text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                    {t.occasion}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-brand-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="font-display text-2xl md:text-3xl text-brand-ink font-semibold mb-4">
              Had an experience with us?
            </motion.h2>
            <motion.p variants={fadeUp} className="font-sans text-brand-muted mb-8">
              We&apos;d love to hear from you! Share your feedback on WhatsApp.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={`${WHATSAPP_URL}?text=Hi! I'd like to share my review about Hina Bakers.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Share Your Review
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
