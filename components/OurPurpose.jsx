"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function OurPurpose() {
  const [showAll, setShowAll] = useState(false);
  const visionItems = [
    {
      number: "01",
      title: "Zero Waste",
      desc: "Advocating for a world where waste is minimized and resources are conserved.",
      color: "from-green-500 to-green-700",
      textColor: "text-green-600",
      bgImage: "/image/zero-waste.jpeg",
      overlayColor: "bg-yellow-400/95",
    },
    {
      number: "02",
      title: "Sustainable Solutions",
      desc: "Implementing eco-friendly practices that balance economic and environmental needs.",
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-600",
      bgImage: "/image/iwm.webp",
      overlayColor: "bg-blue-500/95",
    },
    {
      number: "03",
      title: "Circular Economy",
      desc: "Closing the loop by recycling and repurposing materials for a greener tomorrow.",
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      bgImage: "/image/iwm-2.webp",
      overlayColor: "bg-orange-500/95",
    },
  ];

  const missionItems = [
    {
      title: "Simplify EPR Compliance",
      description:
        "Making EPR compliance easy and efficient for PIBOs and producers.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Environmental Practices",
      description:
        "Promoting environmentally sound waste management practices.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Reliable Waste Supply",
      description:
        "Supporting recyclers and PWPs with consistent waste supply.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: "Transparency & Traceability",
      description: "Ensuring complete transparency and regulatory adherence.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Sustainability Goals",
      description: "Contributing actively toward India's sustainability goals.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];
  const visibleItems = showAll ? missionItems : missionItems.slice(0, 3);

  return (
    <section
      id="purpose"
      className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
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
              How <span className="text-green-600">Sustainable Solutions</span>{" "}
              for We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are more than a service provider—we are a compliance and
              sustainability partner. Our team consists of industry
              professionals with strong regulatory knowledge and hands-on
              experience in waste management operations.
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
              <p className="opacity-90 font-medium">
                Trusted Partners Nationwide
              </p>
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
              <div
                className={`absolute inset-0 z-10 ${item.overlayColor} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
              />

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
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>

        {/* --- PART 3: MISSION (THE "HOW") --- */}
        <div className="relative py-20 md:py-24 overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/image/Brand-Owners.jpeg')` }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-green-900/80 to-gray-900/85"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Vision Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="text-green-300 font-semibold text-sm tracking-wide">
                  OUR VISION
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Leading India's Circular Economy
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                To become a nationally recognized leader in waste management and
                EPR compliance by enabling a circular economy where waste is
                responsibly managed, recycled, and reintegrated into the value
                chain.
              </p>
            </div>

            {/* Mission Section */}
            <div className="max-w-3xl mx-auto text-center mb-10 mt-16">
              <div className="inline-block bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="text-green-300 font-semibold text-sm tracking-wide">
                  OUR MISSION
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Commitment to Sustainable Growth
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                We are dedicated to transforming waste management through
                innovation, compliance, and environmental responsibility.
              </p>
            </div>

            {/* Mission Cards - 5 items with responsive grid */}
            <div className="py-16">
              <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
                {visibleItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-500 text-white rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-700 text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* View More Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-lg"
                >
                  {showAll ? "View Less" : "View More"}
                  {showAll ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5 animate-bounce" />
                  )}
                </button>
              </div>
            </div>

            {/* Bottom highlight text */}
            <div className="max-w-2xl mx-auto text-center mt-3">
              <p className="text-green-300 font-semibold text-base md:text-lg">
                Building a{" "}
                <span className="text-white">Sustainable Tomorrow</span> through
                compliance, transparency, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
