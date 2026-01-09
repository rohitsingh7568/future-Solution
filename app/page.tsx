import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OurPurpose from '@/components/OurPurpose'

// import About from '@/components/About'
// import Vision from '@/components/Vision'
// import Mission from '@/components/Mission'
import Solutions from '@/components/Solutions'
// import EPR from '@/components/EPR'
import Strategy from '@/components/Strategy'
// import OurPurpose from '@/components/OurPurpose'
import Clients from '@/components/Clients'
// import Contact from '@/components/Contact'
import Footer from '@/components/Footer' 

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <OurPurpose />
      {/* <About /> */}
      {/* <Vision /> */}
      {/* <Mission /> */}
      <Solutions />
      {/* <EPR /> */}
      <Strategy />
      <Clients />
      
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}