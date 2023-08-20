'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const Hero = () => {
  return (    
        <div className="w-full h-[20%] text-center flex flex-col items-center justify-center text-white bg-black p-10">
            <div className='flex'>
              <div>
              <h1 className="font-bold text-3xl">New York City Sushi</h1>
              <p>Open From 8AM-6PM Monday-Friday</p>
              </div>
              <div>
              <img src='https://cdn-icons-png.flaticon.com/128/2252/2252076.png' className='w-14 h-14 ml-5'></img>
              </div>
            </div>
              
              
            <div className='flex p-10'>
              <ul className='text-left'>
                <li>Building Number : 74025</li>
                <li>Street Name : Walsh Throughway</li>
                <li>Street Address : 7229 Graham Plain Apt. 652</li>
                <li>State : Washington</li>
                <li>City : East Nash</li>
                <li>Post Code : 09548-9288</li>
              </ul>
              <ul className='ml-20'>
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
              <ul className='ml-12'>
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
              <ul className='ml-20'>
                <li><p className='text-2xl'>Contact Us</p></li>
                <li>support@nycsushi.com</li>
                <li>Tel: 212-555-555</li>
              </ul>
            </div>
            
            <p>Copyright &copy; 2023. <a href='https://www.bluepherretsoftware.com' target='_blank' className='underline'>Blue Pherret Software LLC</a>.</p>
        </div>
  )
}

export default Hero