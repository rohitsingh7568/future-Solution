import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import About from '@/Components/About'
import Vision from '@/Components/Vision'
import Mission from '@/Components/Mission'
import Solutions from '@/Components/Solutions'
import EPR from '@/Components/EPR'
import Strategy from '@/Components/Strategy'
import Clients from '@/Components/Clients'
// import Contact from '@/components/Contact'
import Footer from '@/Components/Footer'

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <About />
      <Vision />
      <Mission />
      <Solutions />
      <EPR />
      <Strategy />
      <Clients />
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}