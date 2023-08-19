import React from 'react'
import NavBar from '../pages/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';

const Chef = () => {
  return (
    <div>
        <NavBar />
        <div className="w-full h-screen top-[90px] bg-zinc-900/70">
        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full h-full object-cover absolute -z-10"></img>
        
        <div className="w-full h-[40%] text-center flex flex-col items-center justify-center px-4 text-white">
            <h1 className="text-[25px] mt-4 text-white">Order your favorite Sushi, Sashimi, and all the other Japanese Foods you desire here</h1>
        </div>

      </div>
    </div>
  )
}

export default Chef