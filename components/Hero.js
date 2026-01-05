export default function Hero() {
  return (
    <section
      className="relative min-h-screen lg:min-h-[90vh] flex items-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/image/recycling-zero-waste-management-concept-260nw-2450498047.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:via-black/30 lg:to-transparent"></div>

      <div className="relative container mx-auto px-6 w-full z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl tracking-tight leading-tight">
            Future <span className="text-green-400">Solutions</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-200 mb-6 max-w-xl">
            Sustainable Waste Management in India
          </h2>

          <p className="text-base md:text-lg lg:text-xl mb-10 leading-relaxed text-gray-200 max-w-xl">
            Revolutionizing waste management in India by transforming waste into 
            valuable resources through sustainable, innovative practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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