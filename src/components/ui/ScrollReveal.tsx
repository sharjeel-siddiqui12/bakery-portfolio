'use client'

import { motion, type Variants, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

const cubicEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.5, ease: cubicEase, delay },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
