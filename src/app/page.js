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
      <Cards />
      <History />
    </div>
  )
}
