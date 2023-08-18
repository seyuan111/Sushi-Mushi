import React from 'react'
import Link from 'next/link'
import NavBar from '../pages/NavBar'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';

const Signup = () => {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };
  return (
    <div>
        <NavBar />
        <div className="w-full h-screen top-[90px] bg-zinc-900/70">
        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full h-full object-cover absolute -z-10"></img>
        
        <div className="flex justify-center items-center h-full">

        <form className="max-w-[400px] w-full mx-auto border p-8">
        <BiArrowBack onClick={goBack} className="text-white relative cursor-pointer text-[20px]" />
            <h2 className="text-4xl font-bold text-center py-8 relative text-white">Sushi Muchi Sign Up</h2>
            <div className="flex flex-col mb-4">
                <label className="text-white relative mb-2">Email:</label>
                <input className="border relative bg-transparent text-white p-2" type="text" placeholder="email"></input>
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-white relative mb-2">Username:</label>
                <input className="border relative bg-transparent text-white p-2" type="text" placeholder="username"></input>
            </div>
            <div className="flex flex-col">
                <label className="text-white relative mb-2">Password:</label>
                <input className="border relative bg-transparent text-white p-2" type="password" placeholder="password"></input>
            </div>
            <div className="flex flex-col">
                <label className="text-white relative mb-2">Confirm Password:</label>
                <input className="border relative bg-transparent text-white p-2" type="password" placeholder="confirm password"></input>
            </div>
            <button className="w-full py-3 mt-8 hover:bg-black duration-300 border relative text-white hover:text-white cursor-pointer">Sign Up</button> 
        </form>

            </div>  

      </div>
    </div>
  )
}

export default Signup