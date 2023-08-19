'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const Hero = () => {
  return (    
        <div className="w-full h-[20%] text-center flex flex-col items-center justify-center px-4 text-white bg-black">
            <h1 className="font-bold text-3xl">New York City Sushi</h1>
            <div className='flex p-6'>
              <ul>
                  <li><Link href='/Menu'>Menu</Link></li>
                  <li><Link href='/Careers'>Careers</Link></li>
                  <li><Link href='/Terms'>Terms</Link></li>
                  <li><Link href='/About'>About</Link></li>
              </ul>
              <ul className='ml-12'>
                  <li><Link href='/Menu'>Menu</Link></li>
                  <li><Link href='/Careers'>Careers</Link></li>
                  <li><Link href='/Terms'>Terms</Link></li>
                  <li><Link href='/About'>About</Link></li>
              </ul>
            </div>
            <p>Open From 8AM-6PM Monday-Friday</p>
        </div>
  )
}

export default Hero