"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  slideLeft,
  slideRight,
  staggerContainer,
  fadeUp,
} from "@/lib/animations";
import { ABOUT_STATS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function AboutSnippet() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-ivory/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={slideLeft}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-brand-gold/20 rounded-xl" />
              <div className="relative h-[520px] md:h-[620px] rounded-xl overflow-hidden">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1687886026544-a07433c0ee2a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Hina Bakers kitchen"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 via-transparent to-transparent" />
              </div>
              {/* Est Badge */}
              <div className="absolute -bottom-5 -right-5 md:bottom-8 md:right-8 bg-brand-950 text-brand-gold px-6 py-4 rounded-lg border border-brand-gold/20">
                <p className="font-serif italic text-xs uppercase tracking-widest text-brand-gold/60">
                  Established
                </p>
                <p className="font-display text-3xl font-bold">2010</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="text-brand-gold font-sans uppercase tracking-[0.35em] text-xs font-medium"
            >
              Our Story
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif italic text-4xl md:text-5xl text-brand-ink mt-4 mb-8 leading-tight"
            >
              Baking Happiness Since 2010
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-brand-muted leading-relaxed mb-4"
            >
              Hina Bakers was born from a mother&apos;s dream to bring
              world-class baking to Karachi. What started in a small home
              kitchen with a single oven has blossomed into one of the
              city&apos;s most beloved bakeries.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-sans text-brand-muted leading-relaxed mb-4"
            >
              Every cake that leaves our kitchen carries with it a legacy of
              handcrafted quality, premium ingredients sourced from around the
              world, and the warmth of a family that believes baking is an art
              form.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-sans text-brand-muted leading-relaxed mb-10"
            >
              After 14 years and over 10,000 happy customers, our passion burns
              brighter than ever. From intimate birthday celebrations to grand
              wedding receptions, we pour our hearts into every creation.
            </motion.p>

            {/* Gold Divider */}
            <motion.div variants={fadeUp} className="gold-divider mb-10" />

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-10 mb-10"
            >
              {ABOUT_STATS.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-brand-gold">
                    {stat.value}
                  </p>
                  <p className="font-sans text-brand-muted text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/about">
                <Button variant="secondary">Read Our Full Story</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
