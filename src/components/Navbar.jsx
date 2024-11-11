import React from 'react'
import logoImg from '/Images/logo.png'

const Navbar = () => {
    //w-48
  return (
    <>
    <div>
        <nav className='flex justify-evenly items-center  '>
        <img src={logoImg} className='w-[15%] '/>
       
        <ul className='flex justify-between  w-[50%]'>
            <li className="text-[#3B3A3A] font-normal text-xs sm:text-base">About Us</li>
            <li className="text-[#3B3A3A] font-normal text-xs sm:text-base">Virtual Labs</li>
            <li className="text-[#3B3A3A] font-normal text-xs sm:text-base">Programs</li>
            <li className="text-[#3B3A3A] font-normal text-xs sm:text-base">For Colleagues</li>
        </ul>
        <button className='border border-[#2B95ED] font-normal rounded-lg px-4 py-1  text-[#2B95ED] text-[10px] sm:text-sm'>Log In</button>
        <button className='bg-[#2B95ED] font-normal rounded-lg px-5 py-2  text-white text-[10px]  sm:text-sm'>Register</button>
        </nav>
    </div>
    </>
  )
}

export default Navbar