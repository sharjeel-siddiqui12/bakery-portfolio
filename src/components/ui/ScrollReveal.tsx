'use client'

import { motion, type Variants } from 'framer-motion'
import { ReactNode } from 'react'

const cubicEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: cubicEase, delay },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
