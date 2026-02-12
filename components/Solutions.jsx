"use client";
import React, { useState } from "react";
import {
  Recycle,
  Zap,
  Battery,
  Truck,
  Droplet,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const solutions = [
    {
      number: "01",
      title: "Plastic Waste Management",
      description: "Supporting PIBOs in meeting EPR obligations through compliant sourcing, verified recycling, and transparent credit generation.",
      color: "from-emerald-400 via-green-500 to-teal-600",
      shadow: "shadow-emerald-500/30",
      icon: Recycle,
      imageUrl: "/image/material-trading.jpeg",
      stats: "1,00,000+ MT Fulfilled",
    },
    {
      number: "02",
      title: "E-Waste Management",
      description: "End-to-end services for safe collection, dismantling, and recycling under E-Waste Management Rules with resource recovery.",
      color: "from-blue-400 via-cyan-500 to-indigo-600",
      shadow: "shadow-blue-500/30",
      icon: Zap,
      imageUrl: "/image/E-waste Management.jpeg",
      stats: "CPCB & SPCB Aligned",
    },
    {
      number: "03",
      title: "Battery Waste Management",
      description: "Comprehensive solutions for spent batteries in line with regulatory rules, ensuring safe handling of hazardous materials.",
      color: "from-amber-400 via-orange-500 to-red-600",
      shadow: "shadow-orange-500/30",
      icon: Battery,
      imageUrl: "/image/EPR Projects.jpeg",
      stats: "Authorized Facilities",
    },
    {
      number: "04",
      title: "Tyre Waste Management",
      description: "Structured EPR solutions facilitating collection, channelization, and recycling through verified certificate systems.",
      color: "from-purple-400 via-fuchsia-500 to-pink-600",
      shadow: "shadow-purple-500/30",
      icon: Truck,
      imageUrl: "/image/Tyre Waste Management.jpeg",
      stats: "Verified Certificates",
    },
    {
      number: "05",
      title: "Used Mineral Oil Management",
      description: "Safe collection, re-refining, and recycling of hazardous used oil with full traceability and statutory reporting.",
      color: "from-cyan-400 via-sky-500 to-blue-600",
      shadow: "shadow-cyan-500/30",
      icon: Droplet,
      imageUrl: "/image/Used Mineral Oil Management.jpeg",
      stats: "Hazardous Waste Compliant",
    },
  ];

  const displayedSolutions = showAll ? solutions : solutions.slice(0, 3);

  return (
    <div id="solutions" className="min-h-screen bg-slate-950 py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Solutions <span className="text-emerald-500 font-extrabold underline decoration-emerald-500/30 underline-offset-8">Portfolio</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
            From registration and documentation to annual returns and credit fulfillment, we manage the entire compliance lifecycle.
          </p>
        </div>

        {/* Flex Grid for Centering Last Cards */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-14">
          {displayedSolutions.map((solution, index) => {
            const Icon = solution.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className="group relative w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] h-[380px] md:h-[440px] rounded-[2.5rem] overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image & Overlays */}
                <div className="absolute inset-0">
                  <img src={solution.imageUrl} alt={solution.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-10 group-hover:opacity-30 transition-opacity`}></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white font-bold">
                      {solution.number}
                    </div>
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className={`bg-black/40 backdrop-blur-2xl border border-white/10 p-5 md:p-6 rounded-3xl transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-3">
                      <span className="text-[10px] text-emerald-300 font-bold uppercase">{solution.stats}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed line-clamp-3">{solution.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white font-bold hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            {showAll ? "Show Less" : "Explore All Solutions"}
            {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 animate-bounce" />}
          </button>
        </div>
      </div>
    </div>
  );
}