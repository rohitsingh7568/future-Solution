// 'use client'

// export default function Hero() {
//   return (
//     <section
//       className="relative min-h-screen lg:min-h-[90vh] flex items-center justify-center lg:justify-end text-white bg-cover bg-center lg:bg-[right_center]"
//       style={{
//         backgroundImage: "url('/image/hero-section-bg-image.webp')",
//       }}
//     >
//       {/* Overlay: Changed gradient to flow from right on desktop */}
//       <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-l lg:from-black/70 lg:via-black/40 lg:to-transparent"></div>

//       <div className="relative container mx-auto px-6 w-full z-10 flex justify-center lg:justify-start">
//         {/* max-w-3xl remains, but text is now aligned right on large screens */}
//         <div className="max-w-3xl text-center lg:text-left">
//           <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl tracking-tight leading-tight">
//             Future <span className="text-green-400">Solutions</span>
//           </h1>

//           <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-200 mb-6 max-w-xl lg:ml-auto">
//             Sustainable Waste Management in India
//           </h2>

//           <p className="text-base md:text-lg lg:text-xl mb-10 leading-relaxed text-gray-200 max-w-xl lg:ml-auto">
//             Revolutionizing waste management in India by transforming waste into 
//             valuable resources through sustainable, innovative practices.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <button
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl 
//                          transition-all duration-300 shadow-[0_10px_20px_rgba(34,197,94,0.3)] 
//                          transform hover:-translate-y-1 text-center"
//             >
//               Explore Partnerships
//             </button>
            
//             <button
//               className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 
//                          text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 text-center"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image - Different positioning for mobile and desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center lg:bg-right-center scale-105"
        style={{
          backgroundImage: "url('/image/hero-section-bg-image.webp')",
        }}
      />
      
      {/* Animated Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 lg:bg-gradient-to-l lg:from-black/80 lg:via-black/50 lg:to-transparent"></div>
      
      {/* Subtle animated glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent animate-pulse"></div>

      <div className="relative container mx-auto px-6 py-20 w-full z-10 flex justify-center lg:justify-start">
        <div className="max-w-3xl text-center lg:text-left">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-300 text-sm font-medium">Leading Waste Management Solutions</span>
          </div>

          {/* Main Heading with better spacing */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tight leading-[1.1]">
            Future <span className="text-green-400 inline-block hover:scale-105 transition-transform">Solutions</span>
          </h1>

          {/* Subheading with icon */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-200 mb-6 flex items-center justify-center lg:justify-start gap-3">
            <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
            </svg>
            Sustainable Waste Management in India
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed text-gray-100 max-w-2xl mx-auto lg:mx-0">
            Revolutionizing waste management in India by transforming waste into 
            valuable resources through sustainable, innovative practices.
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-10 rounded-2xl 
                         transition-all duration-300 shadow-[0_10px_30px_rgba(34,197,94,0.4)] 
                         transform hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(34,197,94,0.5)] text-center overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Partnerships
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50
                         text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 text-center
                         hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                Learn More
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-center lg:text-left">
            <div className="group">
              <div className="text-3xl font-black text-green-400 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm text-gray-300 mt-1">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-3xl font-black text-green-400 group-hover:scale-110 transition-transform">100K+</div>
              <div className="text-sm text-gray-300 mt-1">Tons Recycled</div>
            </div>
            <div className="group">
              <div className="text-3xl font-black text-green-400 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-sm text-gray-300 mt-1">City Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

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
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}