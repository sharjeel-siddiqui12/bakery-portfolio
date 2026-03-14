'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function WhatsAppButton() {
  const [show, setShow] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <div className="relative">
            {/* Tooltip */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-brand-950 text-brand-ink text-xs font-sans px-4 py-2 rounded-lg border border-brand-gold/10 shadow-lg"
                >
                  Chat with us on WhatsApp!
                </motion.div>
              )}
            </AnimatePresence>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              aria-label="Chat on WhatsApp"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </motion.div>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
