'use client'

import { motion } from 'framer-motion'
import { Cake, Hand, Palette, Package } from 'lucide-react'
import { WHY_CHOOSE_US } from '@/lib/constants'
import { fadeUp, staggerContainerSlow, scaleRotateIn } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ElementType> = {
  Cake,
  Hand,
  Palette,
  Package,
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-brand-950 luxury-dark-bg relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-brand-gold/[0.02] blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-brand-rosegold/[0.03] blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Us"
          title="Why Karachi Trusts Hina Bakers"
          light
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerSlow}
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="text-center p-8 rounded-xl border border-brand-gold/5 hover:border-brand-gold/20 transition-all duration-700 group relative overflow-hidden"
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              >
                {/* Hover glow background */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <motion.div
                  className="relative w-16 h-16 rounded-full bg-brand-gold/8 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold/15 transition-all duration-500"
                  variants={scaleRotateIn}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 },
                  }}
                >
                  <Icon className="w-7 h-7 text-brand-gold/80 group-hover:text-brand-gold transition-colors duration-500" />
                </motion.div>

                <h3 className="relative font-display text-lg text-brand-ink font-semibold mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="relative font-sans text-brand-light/50 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom line reveal */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent group-hover:w-3/4 transition-all duration-700" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
