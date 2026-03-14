'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS, BESTSELLER_IDS, WHATSAPP_URL } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const bestsellers = PRODUCTS.filter((p) => BESTSELLER_IDS.includes(p.id))

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
          variants={staggerContainer}
        >
          {bestsellers.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              className="group bg-brand-ivory rounded-xl overflow-hidden border border-brand-gold/8 hover:border-brand-gold/20 transition-all duration-700 luxury-card"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-transparent" />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-brand-950 text-brand-gold font-sans font-medium text-[10px] uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full border border-brand-gold/20">
                    {product.badge}
                  </span>
                )}
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

                <a
                  href={`${WHATSAPP_URL}?text=Hi! I'd like to order ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center border border-brand-gold/50 text-brand-gold font-display font-semibold uppercase tracking-[0.15em] text-[10px] px-6 py-3 rounded-full hover:bg-brand-gold hover:text-brand-950 hover:border-brand-gold transition-all duration-500"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <Link href="/menu" className="inline-flex items-center gap-2 font-sans text-brand-gold hover:text-brand-golddark transition-colors duration-500 font-medium text-sm tracking-wide">
            View Full Menu &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
