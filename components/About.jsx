'use client'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
            About <span className="text-green-600">Future Solutions</span>
          </h2>
          <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid: Gap thoda kam kiya hai (gap-8) */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1 */}
          <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-green-100">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
              Pioneering Sustainable Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We are leading the charge in India's waste management revolution. 
              Focused on delivering <span className="text-green-600 font-medium">sustainable solutions</span>, 
              we are committed to regenerating value through innovative development and eco-friendly tech.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-100">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
              Comprehensive Service Offering
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Transform the landscape of recycling with our state-of-the-art material trading services. 
              Pioneering <span className="text-blue-600 font-medium">impactful EPR projects</span>, we are the driving force 
              behind sustainability in e-waste and plastic solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}