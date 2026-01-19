"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

/**
 * Custom Hook: useCountUp
 * Numbers ko 0 se target value tak smoothly animate karta hai.
 */
function useCountUp(endValue, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  return count;
}

export default function Hero() {
  // 1) Counting Logic initialize ho raha hai
  const projectsCount = useCountUp(500);
  const tonsCount = useCountUp(100); // Display logic adds the 'K'
  const partnersCount = useCountUp(50);

  return (
    <section  className="relative min-h-screen flex items-center justify-center text-white overflow-hidden font-sans">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920')",
        }}
      />

      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-right-center hidden lg:block"
        style={{
          backgroundImage: "url('/image/hero-section-bg-image.webp')",
        }}
      />

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 lg:bg-gradient-to-l lg:from-black/80 lg:via-black/50 lg:to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent animate-pulse"></div>

      {/* --- CONTENT SECTION --- */}
      
      <div className="relative container mx-auto px-6 py-20 w-full z-10 flex justify-center lg:justify-start">
        <div className="max-w-3xl text-center lg:text-left">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-300 text-sm font-medium">
              Leading Waste Management Solutions
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tight leading-[1.1]">
            Future{" "}
            <span className="text-green-400 inline-block hover:scale-105 transition-transform duration-300">
              Solutions
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-200 mb-6 flex items-center justify-center lg:justify-start gap-3">
            Sustainable Waste Management in India
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed text-gray-100 max-w-2xl mx-auto lg:mx-0">
            Revolutionizing waste management in India by transforming waste into
            valuable resources through sustainable, innovative practices.
          </p>

          {/* 2) Buttons with Links & Click Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            {/* Primary Button */}
            <Link href='#footer' className="no-underline" >
              <button
                className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-10 rounded-2xl 
                           transition-all duration-300 shadow-[0_10px_30px_rgba(34,197,94,0.4)] 
                           transform hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(34,197,94,0.5)] active:scale-95 text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Partnerships
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </Link>

            {/* Secondary Button */}
            <Link href='#purpose' className="no-underline">
              <button
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50
                           text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 text-center
                           hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] transform hover:-translate-y-1 active:scale-95"
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <svg
                    className="w-5 h-5 group-hover:rotate-90 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* 1) Stats with Counting Animation */}
          <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-center lg:text-left">
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-green-400 group-hover:scale-110 transition-transform duration-300">
                {projectsCount}+
              </div>
              <div className="text-sm text-gray-300 mt-1 uppercase tracking-wider font-medium">
                Projects Completed
              </div>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-green-400 group-hover:scale-110 transition-transform duration-300">
                {tonsCount}K+
              </div>
              <div className="text-sm text-gray-300 mt-1 uppercase tracking-wider font-medium">
                Tons Recycled
              </div>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-green-400 group-hover:scale-110 transition-transform duration-300">
                {partnersCount}+
              </div>
              <div className="text-sm text-gray-300 mt-1 uppercase tracking-wider font-medium">
                City Partners
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Embedded Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}