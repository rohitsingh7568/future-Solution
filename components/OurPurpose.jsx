"use client";

export default function OurPurpose() {
  const visionItems = [
    {
      number: "01",
      title: "Zero Waste",
      desc: "Advocating for a world where waste is minimized and resources are conserved.",
      color: "from-green-500 to-green-700",
      textColor: "text-green-600",
    },
    {
      number: "02",
      title: "Sustainable Solutions",
      desc: "Implementing eco-friendly practices that balance economic and environmental needs.",
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-600",
    },
    {
      number: "03",
      title: "Circular Economy",
      desc: "Closing the loop by recycling and repurposing materials for a greener tomorrow.",
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-600",
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
    <section id="purpose" className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Our Purpose
        </h2>
        <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
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
            <div className="flex gap-4 border-l-4 border-green-500 pl-6 py-2 bg-green-50/50">
              <p className="text-gray-800 font-medium italic">
                "We aim to lead India in responsible waste management through
                innovative EPR strategies."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-600 p-8 rounded-2xl text-white shadow-xl">
              <h4 className="text-4xl font-bold mb-2">50+</h4>
              <p className="opacity-90">Trusted Partners Nationwide</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl text-white shadow-xl sm:mt-8">
              <h4 className="text-4xl font-bold mb-2">Eco</h4>
              <p className="opacity-90">Friendly Technologies</p>
            </div>
          </div>
        </div>

        {/* --- PART 2: VISION (THE "WHAT") --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {visionItems.map((item) => (
            <div
              key={item.number}
              className="group p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center font-bold text-xl mb-6`}
              >
                {item.number}
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${item.textColor}`}>
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* --- PART 3: MISSION (THE "HOW") --- */}
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Collaborative Mission
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Promoting collaboration to lead waste management transformation
                through smart alliances and open communication.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {missionItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 text-green-400">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Abstract background shape */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
