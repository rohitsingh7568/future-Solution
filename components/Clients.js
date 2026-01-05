// export default function Clients() {
//   const clients = [
//     'GREEN CARBON FUELS & FEEDS PVT LTD',
//     'TESNA TECH PVT LTD',
//     'ALPLA INDIA PRIVATE LIMITED',
//     'MIRACLE WELL PACK (INDIA) PRIVATE LIMITED',
//     'SHREE SHYAM PACKAGING',
//     'TIWANA NUTRITION GLOBAL PVT LTD',
//     'MIG FINCON PVT.LTD',
//     'JIVO WELLNESS PRIVATE LIMITED',
//     'EURAMED PHARMA PRIVATE LIMITED',
//     'KCM APPLIANCES PRIVATE LIMITED',
//   ]

//   return (
//     <section id="clients" className="section-padding bg-white">
//       <div className="container-custom">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
//           Our Valued Clientele
//         </h2>

//         <div className="max-w-4xl mx-auto mb-12">
//           <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
//             We are proud to partner with leading organizations across India. Together, 
//             we drive sustainable waste management practices and create meaningful 
//             environmental impact.
//           </p>
//           <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
//             Our clients span diverse industries, each committed to building a greener 
//             and more responsible future.
//           </p>
//           <p className="text-lg text-gray-700 text-center font-semibold">
//             With 50+ trusted partners nationwide, we continue to expand our network 
//             and strengthen our mission of delivering innovative, efficient, and 
//             sustainable solutions.
//           </p>
//         </div>

//         <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
//           <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
//             Featured Partners
//           </h3>
//           <div className="grid md:grid-cols-2 gap-4">
//             {clients.map((client, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow flex items-center"
//               >
//                 <span className="text-green-600 font-bold text-xl mr-4">
//                   {index + 1}.
//                 </span>
//                 <span className="text-gray-800 font-medium">
//                   {client}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import React from 'react';

export default function Clients() {
  const clients = [
    { name: 'GREEN CARBON FUELS & FEEDS PVT LTD', logo: '/logos/green-carbon.png' },
    { name: 'TESNA TECH PVT LTD', logo: '/logos/tesna.png' },
    { name: 'ALPLA INDIA PRIVATE LIMITED', logo: '/logos/alpla.png' },
    { name: 'MIRACLE WELL PACK (INDIA) PRIVATE LIMITED', logo: '/logos/miracle.png' },
    { name: 'SHREE SHYAM PACKAGING', logo: '/logos/shyam.png' },
    { name: 'TIWANA NUTRITION GLOBAL PVT LTD', logo: '/logos/tiwana.png' },
    { name: 'MIG FINCON PVT.LTD', logo: '/logos/mig.png' },
    { name: 'JIVO WELLNESS PRIVATE LIMITED', logo: '/logos/jivo.png' },
    { name: 'EURAMED PHARMA PRIVATE LIMITED', logo: '/logos/euramed.png' },
    { name: 'KCM APPLIANCES PRIVATE LIMITED', logo: '/logos/kcm.png' },
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our Valued <span className="text-green-600">Clientele</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            With <span className="font-bold text-gray-800 text-xl">50+</span> trusted partners nationwide, 
            we drive sustainable waste management and create meaningful environmental impact.
          </p>
        </div>

        {/* Featured Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                         flex flex-col items-center justify-center text-center min-h-[180px]"
            >
              {/* Logo Placeholder - Yahan Image tag aayega */}
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4 
                              group-hover:bg-green-600 transition-colors duration-300">
                <span className="text-green-600 group-hover:text-white font-bold text-2xl">
                  {client.name.charAt(0)}
                </span>
              </div>
              
              <p className="text-sm font-semibold text-gray-700 group-hover:text-green-700 transition-colors">
                {client.name}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-green-100">
            <span className="flex h-3 w-3 rounded-full bg-green-500 mr-3 animate-pulse"></span>
            <span className="text-gray-700 font-medium">Joining hands for a greener future</span>
          </div>
        </div>
      </div>
    </section>
  );
}