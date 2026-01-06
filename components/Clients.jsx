'use client'

import React, { useRef } from 'react';

export default function Clients() {
  const scrollRef = useRef(null);

  const clients = [
    { name: 'GREEN CARBON FUELS & FEEDS PVT LTD', logo: '/logos/green-carbon.png' },
    { name: 'TESNA TECH PVT LTD', logo: '/logos/tesna.png' },
    { name: 'ALPLA INDIA PRIVATE LIMITED', logo: '/logos/alpla.png' },
    { name: 'MIRACLE WELL PACK (INDIA) PRIVATE LIMITED', logo: '/logos/miracle.png' },
    { name: 'SHREE SHYAM PACKAGING', logo: '/logos/shyam.png' },
    { name: 'TIWANA NUTRITION GLOBAL PVT LTD', logo: '/logos/tiwana.png' },
    { name: 'MIG FINCON PVT.LTD', logo: '/logos/mig.png' },
    { name: 'JIVO WELLNESS PRIVATE LIMITED', logo: '/logos/jivo.png' },
    { name: 'EURAMED PHARMA PRIVATE LIMITED', logo: '/logos/euramed.png' },
    { name: 'KCM APPLIANCES PRIVATE LIMITED', logo: '/logos/kcm.png' },
  ];

  // Laptop scroll function
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -350, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section (Same as your original) */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Valued  <span className="text-green-600">Clients</span>
            </h2>
            <p className="text-lg text-gray-600 flex items-center justify-center">
              With<span className="font-bold text-gray-800 text-xl"> 50+</span> trusted partners nationwide.
            </p>
          </div>

        </div>

        {/* Swipeable Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide pb-10"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[240px] flex-shrink-0 scroll-snap-align-start"
            >
              <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 
                             hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                             flex flex-col items-center justify-center text-center min-h-[180px]">
                
                {/* Logo Placeholder (Same Circle UI) */}
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4 
                                group-hover:bg-green-600 transition-colors duration-300">
                  <span className="text-green-600 group-hover:text-white font-bold text-2xl">
                    {client.name.charAt(0)}
                  </span>
                </div>
                
                <p className="text-sm font-semibold text-gray-700 group-hover:text-green-700 transition-colors">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mt-2">
          <p className="text-gray-400 text-xs font-bold animate-pulse">SWIPE LEFT/RIGHT →</p>
        </div>

        {/* Bottom Badge (Same as original) */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-green-100">
            <span className="flex h-3 w-3 rounded-full bg-green-500 mr-3 animate-pulse"></span>
            <span className="text-gray-700 font-medium text-sm">Joining hands for a greener future</span>
          </div>
        </div>
      </div>

      {/* Tailwind CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scroll-snap-align-start { scroll-snap-align: start; }
      `}</style>
    </section>
  );
}