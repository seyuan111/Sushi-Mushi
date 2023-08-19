import React from 'react'
import NavBar from '../pages/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';

const Store = () => {
  return (
    <div>
        <NavBar />
        <div className="w-full h-screen top-[90px] bg-zinc-900/70">
        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full h-full object-cover absolute -z-10"></img>
        
        <div className="w-full h-[70%] text-center flex flex-col items-center justify-center px-4 text-white">
            <h1 className="text-[25px] mt-6 text-white">Find a Japanese Restaurant close to your home</h1>
            <label className="relative mb-2 text-white">Enter Address:</label>
            <div>
                <input className="border relative bg-transparent text-white p-2" type="text" placeholder="Enter Address Here"></input>
                <button className="ml-4 px-6 py-2 mt-6 hover:bg-black duration-300 border relative text-white hover:text-white cursor-pointer">Find Restaurant</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Store