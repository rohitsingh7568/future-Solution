export default function Contact() {
  const contactInfo = [
    {
      title: 'Office Address',
      content: 'Tikona Park Market, NIT Faridabad 121101',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Email',
      content: 'futuresolutions42@gmail.com',
      link: 'mailto:futuresolutions42@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Contact Numbers',
      content: '+91 9897283394 / +91 7042221535',
      link: 'tel:+919897283394',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="#contact" className="section-padding bg-gradient-to-br from-green-600 to-green-700 text-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-white hover:text-green-200 transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-white/90">
                  {info.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}