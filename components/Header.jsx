'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Our Purpose', href: '#purpose' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'EPR', href: '#epr' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#footer' },
  ]

  // Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 } // Staggered effect
    })
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">
            Future Solutions
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Animated Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    custom={i}
                    variants={linkVariants}
                    key={link.name}
                    href={link.href}
                    className="text-lg text-gray-700 hover:text-green-600 transition-colors font-medium border-b border-gray-100 pb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}