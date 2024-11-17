import React from 'react';
import starImg from '/Images/Ornament_117.png';
import timesImg from '/Images/TimesUnder.png';
import nsdcPartnerImg from '/Images/nsdc_partner.png';

const Innovate = () => {

  return (
    <>
     <div className='mt-14 flex gap-6 justify-center items-center'>
        <img src={starImg}  className=' w-[5%] '/>
        <div>
        <p className='text-3xl font-Poppins font-medium text-[#4C5856]'>Our Efforts To <span className='text-[#2B95ED]'>Innovate</span> Have Been </p>
       <p className='mt-2 text-3xl font-Poppins font-medium text-[#4C5856]'>Recognised <span className='text-[#2B95ED]'></span> And <span className='text-[#2B95ED]'>Appreciated</span> </p>
       </div>
       <img src={starImg}  className=' w-[5%] '/>
    </div>


    <div className='mt-10 flex justify-center'>
        <img src={timesImg}  className=' w-[60%] sm:w-[30%] '/>
       
    </div>

    
    <div className='mt-10 flex justify-center'>
        
        <img src={nsdcPartnerImg}  className='w-[60%]  sm:w-[30%] '/>
    </div>

    </>
  )
}

export default Innovate