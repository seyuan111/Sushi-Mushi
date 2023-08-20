'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {
    const [nav, setNav] = useState(0);

    const setState = () => {
        setNav(!nav)
    }

  return (
    <div className="w-full h-[70px] bg-black shadow-xl">
        
        <div className="flex max-w-[1400px] h-full mx-auto px-4 items-center justify-between">
        
            <div className="cursor-pointer font-bold items-center text-xl">
                <h1 className="text-white font-QuickSand text-4xl"><Link href="/">NEW YORK CITY SUSHI</Link></h1>
            </div>

            <div className="hidden md:flex">
                <ul className="font-bold flex items-center text-xl text-white">
                    <li className="cursor-pointer mx-4"><Link href="/About">About</Link></li>
                    <li className="cursor-pointer mx-4"><Link href="/Order">Order</Link></li>
                    <li className="cursor-pointer mx-4"><Link href="/Specials">Specials</Link></li>
                    <li className="cursor-pointer mx-4"><Link href="/Contact">Contact</Link></li>
                    <button className="cursor-pointer mx-4"><Link href="/Login">Login</Link></button>
                </ul>
            </div>

            <div onClick={setState} className="md:hidden block">
                {nav ? <AiOutlineClose size={30} className="cursor-pointer text-white"/> : <AiOutlineMenu size={30} className="cursor-pointer text-white"/>}
            </div>

            <div className={nav ? "duration-300 w-full bg-gradient-to-r from-cyan-800 to-blue-800 absolute top-[70px] left-0 text-center justify-center flex" : "absolute left-[-100%]"}>
            <ul className="font-bold items-center text-xl text-white my-10">
                <li className="cursor-pointer my-10"><Link href="/About">About</Link></li>
                <li className="cursor-pointer mb-10"><Link href="/Order">Order</Link></li>
                <li className="cursor-pointer mb-10"><Link href="/Specials">Specials</Link></li>
                <li className="cursor-pointer mb-10"><Link href="/Contact">Contact</Link></li>
                <button className="cursor-pointer mb-10"><Link href="/Login">Login</Link></button>
            </ul>
        </div>
        
        </div>

    </div>
  )
}

export default NavBar