import React from 'react';
import roundImg from '/Images/Ornament_115.png';
import boyImg from '/Images/image_7.png';
import girlImg from '/Images/image_112.png';
import dottedImg from '/Images/Ornament_86.png';
import { IoIosArrowForward } from "react-icons/io";

const Holistic = () => {
  return (
    <>
    <div className='mt-14 flex flex-col justify-center items-center'>
        <img src={roundImg}  className='absolute w-[7%] left-96'/>
        <p className='text-3xl font-Poppins font-medium text-[#4C5856]'>Check Out Our <span className='text-[#2B95ED]'>Holistic Programs</span>  Designed  </p>
       <p className='mt-2 text-3xl font-Poppins font-medium text-[#4C5856]'>To Help You Reach Your <span className='text-[#2B95ED]'>Goals</span> </p>
    </div>

     {/* part changed  */}
     <img src={dottedImg}  className='absolute w-[7%] right-80 -z-1'/>
    <div className='mt-10 flex justify-center'>
        <div className='w-[50%] p-2 shadow-2xl grid  sm:grid-cols-2 '>
      <img src={boyImg}  className=' w-[95%] left-96'/>
      <div className=' p-2'>
        <p className='text-[#080808] text-lg font-medium font-Roboto'>Campus Training</p>
        <p className='text-[#4C5856] mt-2'>For Students | 24+ Modules | 10 instructors</p>
        <p className='text-[#4C5856] mt-2 text-sm'>The app feature in-app coding eliminating the need for laptops.With cloud based virtual
            machines and labs ,students can practice freely, cutting maintainence and hardware cost.
        </p>
        <div className='mt-6 flex justify-end'>
        <button className='px-4 py-2 bg-[#2B95ED] text-white text-xs rounded-md flex gap-1 items-center'>Explore <IoIosArrowForward /></button>
        </div>
      </div>
      </div>
    </div>

   {/* part changed  */}

    <div className='mt-10 flex justify-center'>
        <div className='w-[50%] p-2 shadow-2xl grid  sm:grid-cols-2'>
      <img src={girlImg}  className=' w-[95%] left-96'/>
      <div className=' p-2'>
        <p className='text-[#080808] text-lg font-medium font-Roboto'>Professional Training</p>
        <p className='text-[#4C5856] mt-2'>For Professionals | 24+ Modules | 10 instructors</p>
        <p className='text-[#4C5856] mt-2 text-sm'>The app feature in-app coding eliminating the need for laptops.With cloud based virtual
            machines and labs ,students can practice freely, cutting maintainence and hardware cost.
        </p>
        <div className='mt-6 flex justify-end'>
        <button className='px-4 py-2 bg-[#2B95ED] text-white text-xs rounded-md flex gap-1 items-center'>Explore <IoIosArrowForward /></button>
        </div>
      </div>
      </div>
    </div>
    <img src={dottedImg}  className='absolute w-[7%] right-80 '/>


    </>
  )
}

export default Holistic