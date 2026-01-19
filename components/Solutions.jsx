
"use client";
import React, { useState } from "react";
import Link from "next/link"
import {
  Recycle,
  Zap,
  Target,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const solutions = [
    {
      number: "1",
      title: "Material Trading",
      description: "Trading of plastic scrap and recycled granules.",
      color: "from-green-500 to-emerald-600",
      shadow: "shadow-green-500/50",
      icon: Recycle,
      imageUrl: "/image/material-trading.jpeg", // Plastic recycling
      stats: "500+ Tons",
    },
    {
      number: "2",
      title: "E-waste Management",
      description: "Leading the charge on e-waste recycling projects.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/50",
      icon: Zap,
      imageUrl: "/image/E-waste Management.jpeg", // Circuit boards
      stats: "1000+ Devices",
    },
    {
      number: "3",
      title: "EPR Projects",
      description: "Focusing on Extended Producer Responsibility.",
      color: "from-orange-400 to-red-500",
      shadow: "shadow-orange-500/50",
      icon: Target,
      imageUrl: "/image/EPR Projects.jpeg", // Business/responsibility
      stats: "50+ Partners",
    },
    {
      number: "4",
      title: "Innovation",
      description: "Exploring new EPR frontiers in tires and batteries.",
      color: "from-purple-500 to-pink-600",
      shadow: "shadow-purple-500/50",
      icon: Lightbulb,
      imageUrl: "/image/Innovation.jpeg", // Battery/innovation
      stats: "25+ Projects",
    },
  ];

  return (
    <div
      id="solutions"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 animate-bounce">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 backdrop-blur-xl">
              What We Offer
            </span>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Solutions Portfolio
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 mx-auto rounded-full shadow-lg shadow-emerald-500/50"></div>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Transforming waste into opportunity with cutting-edge solutions
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className="group relative h-[350px] rounded-3xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={solution.imageUrl}
                    alt={solution.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>

                  {/* Gradient color overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500 mix-blend-overlay`}
                  ></div>
                </div>

                {/* Glassmorphism Card */}
                <div className="absolute inset-0 flex flex-col p-6">
                  {/* Top Section */}
                  <div className="flex items-start justify-between mb-auto">
                    {/* Number Badge with Glassmorphism */}
                    <div
                      className={`relative w-14 h-14 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-xl shadow-2xl ${solution.shadow} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                      <span className="relative z-10">{solution.number}</span>
                    </div>

                    {/* Icon with Glassmorphism */}
                    <div
                      className={`w-14 h-14 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500`}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Bottom Content - Glassmorphism Panel */}
                  <div
                    className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-2xl transform transition-all duration-500 ${
                      isHovered
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-95"
                    }`}
                  >
                    {/* Glass shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>

                    <div className="relative z-10 space-y-3">
                      {/* Stats Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color} animate-pulse`}
                        ></div>
                        <span className="text-white text-xs font-semibold">
                          {solution.stats}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {solution.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-200 text-sm leading-relaxed drop-shadow">
                        {solution.description}
                      </p>

                      {/* Learn More Button */}
                      <button
                        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${solution.color} text-white font-semibold shadow-lg ${solution.shadow} transform group-hover:scale-105 transition-all duration-300 mt-4`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Decorative corner accent */}
                    <div
                      className={`absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br ${solution.color} opacity-30 blur-2xl rounded-full`}
                    ></div>
                  </div>
                </div>

                {/* Bottom glow effect */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${solution.color} shadow-lg ${solution.shadow} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>

                {/* Floating particles effect on hover */}
                {isHovered && (
                  <>
                    <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div
                      className="absolute top-20 right-10 w-1.5 h-1.5 bg-white rounded-full animate-ping"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                      className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"
                      style={{ animationDelay: "0.6s" }}
                    ></div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-10 py-5 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
            {/* Glass background */}
            <div className="absolute inset-0 backdrop-blur-xl bg-white/10 border border-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/50 to-green-600/50"></div>

            {/* Button content */}
            <Link
              href="#solutions"
              className="group relative flex items-center gap-3 text-white font-bold text-lg w-fit cursor-pointer transition-all hover:text-green-400"
            >
              <Sparkles className="w-5 h-5 text-green-400" />
              <span>Explore All Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
