'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { PRODUCTS, MENU_CATEGORIES, WHATSAPP_URL } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import MenuCard from '@/components/menu/MenuCard'
import Button from '@/components/ui/Button'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[100vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://plus.unsplash.com/premium_photo-1687905431983-2a4b90a3a744?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our Menu"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 to-brand-950/70" />
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-brand-gold text-md uppercase tracking-widest mb-3">
            Home &mdash; Menu
          </p>
          <h1 className="font-display italic text-5xl md:text-9xl text-brand-ink font-bold">
            Our Menu
          </h1>
          <p className="font-sans text-brand-ink/80 mt-4 text-2xl">
            Every bite crafted with precision and passion
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-brand-cream/90 backdrop-blur-md border-b border-brand-gold/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`relative font-sans text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'text-brand-950 bg-brand-gold'
                    : 'text-brand-muted hover:text-brand-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            key={activeCategory}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <MenuCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Seasonal Banner */}
      <section className="py-12 bg-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-brand-ink mb-4">
            Eid Special &amp; Seasonal Collections
          </p>
          <p className="font-sans text-brand-light/70 mb-6">
            Ask us on WhatsApp for our latest seasonal offerings
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm">
              Ask on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </>
  )
}
