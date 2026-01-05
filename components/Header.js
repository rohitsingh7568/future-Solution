'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'EPR', href: '#epr' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ]

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
            className="md:hidden text-gray-700"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}