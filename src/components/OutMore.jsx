import React,{ useState } from 'react';
import fasImage from '/Images/New/FasProgrammer.png';
import dottedImage from '/Images/New/Ornament_108.png';
import triangleImage from '/Images/New/Ornament_110.png';

const OutMore = () => {

    const[name,setName] = useState("");
    const[mobile,setMobile] = useState("");
    const[city,setCity] = useState("");
    // console.log(city)
  return (
    <>
    <div className='mt-10 sm:mt-20 flex justify-center '>
     <div className='relative w-[60%] flex rounded-lg shadow-2xl bg-blue-300'>{/* bg-blue-300 */}
     <img src={triangleImage} className='absolute w-[7%] left-[5%] -top-[10%] lg:-top-[12%]'/>
        <div className='w-[50%] p-4'>
            <img src ={fasImage} className='w-[100%]' />
        </div>
        
        <div className='relative w-[50%] flex flex-col items-start lg:mt-2 sm:p-2 md:p-4  '>   {/* bg-pink-300 */}
            <img src={dottedImage} className='absolute w-[20%] right-2'/>
            <p className='text-[#2B95ED] sm:text-xl md:text-2xl font-normal'>Find Out More</p>
            <p className='text-[#2B95ED] sm:text-xl md:text-2xl font-normal'>Reasons To Stay</p>

            <input type='text' className='lg:mt-5 md:py-1 w-[70%] border pl-2 outline-none rounded-md' placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type='text' className='sm:mt-2 md:py-1 w-[70%] border pl-2 outline-none rounded-md' placeholder='Mobile No.' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            <input type='text' className='sm:mt-2 md:py-1 w-[70%] border pl-2 outline-none rounded-md' placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)} />
           
           <div className='flex items-center gap-1'>
            <input type='checkbox' className='mt-2 text-xl' />
            <p className='text-[5px] lg:mt-2 sm:text-[8px] md:text-xs lg:text-sm text-[#4F4F4F]'>Creating an account means you are okay with our Teams of Service, Privacy Policy and Default Notification Settings </p>
            </div>

            <div className='flex flex-col justify-center items-center w-[100%]'>
            <button className='mt-2 md:mt-4 bg-[#2B95ED] px-8 sm:py-1 md:py-2 lg:py-3 text-sm  lg:text-xl text-white rounded-lg'>Enquire Now</button>
            <p className='mt-2 text-[#32403B] text-[10px] sm:text-sm md:text-base'>Already Have An Account? SignIn</p>
            </div>
        </div>
     </div>
     </div>
    </>
  )
}

export default OutMore