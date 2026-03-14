'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS, BESTSELLER_IDS, WHATSAPP_URL } from '@/lib/constants'
import { fadeUp, staggerContainerSlow } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const bestsellers = PRODUCTS.filter((p) => BESTSELLER_IDS.includes(p.id))

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export default function FeaturedProducts() {
  return (
    <section className="py-24 md:py-32 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Bestsellers"
          title="Our Finest Creations"
          subtitle="The creations Karachi keeps coming back for"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerSlow}
        >
          {bestsellers.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
            >
              <TiltCard>
                <div className="group bg-brand-ivory rounded-xl overflow-hidden border border-brand-gold/8 hover:border-brand-gold/25 transition-all duration-700 luxury-card">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {product.badge && (
                      <motion.span
                        className="absolute top-4 left-4 bg-brand-950 text-brand-gold font-sans font-medium text-[10px] uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full border border-brand-gold/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {product.badge}
                      </motion.span>
                    )}

                    {/* Hover overlay with quick view */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-12 h-12 rounded-full bg-brand-950/40 backdrop-blur-md flex items-center justify-center border border-brand-gold/30 scale-75 group-hover:scale-100 transition-transform duration-500">
                        <span className="text-brand-gold text-lg">+</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="font-sans text-brand-gold text-[10px] uppercase tracking-[0.2em] font-medium">
                      {product.category}
                    </p>
                    <h3 className="font-display text-xl text-brand-ink font-semibold mt-1.5">
                      {product.name}
                    </h3>
                    <p className="font-sans text-brand-muted text-sm mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="gold-divider my-5" />

                    <p className="font-sans text-brand-light text-[10px] uppercase tracking-widest">Starting from</p>
                    <p className="font-serif italic text-2xl text-brand-gold mt-0.5">
                      PKR {product.price.toLocaleString()}
                    </p>

                    <motion.a
                      href={`${WHATSAPP_URL}?text=Hi! I'd like to order ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 w-full inline-flex items-center justify-center border border-brand-gold/50 text-brand-gold font-display font-semibold uppercase tracking-[0.15em] text-[10px] px-6 py-3 rounded-full hover:bg-brand-gold hover:text-brand-950 hover:border-brand-gold transition-all duration-500"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Order Now
                    </motion.a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/menu" className="hover-underline inline-flex items-center gap-2 font-sans text-brand-gold hover:text-brand-golddark transition-colors duration-500 font-medium text-sm tracking-wide">
            View Full Menu &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
