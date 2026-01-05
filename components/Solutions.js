// export default function Solutions() {
//   const solutions = [
//     {
//       number: '1',
//       title: 'Material Trading',
//       description: 'Trading of plastic scrap and recycled granules.',
//       color: 'bg-green-600',
//     },
//     {
//       number: '2',
//       title: 'E-waste Management',
//       description: 'Leading the charge on e-waste recycling projects.',
//       color: 'bg-blue-600',
//     },
//     {
//       number: '3',
//       title: 'EPR Projects',
//       description: 'Focusing on Extended Producer Responsibility.',
//       color: 'bg-orange-500',
//     },
//     {
//       number: '4',
//       title: 'Innovation',
//       description: 'Exploring new EPR frontiers in tires and batteries.',
//       color: 'bg-purple-600',
//     },
//   ]

//   return (
//     <section id="solutions" className="section-padding bg-gradient-to-br from-gray-800 to-gray-900 text-white">
//       <div className="container-custom">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           Solutions Portfolio
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {solutions.map((solution) => (
//             <div
//               key={solution.number}
//               className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all"
//             >
//               <div className={`${solution.color} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6`}>
//                 {solution.number}
//               </div>
//               <h3 className="text-2xl font-bold mb-4">
//                 {solution.title}
//               </h3>
//               <p className="text-gray-200">
//                 {solution.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import React from "react";

export default function Solutions() {
  const solutions = [
    {
      number: "1",
      title: "Material Trading",
      description: "Trading of plastic scrap and recycled granules.",
      color: "from-green-500 to-emerald-600",
      shadow: "shadow-green-500/20",
    },
    {
      number: "2",
      title: "E-waste Management",
      description: "Leading the charge on e-waste recycling projects.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20",
    },
    {
      number: "3",
      title: "EPR Projects",
      description: "Focusing on Extended Producer Responsibility.",
      color: "from-orange-400 to-red-500",
      shadow: "shadow-orange-500/20",
    },
    {
      number: "4",
      title: "Innovation",
      description: "Exploring new EPR frontiers in tires and batteries.",
      color: "from-purple-500 to-pink-600",
      shadow: "shadow-purple-500/20",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-[#0f172a] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Solutions Portfolio
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="group relative bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-gradient-to-br ${solution.color}`}
              ></div>

              <div
                className={`relative z-10 w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center text-lg font-bold mb-5 shadow-lg ${solution.shadow}`}
              >
                {solution.number}
              </div>

              <h3 className="relative z-10 text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                {solution.title}
              </h3>

              <p className="relative z-10 text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                {solution.description}
              </p>

              {/* Decorative line */}
              <div className="relative z-10 mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-slate-500 to-transparent transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
