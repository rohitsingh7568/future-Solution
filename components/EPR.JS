export default function EPR() {
  const stakeholders = [
    {
      title: 'Producers',
      description: 'Manufacturers responsible for end-of-life management.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: 'Importers',
      description: 'Entities bringing products into the market.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      ),
    },
    {
      title: 'Brand Owners',
      description: "Companies managing their brand's waste footprint.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="epr"
      className="
        bg-no-repeat bg-center bg-cover
        bg-[url('/image/EPRdiagram.png')]
      "
    >
      {/* Overlay */}
      <div className="bg-black/40">
        <div className="container-custom px-4">
          <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 md:p-12">

            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800">
              Understanding Extended Producer Responsibility (EPR)
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {stakeholders.map((stakeholder, index) => (
                <div
                  key={index}
                  className="
                    bg-gradient-to-br from-green-50 to-blue-50
                    p-6 rounded-xl text-center
                    hover:shadow-xl transition-all
                  "
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {stakeholder.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {stakeholder.title}
                  </h3>
                  <p className="text-gray-700">
                    {stakeholder.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 md:p-8 rounded-xl">
              <p className="text-lg text-gray-800 leading-relaxed text-center max-w-4xl mx-auto">
                EPR requires producers to manage products sustainably throughout
                their useful lifespan. Under PWM Rules, EPR applies to plastic
                packaging, not plastic products, promoting responsible waste
                management.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
