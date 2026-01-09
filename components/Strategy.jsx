'use client'

export default function EPRCombined() {
  const stakeholders = [
    { title: "Producers", desc: "Manufacturers responsible for end-of-life management.", icon: "🧪" },
    { title: "Importers", desc: "Entities bringing products into the market.", icon: "📦" },
    { title: "Brand Owners", desc: "Companies managing their waste footprint.", icon: "🏷️" },
  ];

  const strategies = [
    { title: 'Collection', desc: 'Efficient waste collection processes.', color: 'from-green-500 to-green-600' },
    { title: 'Processing', desc: 'Advanced recycling technologies.', color: 'from-blue-500 to-blue-600' },
    { title: 'Recycling', desc: 'Repurposing waste into materials.', color: 'from-orange-500 to-orange-600' },
    { title: 'Compliance', desc: 'Meeting regulatory standards.', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <section id="epr" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- PART 1: THE UNDERSTANDING (Left-Right Split) --- */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="lg:w-1/3 sticky top-24">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Understanding <span className="text-green-600">EPR</span>
            </h2>
            <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed italic">
                "EPR requires producers to manage products sustainably throughout their useful lifespan under PWM Rules."
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {stakeholders.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 2: THE STRATEGY (Horizontal Steps) --- */}
        <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our EPR Strategy</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {strategies.map((strategy, index) => (
              <div key={index} className="relative group text-center">
                {/* Connector Line (Desktop Only) */}
                {index !== strategies.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 border-t-2 border-dashed border-gray-700"></div>
                )}
                
                <div className={`relative w-16 h-16 bg-gradient-to-br ${strategy.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                  0{index + 1}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{strategy.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-4">{strategy.description}</p>
              </div>
            ))}
          </div>
          
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-[100px]"></div>
        </div>

      </div>
    </section>
  );
}