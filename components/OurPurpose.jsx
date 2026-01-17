"use client";

export default function OurPurpose() {
  const visionItems = [
    {
      number: "01",
      title: "Zero Waste",
      desc: "Advocating for a world where waste is minimized and resources are conserved.",
      color: "from-green-500 to-green-700",
      textColor: "text-green-600",
      bgImage: "/image/zero-waste.jpeg",
      overlayColor: "bg-yellow-400/95"
    },
    {
      number: "02",
      title: "Sustainable Solutions",
      desc: "Implementing eco-friendly practices that balance economic and environmental needs.",
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-600",
      bgImage: "/image/iwm.webp",
      overlayColor: "bg-blue-500/95"
    },
    {
      number: "03",
      title: "Circular Economy",
      desc: "Closing the loop by recycling and repurposing materials for a greener tomorrow.",
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      bgImage: "/image/iwm-2.webp",
      overlayColor: "bg-orange-500/95"
    },
  ];

  const missionItems = [
    {
      title: "Stakeholder Collaboration",
      description: "Bring stakeholders together to transform waste management.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "Smart Alliances",
      description: "Commitment to closing gaps in the supply chain.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      title: "Open Communication",
      description: "Minimizing waste and maximizing resource use.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      ),
    },
  ];

  return (
    <section id="purpose" className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Our Purpose
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* --- PART 1: ABOUT (THE "WHO") --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Pioneering{" "}
              <span className="text-green-600">Sustainable Solutions</span> for
              India's Future
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are leading the charge in India's waste management revolution.
              Future Solutions is committed to regenerating value through
              innovative development and eco-friendly tech, transforming the way
              we handle materials.
            </p>
            <div className="flex gap-4 border-l-4 border-green-500 pl-6 py-2 bg-green-50/50 rounded-r-lg">
              <p className="text-gray-800 font-medium italic">
                "We aim to lead India in responsible waste management through
                innovative EPR strategies."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-5xl font-bold mb-2">50+</h4>
              <p className="opacity-90 font-medium">Trusted Partners Nationwide</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-white shadow-2xl sm:mt-8 transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-5xl font-bold mb-2">Eco</h4>
              <p className="opacity-90 font-medium">Friendly Technologies</p>
            </div>
          </div>
        </div>

        {/* --- PART 2: VISION (THE "WHAT") --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {visionItems.map((item, index) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ minHeight: "300px" }}
            >
              {/* Background Image - Always visible */}
              <div
                className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Gradient Overlay - Changes on hover */}
              <div className={`absolute inset-0 z-10 ${item.overlayColor} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
              
              {/* Dark overlay for better text readability when not hovering */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

              {/* Content Layer */}
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                {/* Number badge */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  {item.number}
                </div>
                
                {/* Title - Always white for readability */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-lg">
                  {item.title}
                </h3>
                
                {/* Description - White with good shadow */}
                <p className="text-white/90 leading-relaxed text-sm md:text-base drop-shadow-md">
                  {item.desc}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* --- PART 3: MISSION (THE "HOW") --- */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our Collaborative Mission
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Promoting collaboration to lead waste management transformation
                through smart alliances and open communication.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {missionItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Abstract background shapes */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}