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
    <div className="w-full h-[70px] bg-gradient-to-r from-cyan-800 to-blue-800">
        
        <div className="flex max-w-[1400px] h-full mx-auto px-4 items-center justify-between">
        
            <div className="cursor-pointer font-bold items-center text-xl">
                <h1 className="text-white"><Link href="/">SushiTime</Link></h1>
            </div>

            <div className="hidden md:flex">
                <ul className="font-bold flex items-center text-xl text-white">
                    <li className="cursor-pointer mx-4">About</li>
                    <li className="cursor-pointer mx-4">Order</li>
                    <li className="cursor-pointer mx-4">Specials</li>
                    <li className="cursor-pointer mx-4">Contact</li>
                    <button className="cursor-pointer mx-4">Login</button>
                </ul>
            </div>

            <div onClick={setState} className="md:hidden block">
                {nav ? <AiOutlineClose size={30} className="cursor-pointer text-white"/> : <AiOutlineMenu size={30} className="cursor-pointer text-white"/>}
            </div>

            <div className={nav ? "duration-300 w-full bg-gradient-to-r from-cyan-800 to-blue-800 absolute top-[70px] left-0 text-center justify-center flex" : "absolute left-[-100%]"}>
            <ul className="font-bold items-center text-xl text-white my-10">
                <li className="cursor-pointer my-10">About</li>
                <li className="cursor-pointer mb-10">Order</li>
                <li className="cursor-pointer mb-10">Specials</li>
                <li className="cursor-pointer mb-10">Contact</li>
                <button className="cursor-pointer mb-10">Login</button>
            </ul>
        </div>
        
        </div>

    </div>
  )
}

export default NavBar