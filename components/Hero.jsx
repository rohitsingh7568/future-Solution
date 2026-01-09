'use client'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen lg:min-h-[90vh] flex items-center justify-center lg:justify-end text-white bg-cover bg-center lg:bg-[right_center]"
      style={{
        backgroundImage: "url('/image/hero-section-bg-image.webp')",
      }}
    >
      {/* Overlay: Changed gradient to flow from right on desktop */}
      <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-l lg:from-black/70 lg:via-black/40 lg:to-transparent"></div>

      <div className="relative container mx-auto px-6 w-full z-10 flex justify-center lg:justify-start">
        {/* max-w-3xl remains, but text is now aligned right on large screens */}
        <div className="max-w-3xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl tracking-tight leading-tight">
            Future <span className="text-green-400">Solutions</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-200 mb-6 max-w-xl lg:ml-auto">
            Sustainable Waste Management in India
          </h2>

          <p className="text-base md:text-lg lg:text-xl mb-10 leading-relaxed text-gray-200 max-w-xl lg:ml-auto">
            Revolutionizing waste management in India by transforming waste into 
            valuable resources through sustainable, innovative practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl 
                         transition-all duration-300 shadow-[0_10px_20px_rgba(34,197,94,0.3)] 
                         transform hover:-translate-y-1 text-center"
            >
              Explore Partnerships
            </button>
            
            <button
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 
                         text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 text-center"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}