'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { TESTIMONIALS } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

export default function TestimonialPreview() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((index: number) => {
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }, [active])

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setActive((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

  const t = TESTIMONIALS[active]

  const slideVariants = {
    enter: (dir: number) => ({ x: dir * 100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -100, opacity: 0 }),
  }

  return (
    <section className="py-24 md:py-32 bg-brand-linen relative overflow-hidden">
      {/* Decorative background orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-gold/[0.02] blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What Our Customers Say"
          subtitle="Over 10,000 satisfied customers and counting"
        />

        {/* Featured testimonial carousel */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative bg-brand-cream rounded-2xl p-8 md:p-12 border border-brand-gold/10 min-h-[280px] overflow-hidden">
            {/* Large decorative quote */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-brand-gold/10" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}

                className="relative"
              >
                <p className="font-sans text-brand-ink text-lg md:text-xl leading-relaxed mb-8 text-center italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    </motion.div>
                  ))}
                </div>

                <div className="gold-divider mb-5" />

                <div className="flex items-center justify-center gap-4">
                  <motion.div
                    className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="56px" />
                  </motion.div>
                  <div className="text-center">
                    <p className="font-display text-base font-semibold text-brand-ink">{t.name}</p>
                    <p className="font-sans text-xs text-brand-light uppercase tracking-wider">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-brand-gold/15 bg-brand-cream/80 backdrop-blur-sm flex items-center justify-center text-brand-gold/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-brand-gold/15 bg-brand-cream/80 backdrop-blur-sm flex items-center justify-center text-brand-gold/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.slice(0, 6).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goTo(i)}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i === active
                    ? 'bg-brand-gold w-8'
                    : 'bg-brand-gold/20 w-4 hover:bg-brand-gold/40'
                }`}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/testimonials" className="hover-underline inline-flex items-center gap-2 font-sans text-brand-gold hover:text-brand-golddark transition-colors duration-500 font-medium text-sm tracking-wide">
            Read All Reviews &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
