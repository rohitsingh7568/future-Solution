export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">
            Thank You for Your Time
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Thank you for considering Future Solutions. We are dedicated to 
            sustainable waste management in India. Contact us to explore 
            partnership opportunities. Let's build a greener future together.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="mb-4">
            <h4 className="text-2xl font-bold text-green-500 mb-2">
              Future Solutions
            </h4>
            <p className="text-gray-400">
              Sustainable Waste Management in India
            </p>
          </div>

          <div className="space-y-2 text-gray-400 text-sm">
            <p>Tikona Park Market, NIT Faridabad 121101</p>
            <p>
              <a href="mailto:futuresolutions42@gmail.com" className="hover:text-green-500 transition-colors">
                futuresolutions42@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919897283394" className="hover:text-green-500 transition-colors">
                +91 9897283394
              </a>
              {' / '}
              <a href="tel:+917042221535" className="hover:text-green-500 transition-colors">
                +91 7042221535
              </a>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Future Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}