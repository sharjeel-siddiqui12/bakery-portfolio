'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { TESTIMONIALS } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const previewTestimonials = TESTIMONIALS.slice(0, 3)

export default function TestimonialPreview() {
  return (
    <section className="py-24 md:py-32 bg-brand-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Customers Say"
          subtitle="Over 10,000 satisfied customers and counting"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {previewTestimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="bg-brand-cream rounded-xl p-8 border border-brand-gold/8 hover:border-brand-gold/20 transition-all duration-700"
            >
              <span className="font-serif text-5xl text-brand-gold/25 leading-none">&ldquo;</span>
              <p className="font-sans text-brand-ink leading-relaxed mt-1 mb-6 text-[15px]">
                {t.text}
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <div className="gold-divider mb-4" />
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-brand-gold/30">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="44px" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-brand-ink">{t.name}</p>
                  <p className="font-sans text-[11px] text-brand-light uppercase tracking-wider">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <Link href="/testimonials" className="inline-flex items-center gap-2 font-sans text-brand-gold hover:text-brand-golddark transition-colors duration-500 font-medium text-sm tracking-wide">
            Read All Reviews &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
