'use client'

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Building2, Award, Sparkles, Factory, Leaf, Package, Heart } from 'lucide-react';

export default function ClientsSection() {
  const scrollRef1 = useRef(null);

  const clients = [
    { name: 'GREEN CARBON FUELS & FEEDS PVT LTD', icon: Leaf, color: 'from-green-500 to-emerald-600' },
    { name: 'TESNA TECH PVT LTD', icon: Building2, color: 'from-blue-500 to-cyan-600' },
    { name: 'ALPLA INDIA PRIVATE LIMITED', icon: Package, color: 'from-purple-500 to-pink-600' },
    { name: 'MIRACLE WELL PACK (INDIA) PRIVATE LIMITED', icon: Package, color: 'from-orange-500 to-red-600' },
    { name: 'SHREE SHYAM PACKAGING', icon: Package, color: 'from-indigo-500 to-purple-600' },
    { name: 'TIWANA NUTRITION GLOBAL PVT LTD', icon: Heart, color: 'from-pink-500 to-rose-600' },
    { name: 'MIG FINCON PVT.LTD', icon: Building2, color: 'from-teal-500 to-green-600' },
    { name: 'JIVO WELLNESS PRIVATE LIMITED', icon: Heart, color: 'from-green-500 to-lime-600' },
    { name: 'EURAMED PHARMA PRIVATE LIMITED', icon: Heart, color: 'from-red-500 to-pink-600' },
    { name: 'KCM APPLIANCES PRIVATE LIMITED', icon: Factory, color: 'from-gray-600 to-gray-800' },
    { name: 'PIONEER BIOSCIENCE', icon: Heart, color: 'from-teal-500 to-cyan-600' },
    { name: 'SPECTRUM PACKAGING', icon: Package, color: 'from-violet-500 to-purple-600' },
    { name: 'NATURAL WELLNESS', icon: Leaf, color: 'from-emerald-500 to-green-600' },
    { name: 'FUTURE TECH SOLUTIONS', icon: Building2, color: 'from-blue-600 to-indigo-600' },
    { name: 'GREEN EARTH INDUSTRIES', icon: Leaf, color: 'from-lime-500 to-green-600' },
  ];

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="clients" className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      
      {/* Scrollbar hatane ke liye CSS */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 border border-green-200 px-5 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-bold text-sm">Trusted Nationwide</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Our Valued <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Clients</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Partnering with <span className="font-black text-green-600 text-3xl">50+</span> industry leaders
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          <button 
            onClick={() => scroll(scrollRef1, 'left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-14 h-14 bg-white rounded-full shadow-2xl items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll(scrollRef1, 'right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-14 h-14 bg-white rounded-full shadow-2xl items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollRef1}
            className="flex overflow-x-auto gap-4 scroll-smooth pb-8 hide-scrollbar"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {clients.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <div key={index} className="min-w-[240px] md:min-w-[220px] flex-shrink-0 scroll-snap-align-start">
                  <div className="group relative bg-white/70 backdrop-blur-xl p-6 rounded-2xl border-2 border-white shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-500 min-h-[180px] flex flex-col items-center justify-center overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${client.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-xs font-bold text-gray-800 group-hover:text-white transition-colors duration-500 text-center px-1">
                        {client.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}