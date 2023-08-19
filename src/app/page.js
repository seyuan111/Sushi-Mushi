import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Sliders from '../components/Sliders'
import Footer from '../components/Footer'
import Image from 'next/image'
import NavBar from '../pages/NavBar'
import Hero from '../pages/Hero'
import Sliders from '../pages/Sliders'
import Cards from '../pages/Cards'
import History from '../pages/History'


export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Sliders />
      <Footer />
      <Cards />
      <History />
    </div>
  )
}
