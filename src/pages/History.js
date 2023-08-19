'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-zinc-900/70">
        <img src="https://rb.gy/0kwgu" className="w-full h-full object-cover absolute -z-10"></img>
        
        <div className="w-full h-[90%] text-center flex flex-col items-center justify-center px-4 text-white">
            <h1 className="font-bold text-2xl underline">History Area</h1>
            <h1 className="text-[25px] mt-12 text-white">Interested In Our Story? </h1>
            <p className="text-[20px] my-5 font-bold">Embark on a Journey of Sushi Enchantment at New York City Sushi: Where Urban Dynamism Meets Culinary Artistry!.</p>
            <p className="mb-5 font-bold">Nestled in the heart of the city that never sleeps, New York City Sushi isn't just a restaurant; it's a testament to the innovative spirit and gastronomic passion that define our bustling metropolis. Our story began with a vision to reimagine sushi – not merely as a dish,
             but as an experience that captures the vibrancy of the city itself. 
             The fusion of diverse cultures, the boldness of urban creativity, and the precision of culinary craftsmanship converge within our walls. From the moment you step in, you're not just dining; you're becoming part of a legacy where each roll is a canvas, and every bite is an exploration of flavors as dynamic as the city that inspired them. 
             At New York City Sushi, every dish tells a story – a story of how tradition and modernity dance in perfect harmony, offering you a symphony of tastes that can only be found in the heart of the Big Apple. Welcome to a culinary journey that celebrates the spirit of New York and the artistry of sushi like never before.</p>
            <div className="text-white">
                <button className="px-6 py-2 hover:bg-black duration-300 border"><Link href="/Order">EAT</Link></button>
                <button className="px-6 py-2 hover:bg-black duration-300 ml-6 border"><Link href="/FAQ">SUSHI</Link></button>
            </div>
        </div>

    </div>
  )
}

export default Hero