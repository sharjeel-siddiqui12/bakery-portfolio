'use client'

import { motion } from 'framer-motion'
import { Cake, Hand, Palette, Package } from 'lucide-react'
import { WHY_CHOOSE_US } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
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
          variants={staggerContainer}
        >
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="text-center p-8 rounded-xl border border-brand-gold/5 hover:border-brand-gold/15 transition-all duration-700 group"
              >
                <div className="w-14 h-14 rounded-full bg-brand-gold/8 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold/15 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-brand-gold/80 group-hover:text-brand-gold transition-colors duration-500" />
                </div>
                <h3 className="font-display text-lg text-brand-ink font-semibold mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="font-sans text-brand-light/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
