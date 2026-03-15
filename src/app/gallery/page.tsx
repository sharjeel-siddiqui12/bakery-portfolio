'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/lib/constants'
import type { PinHeight } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'

// Use aspect ratios based on actual image dimensions for proper masonry
const pinAspectMap: Record<PinHeight, string> = {
  sm: 'aspect-[3/2]',    // ~800x530 - wider landscape
  md: 'aspect-[4/3]',    // ~800x600 - standard
  lg: 'aspect-[9/10]',   // ~800x900 - tall portrait
  xl: 'aspect-[2/3]',    // ~800x1200 - very tall portrait
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goPrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }

  const goNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[100vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1600"
          alt="Our Gallery"
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
            Home &mdash; Gallery
          </p>
          <h1 className="font-display italic text-5xl md:text-9xl text-brand-ink font-bold">
            Our Gallery
          </h1>
          <p className="font-sans text-brand-ink/80 mt-4 text-2xl">
            A visual celebration of our craft
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-30 bg-brand-cream/90 backdrop-blur-md border-b border-brand-gold/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`font-sans text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'text-brand-950 bg-brand-gold'
                    : 'text-brand-muted hover:text-white/90'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pinterest Masonry Gallery */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="columns-2 md:columns-3 lg:columns-4 gap-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            key={activeCategory}
          >
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                variants={fadeUp}
                className="mb-4 break-inside-avoid"
              >
                <div
                  className={`group relative rounded-xl overflow-hidden cursor-pointer w-full ${pinAspectMap[img.pinHeight]}`}
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/0 to-brand-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Bottom label on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-sans text-white/90 text-sm truncate">{img.alt}</p>
                    <p className="font-sans text-brand-gold text-xs uppercase tracking-wider mt-1">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                sizes="90vw"
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-16">
                <p className="text-white font-sans text-sm">{filtered[lightboxIndex].alt}</p>
                <p className="text-brand-gold font-sans text-xs uppercase tracking-wider mt-1">{filtered[lightboxIndex].category}</p>
              </div>

              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-brand-950/60 text-white hover:bg-brand-950/80 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goNext() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-brand-950/60 text-white hover:bg-brand-950/80 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Counter */}
              <div className="absolute -top-12 left-0 text-white/60 font-sans text-sm">
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
