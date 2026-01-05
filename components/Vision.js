'use client'

export default function Vision() {
  const visionItems = [
    {
      number: '01',
      title: 'Zero Waste',
      desc: 'Advocating for a world where waste is minimized and resources are conserved.',
      color: 'from-green-500 to-green-700',
      lightColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      number: '02',
      title: 'Sustainable Solutions',
      desc: 'Implementing eco-friendly practices that balance economic and environmental needs.',
      color: 'from-blue-500 to-blue-700',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      number: '03',
      title: 'Circular Economy',
      desc: 'Closing the loop by recycling and repurposing materials for a greener tomorrow.',
      color: 'from-orange-500 to-orange-600',
      lightColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
  ]

  return (
    <section id="vision" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-green-600">Vision</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We aim to lead India in responsible waste management, creating a cleaner, 
            greener future through innovative <span className="font-semibold text-gray-800 text-xl">EPR strategies</span>.
          </p>
          <div className="w-24 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {visionItems.map((item) => (
            <div
              key={item.number}
              className="group relative bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 
                         hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Decorative Background Number */}
              <span className="absolute top-4 right-8 text-8xl font-black text-gray-50 group-hover:text-gray-100 transition-colors pointer-events-none">
                {item.number}
              </span>

              {/* Icon/Number Circle */}
              <div className={`w-20 h-20 bg-gradient-to-br ${item.color} text-white rounded-2xl 
                              flex items-center justify-center text-3xl font-bold mb-4 
                              shadow-lg transform group-hover:rotate-6 transition-transform duration-300 z-10`}>
                {item.number}
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold mb-4 ${item.textColor} z-10`}>
                {item.title}
              </h3>
              
              <div className={`w-12 h-1 ${item.lightColor} mb-6 rounded-full group-hover:w-20 transition-all duration-500`}></div>

              <p className="text-gray-600  leading-relaxed z-10">
                {item.desc}
              </p>

          
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-b-[2rem] opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}