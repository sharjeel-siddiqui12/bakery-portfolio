'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FEATURED_CATEGORIES } from '@/lib/constants'
import { fadeUp, staggerContainerSlow } from '@/lib/animations'
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
          variants={staggerContainerSlow}
        >
          {FEATURED_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link href={cat.href} className="block group">
                <div className="relative h-[360px] rounded-xl overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-115"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent transition-all duration-500 group-hover:from-brand-950/90 group-hover:via-brand-950/35" />
                  <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/30 rounded-xl transition-all duration-700" />

                  {/* Corner decorations on hover */}
                  <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-brand-gold/0 group-hover:border-brand-gold/30 rounded-tr-lg transition-all duration-700" />
                  <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-brand-gold/0 group-hover:border-brand-gold/30 rounded-tl-lg transition-all duration-700" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Animated gold line */}
                    <div className="h-px w-8 bg-brand-gold/40 mb-3 group-hover:w-16 transition-all duration-700 ease-out" />
                    <h3 className="font-display text-xl text-brand-ink font-semibold tracking-wide group-hover:text-brand-goldlt transition-colors duration-500">
                      {cat.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-brand-gold/80 text-xs font-sans uppercase tracking-widest opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span>Explore</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 4 }}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.span>
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
