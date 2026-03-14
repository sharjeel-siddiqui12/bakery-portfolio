'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { HERO_SLIDES } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
import Button from '@/components/ui/Button'

function GoldParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 4,
    })), [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle, rgba(212,168,83,0.8) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -80, -160],
            x: [0, Math.random() > 0.5 ? 30 : -30, 0],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.2, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const textX = useTransform(mouseX, [0, 1], [-8, 8])
  const textY = useTransform(mouseY, [0, 1], [-5, 5])

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

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }, [mouseX, mouseY])

  const slide = HERO_SLIDES[current]

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Images with Ken Burns */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1.02, 1.08] }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              className="object-cover"
              priority={current === 0}
              sizes="100vw"
            />
          </motion.div>
          {/* Multi-layered premium overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-brand-950/40 to-brand-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/30 via-transparent to-brand-950/30" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Gold Particles */}
      <GoldParticles />

      {/* Content with Parallax Mouse Following */}
      <div className="relative z-10 flex items-center justify-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="text-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            style={{ x: textX, y: textY }}
          >
            {/* Decorative label */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                className="h-px w-8 bg-gradient-to-r from-transparent to-brand-gold/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <span className="font-sans text-brand-gold/80 text-xs uppercase tracking-[0.4em]">Hina Bakers</span>
              <motion.div
                className="h-px w-8 bg-gradient-to-l from-transparent to-brand-gold/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-ink font-bold leading-[1.1] text-glow"
            >
              {slide.headline}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-sans text-brand-ink/60 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light"
            >
              {slide.sub}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={slide.ctaHref}>
                <Button variant="primary" size="lg">
                  {slide.cta}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar for slide timer */}
      {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-48">
        <div className="h-[2px] bg-brand-ink/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-gold/60 to-brand-goldlt/60"
            key={current}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5, ease: 'linear' }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </div> */}

      {/* Arrow Navigation — minimal luxury */}
      <motion.button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-brand-ink/15 bg-brand-950/20 backdrop-blur-md text-brand-ink/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-500"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(10, 5, 6, 0.5)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>
      <motion.button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-brand-ink/15 bg-brand-950/20 backdrop-blur-md text-brand-ink/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-500"
        aria-label="Next slide"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(10, 5, 6, 0.5)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Dot Indicators — refined */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === current
                ? 'bg-brand-gold w-10'
                : 'bg-brand-ink/25 w-6 hover:bg-brand-ink/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-brand-ink/20 text-[9px] uppercase tracking-[0.3em] font-sans">Scroll</span>
        <ChevronDown className="w-5 h-5 text-brand-ink/30" />
      </motion.div>
    </section>
  )
}
