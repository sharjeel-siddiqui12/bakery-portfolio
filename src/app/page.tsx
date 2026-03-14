'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSlider from '@/components/home/HeroSlider'
import FeaturedCategories from '@/components/home/FeaturedCategories'
import AboutSnippet from '@/components/home/AboutSnippet'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialPreview from '@/components/home/TestimonialPreview'
import InstagramFeed from '@/components/home/InstagramFeed'
import Button from '@/components/ui/Button'
import { MARQUEE_ITEMS, WHATSAPP_ORDER_URL } from '@/lib/constants'
import { scaleUp, fadeUp, staggerContainer } from '@/lib/animations'

export default function HomePage() {
  const ctaRef = useRef<HTMLElement>(null)
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  })
  const ctaImageY = useTransform(ctaProgress, [0, 1], ['0%', '20%'])

  return (
    <>
      {/* Section 1: Hero Slider */}
      <HeroSlider />

      {/* Section 2: Marquee Banner */}
      <motion.div
        className="bg-brand-950 py-4 overflow-hidden border-y border-brand-gold/8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="animate-marquee flex whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="font-sans text-brand-gold/70 text-xs uppercase tracking-[0.25em] mx-8 flex items-center gap-8">
              <motion.span
                className="text-brand-gold/30 text-[8px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                &#10022;
              </motion.span>
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Section 3: Featured Categories */}
      <FeaturedCategories />

      {/* Section 4: About Snippet */}
      <AboutSnippet />

      {/* Section 5: Featured Products / Bestsellers */}
      <FeaturedProducts />

      {/* Section 6: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 7: Custom Order CTA Banner with Parallax */}
      <section ref={ctaRef} className="relative py-28 md:py-36 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: ctaImageY }}>
          <Image
            src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=1600"
            alt="Custom cake baking"
            fill
            className="object-cover scale-110"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-brand-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/50 via-transparent to-brand-950/50" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="text-brand-gold/70 font-sans uppercase tracking-[0.35em] text-xs font-medium">
            Custom Orders
          </motion.span>
          <motion.h2
            variants={scaleUp}
            className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-brand-ink mt-5 mb-6 text-glow"
          >
            Your Dream Cake Awaits
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-brand-ink/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Tell us your vision and we&apos;ll bring it to life — from intimate birthdays to grand weddings.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button variant="primary" size="lg">Order on WhatsApp</Button>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link href="/custom-orders">
                <Button variant="secondary" size="lg" className="border-brand-ink/30 text-brand-ink hover:bg-brand-ink/10 hover:border-brand-ink/50">
                  Custom Order Form
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 8: Testimonials Preview */}
      <TestimonialPreview />

      {/* Section 9: Gallery Teaser */}
      <InstagramFeed />

      {/* Section 10: Newsletter / CTA */}
      <section className="py-24 md:py-32 bg-brand-950 luxury-dark-bg relative overflow-hidden">
        {/* Animated background accent */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-gold/[0.015] blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10">
          <motion.div
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="text-brand-gold/60 font-sans uppercase tracking-[0.35em] text-xs font-medium">
              Stay Connected
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif italic text-3xl md:text-4xl text-brand-ink mt-4 mb-5">
              Never Miss a Sweet Moment
            </motion.h2>
            <motion.p variants={fadeUp} className="font-sans text-brand-light/40 mb-10 font-light">
              Follow us on social media or reach out on WhatsApp for exclusive offers, new flavours, and celebration inspiration.
            </motion.p>
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Chat on WhatsApp</Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
