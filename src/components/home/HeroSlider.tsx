'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { HERO_SLIDES } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
import Button from '@/components/ui/Button'

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = HERO_SLIDES[current]

  return (
    <section
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Multi-layered premium overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-brand-950/40 to-brand-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/30 via-transparent to-brand-950/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="text-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
          >
            {/* Decorative label */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-brand-gold/50" />
              <span className="font-sans text-brand-gold/80 text-xs uppercase tracking-[0.4em]">Hina Bakers</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-brand-gold/50" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-ink font-bold leading-[1.1]"
            >
              {slide.headline}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-sans text-brand-ink/60 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light"
            >
              {slide.sub}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10">
              <Link href={slide.ctaHref}>
                <Button variant="primary" size="lg">
                  {slide.cta}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow Navigation — minimal luxury */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-brand-ink/15 bg-brand-950/20 backdrop-blur-md text-brand-ink/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-500"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-brand-ink/15 bg-brand-950/20 backdrop-blur-md text-brand-ink/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-500"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators — refined */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === current
                ? 'bg-brand-gold w-10'
                : 'bg-brand-ink/25 w-6 hover:bg-brand-ink/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-5 h-5 text-brand-ink/30" />
      </motion.div>
    </section>
  )
}
