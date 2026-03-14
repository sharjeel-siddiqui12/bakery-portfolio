'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FEATURED_CATEGORIES } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import { ArrowRight } from 'lucide-react'

export default function FeaturedCategories() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Specialties"
          title="Crafted with Passion"
          subtitle="Explore our range of handcrafted confections"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {FEATURED_CATEGORIES.map((cat) => (
            <motion.div key={cat.name} variants={fadeUp}>
              <Link href={cat.href} className="block group">
                <div className="relative h-[360px] rounded-xl overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent transition-all duration-500" />
                  <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/30 rounded-xl transition-all duration-700" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="h-px w-8 bg-brand-gold/40 mb-3 group-hover:w-12 transition-all duration-500" />
                    <h3 className="font-display text-xl text-brand-ink font-semibold tracking-wide">
                      {cat.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-brand-gold/80 text-xs font-sans uppercase tracking-widest opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
