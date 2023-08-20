import React from 'react'
import NavBar from '../components/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div>
        <NavBar />

        <div className="w-full h-screen top-[90px] bg-zinc-900/70">
        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full h-full object-cover absolute -z-10"></img>
        
        <div className="flex justify-center items-center h-full">
            <form className="max-w-[400px] w-full mx-auto p-8 border">
                <h2 className="text-4xl font-bold text-center py-8 relative text-white">Sushi Muchi Login</h2>
                <div className="flex flex-col mb-4">
                    <label className="relative mb-2 text-white">Username:</label>
                    <input className="border relative bg-gray-100 p-2" type="text" placeholder="Username"></input>
                </div>
                <div className="flex flex-col">
                    <label className="relative mb-2 text-white">Password:</label>
                    <input className="border relative bg-gray-100 p-2" type="password" placeholder="password"></input>
                </div>
                <button className="w-full py-3 mt-8 hover:bg-black duration-300 border relative text-white hover:text-white cursor-pointer">Sign in</button>
                <p className="relative text-white"><input className="mr-2 relative" type="checkbox"></input>Remember this account</p>
                <p className="relative text-white"><span className="text-blue-500 relative cursor-pointer"><Link href="/Signup">Sign up</Link></span> to become a member</p>    
            </form>
        </div>     

      </div>
      <Footer/>
    </div>
  )
}

export default Login