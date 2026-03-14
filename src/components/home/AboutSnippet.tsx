"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  slideLeft,
  staggerContainer,
  fadeUp,
} from "@/lib/animations";
import { ABOUT_STATS } from "@/lib/constants";
import Button from "@/components/ui/Button";

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const numericVal = parseInt(value.replace(/[^0-9]/g, ''))
  const displaySuffix = value.replace(/[0-9,]/g, '')

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = numericVal / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericVal) {
        setCount(numericVal)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, numericVal])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{displaySuffix}
    </span>
  )
}

export default function AboutSnippet() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-ivory/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={slideLeft}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-3 -left-3 w-full h-full border border-brand-gold/20 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
              <div className="relative h-[520px] md:h-[620px] rounded-xl overflow-hidden group">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1687886026544-a07433c0ee2a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Hina Bakers kitchen"
                  fill
                  quality={100}
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 via-transparent to-transparent" />

                {/* Decorative corner accents on hover */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-brand-gold/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-brand-gold/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-brand-gold/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-brand-gold/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              {/* Est Badge */}
              <motion.div
                className="absolute -bottom-5 -right-5 md:bottom-8 md:right-8 bg-brand-950 text-brand-gold px-6 py-4 rounded-lg border border-brand-gold/20"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <p className="font-serif italic text-xs uppercase tracking-widest text-brand-gold/60">
                  Established
                </p>
                <p className="font-display text-3xl font-bold">2010</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="text-brand-gold font-sans uppercase tracking-[0.35em] text-xs font-medium"
            >
              Our Story
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif italic text-4xl md:text-5xl text-brand-ink mt-4 mb-8 leading-tight"
            >
              Baking Happiness Since 2010
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-brand-muted leading-relaxed mb-4"
            >
              Hina Bakers was born from a mother&apos;s dream to bring
              world-class baking to Karachi. What started in a small home
              kitchen with a single oven has blossomed into one of the
              city&apos;s most beloved bakeries.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-sans text-brand-muted leading-relaxed mb-4"
            >
              Every cake that leaves our kitchen carries with it a legacy of
              handcrafted quality, premium ingredients sourced from around the
              world, and the warmth of a family that believes baking is an art
              form.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-sans text-brand-muted leading-relaxed mb-10"
            >
              After 14 years and over 10,000 happy customers, our passion burns
              brighter than ever. From intimate birthday celebrations to grand
              wedding receptions, we pour our hearts into every creation.
            </motion.p>

            {/* Gold Divider */}
            <motion.div variants={fadeUp} className="gold-divider mb-10" />

            {/* Stats with Animated Counters */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-10 mb-10"
            >
              {ABOUT_STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className="font-display text-3xl md:text-4xl font-bold text-brand-gold">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="font-sans text-brand-muted text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href="/about">
                <Button variant="secondary">Read Our Full Story</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
