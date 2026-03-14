'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO, WHATSAPP_URL } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'

const specialties = [
  'Wedding Cakes',
  'Birthday Cakes',
  'Custom Cakes',
  'Cupcakes',
  'Pastries',
  'Corporate Orders',
]

export default function Footer() {
  return (
    <footer className="bg-brand-950 luxury-dark-bg relative overflow-hidden">
      {/* Top ornate line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <motion.div variants={fadeUp}>
            <Link href="/" className="inline-block group">
              <span className="font-display italic text-3xl text-brand-gold group-hover:text-brand-goldlt transition-colors duration-500">
                Hina Bakers
              </span>
            </Link>
            <p className="font-serif italic text-brand-gold/40 mt-1 text-lg">
              Baking happiness since 2010
            </p>
            <p className="font-sans text-brand-ink/70 mt-4 text-sm leading-relaxed">
              Karachi&apos;s premier artisan bakery crafting handmade cakes and pastries with love, premium ingredients, and 14+ years of expertise.
            </p>
            <div className="flex items-center gap-5 mt-6">
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold/70 hover:text-brand-gold transition-colors duration-500"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold/70 hover:text-brand-gold transition-colors duration-500"
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold/70 hover:text-brand-gold transition-colors duration-500"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4.5 h-4.5" />
              </a>
            </div>
          </motion.div>

          {/* Column 2 — Quick Links */}
          <motion.div variants={fadeUp}>
            <h3 className="font-sans text-brand-gold text-[10px] font-medium mb-6 uppercase tracking-[0.2em]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="font-sans text-brand-ink/70 hover:text-brand-gold transition-colors duration-500 text-sm"
                >
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-brand-ink/70 hover:text-brand-gold transition-colors duration-500 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Specialties */}
          <motion.div variants={fadeUp}>
            <h3 className="font-sans text-brand-gold text-[10px] font-medium mb-6 uppercase tracking-[0.2em]">
              Our Specialties
            </h3>
            <ul className="space-y-3">
              {specialties.map((item) => (
                <li key={item}>
                  <span className="font-sans text-brand-ink/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 — Contact */}
          <motion.div variants={fadeUp}>
            <h3 className="font-sans text-brand-gold text-[10px] font-medium mb-6 uppercase tracking-[0.2em]">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold/50 mt-1 shrink-0" />
                <span className="font-sans text-brand-ink/70 text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold/50 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="font-sans text-brand-ink/70 hover:text-brand-gold transition-colors duration-500 text-sm">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-brand-gold/50 shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-brand-ink/70 hover:text-brand-gold transition-colors duration-500 text-sm">
                  {CONTACT_INFO.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold/50 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-sans text-brand-ink/70 hover:text-brand-gold transition-colors duration-500 text-sm">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-gold/50 mt-1 shrink-0" />
                <div className="font-sans text-brand-ink/70 text-sm">
                  <p>{CONTACT_INFO.hours.weekday}</p>
                  <p>{CONTACT_INFO.hours.weekend}</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-brand-gold/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center font-sans text-brand-ink/70 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Hina Bakers. All rights reserved. | Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
