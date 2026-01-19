'use client'

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Thank You Message */}
          <div className="space-y-6">
            <div className="inline-block">
              <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Thank You for Your Time
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Thank you for considering Future Solutions. We are dedicated to 
              sustainable waste management in India. Contact us to explore 
              partnership opportunities. 
            </p>
            
            <div className="flex items-center space-x-2 text-green-400 font-semibold text-xl">
              <span>Let's build a greener future together</span>
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="flex space-x-4 pt-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500/30 transition-all cursor-pointer group">
                <svg className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500/30 transition-all cursor-pointer group">
                <svg className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500/30 transition-all cursor-pointer group">
                <svg className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Details */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
            <div className="text-center mb-6">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                Future Solutions
              </h4>
              <p className="text-gray-400 text-sm">
                Sustainable Waste Management in India
              </p>
            </div>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all group">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-all">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-white">Tikona Park Market, NIT Faridabad 121101</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all group">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-all">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:futuresolutions42@gmail.com" className="text-white hover:text-green-400 transition-colors">
                    futuresolutions42@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all group">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-all">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <div className="space-y-1">
                    <a href="tel:+9191662 43116" className="text-white hover:text-green-400 transition-colors block">
                      +91 91662 43116
                    </a>
                    <a href="tel:+9182795 66476" className="text-white hover:text-green-400 transition-colors block">
                      +91 82795 66476
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ©  Socialisthan. Powered by.
            <a className="text-sky-400 hover:underline"  target="_blank" href="https://github.com/rohitsingh7568">rohitsingh7568</a>
          </p>
        </div>
      </div>
    </footer>
  )
}