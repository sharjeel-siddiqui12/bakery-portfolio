'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeUp, slideLeft, slideRight, staggerContainer, scaleUp } from '@/lib/animations'
import { ABOUT_STATS, TEAM_MEMBERS, TIMELINE } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import { Target, Eye, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[100vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://plus.unsplash.com/premium_photo-1675604274302-665e7e65021e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hina Bakers"
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
            Home &mdash; About
          </p>
          <h1 className="font-display italic text-5xl md:text-9xl text-brand-ink font-bold">
            Our Story
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={slideLeft}
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/30 rounded-xl" />
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1687886026544-a07433c0ee2a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Founder of Hina Bakers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="text-brand-gold font-sans uppercase tracking-[0.3em] text-sm font-medium">
                The Beginning
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-brand-ink font-bold mt-3 mb-6">
                A Dream Born in a Kitchen
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sans text-brand-muted leading-relaxed mb-4">
                Hina Bakers was born in 2010 from a single mother&apos;s dream to create extraordinary cakes for ordinary people. What began as a passion project in a small Karachi kitchen has grown into one of the city&apos;s most trusted and beloved bakeries.
              </motion.p>
              <motion.p variants={fadeUp} className="font-sans text-brand-muted leading-relaxed mb-4">
                Our founder, HF, believed that every celebration deserves a cake made with love, the finest ingredients, and an unwavering commitment to quality. That belief drives us to this day — from the flour we sift to the final flourish on every cake.
              </motion.p>
              <motion.p variants={fadeUp} className="font-sans text-brand-muted leading-relaxed">
                Today, Hina Bakers is a family of passionate bakers, cake artists, and confectionery lovers who share a singular vision: to make every celebration in Karachi a little sweeter, a little more beautiful, and a lot more memorable.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 md:py-28 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {[
              { icon: Target, title: 'Our Mission', text: 'To craft the finest cakes and pastries in Karachi using premium ingredients, time-honoured techniques, and boundless creativity — making every celebration unforgettable.' },
              { icon: Eye, title: 'Our Vision', text: 'To be Pakistan\'s most loved and trusted bakery brand, known for quality, artistry, and the joy we bring to every table.' },
              { icon: Heart, title: 'Our Promise', text: 'Freshness guaranteed. Every cake is baked to order with the same love and care we\'d put into a cake for our own family celebrations.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-brand-ivory rounded-xl p-8 border border-brand-gold/8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-display text-xl text-brand-ink font-semibold mb-3">{item.title}</h3>
                <p className="font-sans text-brand-muted text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="Milestones"
            subtitle="Over a decade of baking excellence"
          />
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-gold/30 hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-gold/30 md:hidden" />

            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={i % 2 === 0 ? slideLeft : slideRight}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-brand-ivory rounded-xl p-6 border border-brand-gold/8">
                      <h3 className="font-display text-lg font-semibold text-brand-ink">{item.title}</h3>
                      <p className="font-sans text-brand-muted text-sm mt-2">{item.description}</p>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center z-10 shrink-0">
                    <span className="font-display text-brand-950 text-xs font-bold">{item.year}</span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="The People Behind the Magic"
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="text-center"
              >
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-brand-gold/40 mb-6">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="160px" />
                </div>
                <h3 className="font-display text-xl text-brand-ink font-semibold">{member.name}</h3>
                <p className="font-serif italic text-brand-gold mt-1">{member.role}</p>
                <p className="font-sans text-brand-muted text-sm mt-3 max-w-xs mx-auto">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-brand-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {[
              { value: '500+', label: 'Custom Cakes' },
              { value: '10,000+', label: 'Happy Customers' },
              { value: '14+', label: 'Years of Excellence' },
              { value: '100%', label: 'Fresh & Handmade' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={scaleUp}>
                <p className="font-display text-3xl md:text-4xl font-bold text-brand-gold">{stat.value}</p>
                <p className="font-sans text-brand-light/70 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
