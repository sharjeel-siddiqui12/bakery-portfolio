'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({ label, title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          className="text-brand-gold font-sans uppercase tracking-[0.35em] text-xs font-medium block"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-serif italic text-4xl sm:text-5xl md:text-6xl mt-4 mb-5 ${light ? 'text-brand-ink' : 'text-brand-ink'}`}
      >
        {title}
      </motion.h2>
      <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/40" />
        <div className="flex items-center gap-2">
          <span className="block w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
          <span className="text-brand-gold text-xs">&#10022;</span>
          <span className="block w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
        </div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/40" />
      </motion.div>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`font-sans text-lg mt-5 max-w-xl mx-auto ${light ? 'text-brand-light' : 'text-brand-light'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
