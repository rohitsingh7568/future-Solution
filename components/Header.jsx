// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const navLinks = [
//     { name: 'Our Purpose', href: '#purpose' },
//     { name: 'Solutions', href: '#solutions' },
//     { name: 'EPR', href: '#epr' },
//     { name: 'Clients', href: '#clients' },
//     { name: 'Contact', href: '#footer' },
//   ]

//   // Smooth Scroll Helper for Mobile
//   const handleScroll = (e, href) => {
//     e.preventDefault(); // Default jump ko rokne ke liye
//     setIsMenuOpen(false); // Menu pehle band karein
    
//     // Thoda delay taaki menu animation smooth lage, phir scroll karein
//     setTimeout(() => {
//       const element = document.querySelector(href);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 300);
//   };

//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: { duration: 0.3, ease: 'easeInOut' }
//     },
//     open: {
//       opacity: 1,
//       height: 'auto',
//       transition: { duration: 0.4, ease: 'easeOut' }
//     }
//   }

//   const linkVariants = {
//     closed: { x: -20, opacity: 0 },
//     open: (i) => ({
//       x: 0,
//       opacity: 1,
//       transition: { delay: i * 0.1 }
//     })
//   }

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-[100]">
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           <div
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="text-2xl font-bold text-green-600 cursor-pointer"
//           >
//             Future Solutions
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-700 hover:text-green-600 transition-colors font-medium"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-700 focus:outline-none p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle Menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isMenuOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Animated Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial="closed"
//               animate="open"
//               exit="closed"
//               variants={menuVariants}
//               className="md:hidden overflow-hidden bg-white"
//             >
//               <div className="flex flex-col space-y-4 pt-4 pb-6">
//                 {navLinks.map((link, i) => (
//                   <motion.a
//                     custom={i}
//                     variants={linkVariants}
//                     key={link.name}
//                     href={link.href}
//                     // Yahan function call ho raha hai click par
//                     onClick={(e) => handleScroll(e, link.href)}
//                     className="text-lg text-gray-700 hover:text-green-600 transition-colors font-medium border-b border-gray-50 pb-2 px-2 active:bg-green-50"
//                   >
//                     {link.name}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   )
// }
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Our Purpose', href: '#purpose' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'EPR', href: '#epr' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#footer' },
  ]

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

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
      transition: { delay: i * 0.1 }
    })
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-[100]">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* --- MOBILE LOGO (Sirf small screens par dikhega) --- */}
            <div className="relative w-32 h-10 md:hidden flex-shrink-0">
              <Image
                src="/image/mobile-logo.png" // Apne mobile logo ka path yahan dalein
                alt="Mobile Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* --- LAPTOP/DESKTOP LOGO (md:block se laptop par dikhega, mobile par hidden) --- */}
            <div className="relative hidden md:block w-32 h-12 flex-shrink-0">
              <Image
                src="/image/future-solution-logo.png" // Apne desktop logo ka path
                alt="Future Solutions Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
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
            className="md:hidden text-gray-700 focus:outline-none p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
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
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    custom={i}
                    variants={linkVariants}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-lg text-gray-700 hover:text-green-600 transition-colors font-medium border-b border-gray-50 pb-2 px-2 active:bg-green-50"
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