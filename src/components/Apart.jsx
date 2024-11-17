import React from 'react';
import ornamentImg from '/Images/Ornament_85.png';
import graduationImg from '/Images/Graduation_Invitation.png';
import aiImg from '/Images/AI.png';
import appCodingImg from '/Images/image_13.png';
import openBookImg from '/Images/Open_Book.png';
import recordedLectImg from '/Images/Stop_Motion.png';
import kindleImg from '/Images/Kindle.png';

const Apart = () => {
  return (
    <>
    <div className='mt-2 h-auto sm:h-[120vh] lg:h-[95vh] bg-[#2B95ED]'>

        <div className='px-10 sm:px-44 pt-10 flex justify-between'>
        <p className='text-xl sm:text-2xl md:text-3xl text-white font-Poppins'>What Sets Us Apart?</p>
        <img src={ornamentImg} className='w-[5%] md:w-[3%]'/>
        </div>

        <div className='py-10 px-10 sm:px-44 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10'>

            <div className='h-32 sm:h-32 md:h-52 bg-white w-[100%] rounded-lg'> 
                
               <img src={graduationImg} className='w-[20%] sm:w-[30%] md:w-[40%]'/>
               <div className='px-4'>
               <p className='text-[#2B95ED] text-[13px] md:text-sm lg:text-xl'>Created by IIT-IIM Alumni</p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>We have learnt from the best and</p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>strive to bring you the best.</p>
               </div>
            </div>

            <div className='h-32 sm:h-32 md:h-52 bg-white w-[100%] rounded-lg'> 
               
               <img src={aiImg} className='w-[20%] sm:w-[30%] md:w-[40%]'/>
               <div className='px-4'>
               <p className='text-[#2B95ED] text-[13px] md:text-sm lg:text-xl'>AI Integration</p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>We have harnessed the power of A.I. to</p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>enhance and access your knowledge.</p>
               </div>
            </div>

            <div className='h-32 sm:h-32 md:h-52 bg-white w-[100%] rounded-lg'> 
                <img src={appCodingImg} className='w-[20%] sm:w-[30%] md:w-[40%]'/>
                <div className='px-4'>
               <p className='text-[#2B95ED] text-[13px] md:text-sm lg:text-xl'>In-app Coding</p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>The app features in-app coding</p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>eliminating the need for laptops.</p>
               </div>
            </div>

            <div className='h-32 sm:h-32 md:h-52 bg-white w-[100%] rounded-lg'> 
                <img src={openBookImg} className='w-[20%] sm:w-[30%] md:w-[40%]'/>
                <div className='px-4'>
               <p className='text-[#2B95ED] text-[13px] md:text-sm lg:text-xl'>Extensive E-books</p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>Deepen your understanding and </p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>mastery of skills.</p>
               </div>
            </div>
            
            <div className='h-32 sm:h-32 md:h-52 bg-white w-[100%] rounded-lg'> 
                <img src={recordedLectImg} className='w-[20%] sm:w-[30%] md:w-[40%]'/>
                <div className='px-4'>
               <p className='text-[#2B95ED] text-[13px] md:text-sm lg:text-xl'>Recorded Lectures </p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>Access lectures anywhere and </p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>anytime at your own place.</p>
               </div>
            </div>

            <div className='h-32 sm:h-32 md:h-52 bg-white w-[100%] rounded-lg'> 
                <img src={kindleImg} className='w-[20%] sm:w-[30%] md:w-[40%]'/>
                <div className='px-4'>
               <p className='text-[#2B95ED] text-[13px] md:text-sm lg:text-xl'>Flash cards </p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>Make learning convenient and </p>
               <p className='text-[#4C5856] text-[10px] md:text-xs lg:text-sm'>fun using flash cards.</p>
               </div>
            </div>


        </div>
    </div>

    </>
  )
}

export default Apart