import React from 'react'
import logoImg from '/Images/logo.png'

const Navbar = () => {
    //w-48
  return (
    <>
    <div>
        <nav className='mt-2 py-2 flex justify-evenly items-center  '>
        <img src={logoImg} className='max-450:w-[40%] w-[15%] '/>
       
        <ul className='flex justify-between  w-[50%]'>
            <li className="max-450:hidden text-[#3B3A3A] font-normal text-xs sm:text-base">About Us</li>
            <li className="max-450:hidden text-[#3B3A3A] font-normal text-xs sm:text-base">Virtual Labs</li>
            <li className="max-450:hidden text-[#3B3A3A] font-normal text-xs sm:text-base">Programs</li>
            <li className="max-450:hidden text-[#3B3A3A] font-normal text-xs sm:text-base">For Colleagues</li>
        </ul>
        <button className='max-450:mr-2 border border-[#2B95ED] font-normal rounded-lg max-450:px-4 px-4 py-1  text-[#2B95ED] max-450:text-[8px] text-[10px] sm:text-sm'>LogIn</button>
        <button className='bg-[#2B95ED] font-normal rounded-lg max-450:px-2 px-5 max-450:py-1 py-2  text-white text-[10px]  sm:text-sm'>Register</button>
        </nav>
    </div>
    </>
  )
}

export default Navbar