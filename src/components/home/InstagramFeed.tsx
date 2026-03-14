'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { GALLERY_IMAGES } from '@/lib/constants'
import type { PinHeight } from '@/lib/constants'
import { staggerContainerSlow } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import { ZoomIn } from 'lucide-react'

const previewImages = GALLERY_IMAGES.slice(0, 8)

const pinHeightMap: Record<PinHeight, string> = {
  sm: 'h-[200px] sm:h-[220px]',
  md: 'h-[260px] sm:h-[280px]',
  lg: 'h-[320px] sm:h-[350px]',
  xl: 'h-[380px] sm:h-[420px]',
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

export default function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Gallery"
          title="A Taste of Our Craft"
          subtitle="Peek into our world of confections"
        />

        <motion.div
          className="columns-2 md:columns-3 lg:columns-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerSlow}
        >
          {previewImages.map((img, i) => (
            <motion.div
              key={img.id}
              custom={i}
              variants={itemVariants}
              className="mb-4 break-inside-avoid"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div
                className={`group relative rounded-xl overflow-hidden ${pinHeightMap[img.pinHeight]}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/0 to-brand-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/25 rounded-xl transition-all duration-700" />

                {/* Hover overlay with zoom icon and category */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-brand-950/30 backdrop-blur-md flex items-center justify-center border border-brand-gold/20 mb-3"
                    initial={false}
                    whileHover={{ scale: 1.15, rotate: 90, transition: { duration: 0.3 } }}
                  >
                    <ZoomIn className="w-4.5 h-4.5 text-brand-gold" />
                  </motion.div>
                  <span className="text-brand-gold/80 text-[10px] font-sans uppercase tracking-[0.2em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {img.category}
                  </span>
                </div>
              </div>
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
          <Link href="/gallery" className="hover-underline inline-flex items-center gap-2 font-sans text-brand-gold hover:text-brand-golddark transition-colors duration-500 font-medium text-sm tracking-wide">
            View Full Gallery &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
