import type { Variants } from 'framer-motion'

const cubicEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: cubicEase } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: cubicEase } },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: cubicEase } },
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: cubicEase } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: 40 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5, ease: cubicEase } },
}

export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -6, transition: { duration: 0.3, ease: 'easeOut' } },
}

export const imageParallax: Variants = {
  initial: { scale: 1.1 },
  animate: { scale: 1, transition: { duration: 1.4, ease: cubicEase } },
}

/* ─── New animation variants ─── */

export const fadeUpRotate: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: 15 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: cubicEase } },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: cubicEase } },
}

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
}

export const scaleRotateIn: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -8 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7, ease: cubicEase } },
}

export const flipIn: Variants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8, ease: cubicEase } },
}

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
}

export const magneticHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  },
}

export const glowPulse: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: cubicEase },
  },
}

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: cubicEase } },
}
