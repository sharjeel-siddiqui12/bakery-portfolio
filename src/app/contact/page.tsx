'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react'
import { CONTACT_INFO, WHATSAPP_URL } from '@/lib/constants'
import { fadeUp, slideLeft, slideRight, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1600"
          alt="Contact Us"
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
          <p className="font-sans text-brand-gold text-sm uppercase tracking-widest mb-3">
            Home &mdash; Contact
          </p>
          <h1 className="font-display italic text-5xl md:text-6xl text-brand-ink font-bold">
            Get In Touch
          </h1>
          <p className="font-sans text-brand-ink/80 mt-4 text-lg">
            We&apos;d love to hear from you
          </p>
        </motion.div>
      </section>

      {/* Contact Layout */}
      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="font-display text-3xl text-brand-ink font-semibold mb-8">
                Contact Information
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-brand-ink uppercase tracking-wider">Location</p>
                    <p className="font-sans text-brand-muted mt-1">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-brand-ink uppercase tracking-wider">Phone</p>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="font-sans text-brand-muted mt-1 hover:text-brand-gold transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-brand-ink uppercase tracking-wider">WhatsApp</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-brand-muted mt-1 hover:text-brand-gold transition-colors">
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-brand-ink uppercase tracking-wider">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="font-sans text-brand-muted mt-1 hover:text-brand-gold transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-brand-ink uppercase tracking-wider">Hours</p>
                    <p className="font-sans text-brand-muted mt-1">{CONTACT_INFO.hours.weekday}</p>
                    <p className="font-sans text-brand-muted">{CONTACT_INFO.hours.weekend}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <span className="font-sans text-brand-muted text-sm">Follow us:</span>
                <a
                  href={CONTACT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-950 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-950 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={slideRight}
            >
              <div className="bg-brand-ivory rounded-xl p-8 md:p-10 border border-brand-gold/8">
                <h2 className="font-display text-2xl text-brand-ink font-semibold mb-8">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden border border-brand-gold/8"
          >
            <iframe
              src={CONTACT_INFO.mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hina Bakers location on Google Maps"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}
