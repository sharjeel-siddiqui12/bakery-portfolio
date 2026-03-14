'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { GALLERY_IMAGES } from '@/lib/constants'
import type { PinHeight } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import { ZoomIn } from 'lucide-react'

const previewImages = GALLERY_IMAGES.slice(0, 8)

const pinHeightMap: Record<PinHeight, string> = {
  sm: 'h-[200px] sm:h-[220px]',
  md: 'h-[260px] sm:h-[280px]',
  lg: 'h-[320px] sm:h-[350px]',
  xl: 'h-[380px] sm:h-[420px]',
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
          variants={staggerContainer}
        >
          {previewImages.map((img) => (
            <motion.div
              key={img.id}
              variants={fadeUp}
              className="mb-4 break-inside-avoid"
            >
              <div
                className={`group relative rounded-xl overflow-hidden ${pinHeightMap[img.pinHeight]}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/0 to-brand-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/25 rounded-xl transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                  <div className="w-11 h-11 rounded-full bg-brand-950/30 backdrop-blur-md flex items-center justify-center border border-brand-gold/20">
                    <ZoomIn className="w-4 h-4 text-brand-gold" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <Link href="/gallery" className="inline-flex items-center gap-2 font-sans text-brand-gold hover:text-brand-golddark transition-colors duration-500 font-medium text-sm tracking-wide">
            View Full Gallery &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
