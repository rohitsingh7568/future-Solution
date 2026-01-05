import './globals.css'

export const metadata = {
  title: 'Future Solutions - Sustainable Waste Management in India',
  description: 'Revolutionizing waste management in India through sustainable practices and innovative EPR solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}