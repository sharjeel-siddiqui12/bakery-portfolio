'use client'

import { motion } from 'framer-motion'
import { letterReveal, staggerContainerFast } from '@/lib/animations'

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const words = text.split(' ')

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainerFast}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={letterReveal} className="mr-[0.3em]">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
