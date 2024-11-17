import React,{ Suspense } from 'react';
import imacImg from '/Images/iMac.png';
import universityImg from '/Images/University.png';
import officeImg from '/Images/Office.png';
import { IoIosArrowForward } from "react-icons/io";
import locationImg from '/Images/Location.png';
import notesImg from '/Images/Notes.png';
import capImg from '/Images/Graduation_Cap.png';
import university1Img from '/Images/University1.png';
import ornamentImg from '/Images/Ornament.png';
import bharatImg from '/Images/bharat.png'
import nsdcImg from '/Images/NSDC.png'
import startUpImg from '/Images/StartUp.png'


      //  const imacImg = React.lazy(()=> import('/Images/iMac.png'));

const Main = () => {

   // max-450:grid-cols-1
   //w-[44%]
  return (
    <>
    <div className='mt-10 px-4 sm:px-14 grid grid-cols-2 max-450:grid-cols-1   gap-10 '>
      {/* <Suspense fallback={<div>Loading image...</div>}> */}
        <img src={imacImg} className=' ' alt='iMac' />
        {/* </Suspense> */}
        <div className=''>     {/* bg-blue-400 */}
            <div className='flex flex-col max-450:items-center items-start'>
            <p className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-[#4C5856] font-bold'>Where The World</p>
            <p className='mt-2 text-2xl sm:text-4xl  md:text-5xl lg:text-7xl text-[#4C5856] font-bold'>Learns To Code</p>
            </div>

            <div className='mt-5 md:mt-12 flex gap-6 '>
                <div className='w-[45%] max-450:py-1 h-auto sm:h-32 md:h-36 lg:h-52 border-2 border-[#2B95ED] rounded-md flex flex-col justify-center items-center'> 
                   
                        <img src={universityImg}  className='w-[20%] lg:w-[20%] h-auto'/>
                        <p className='text-[#1C408E] text-[10px] md:text-base lg:text-xl font-medium'>Campus Training</p>
                        <p className='mt-1 text-[6px] sm:text-[8px] md:text-[8px] lg:text-sm text-[#4C5856]'>Designed for college students with a</p>
                        <p className='text-[6px] sm:text-[8px] md:text-[8px] lg:text-sm text-[#4C5856] '>focus on xyz,xyz lorem ipsum dolor</p>

                        <button className='mt-0 sm:mt-2 lg:mt-3 px-1 sm:px-2 md:px-4 lg:px-8 md:py-1 lg:py-2 text-[5px] sm:text-[8px] lg:text-base bg-[#2B95ED] text-white rounded-md flex md:gap-2 items-center'>Explore <IoIosArrowForward /> </button> 
                </div>

                <div className='w-[45%] max-450:py-1 h-auto sm:h-32 md:h-36 lg:h-52 border-2 border-[#2B95ED] rounded-md flex flex-col justify-center items-center'> 
                   
                        <img src={officeImg}  className='w-[20%] lg:w-[20%] h-auto'/>
                        <p className='text-[#1C408E] text-[10px] md:text-base lg:text-xl font-medium'>Professional Training</p>
                        <p className='mt-1 text-[6px] sm:text-[8px] md:text-[8px] lg:text-sm text-[#4C5856]'>Designed for college students with a</p>
                        <p className='text-[6px] sm:text-[8px] md:text-[8px] lg:text-sm text-[#4C5856] '>focus on xyz,xyz lorem ipsum dolor</p>

                        <button className='mt-0 sm:mt-2 lg:mt-3 px-1 sm:px-2 md:px-4 lg:px-8 md:py-1 lg:py-2 text-[5px] sm:text-[8px] lg:text-base bg-[#2B95ED] text-white rounded-md flex md:gap-2 items-center'>Explore <IoIosArrowForward /> </button> 
                </div>


            </div>
        </div>
    </div>
     
      {/* Part-3 */}
    <div className='mt-10 px-4 sm:px-14 grid max-450:grid-cols-2 grid-cols-4  gap-4  '>

        <div className='w-[80%] md:h-24 border-2 border-[#2B95ED]  rounded-lg flex justify-evenly items-center '>
           <img src={locationImg}  className='w-[35%] sm:w-[30%] h-auto'/>
           <div>
            <p className='text-[#2B95ED] text-sm sm:text-lg md:text-xl'>50+</p>
            <p className='text-[#2B95ED] text-sm sm:text-lg md:text-xl'>Cities</p>
           </div>
        </div>

        <div className='w-[80%] md:h-24 border-2 border-[#2B95ED]  rounded-lg flex justify-evenly items-center'>
           <img src={notesImg}  className='w-[35%] sm:w-[30%] h-auto'/>
           <div>
            <p className='text-[#2B95ED] text-sm sm:text-lg md:text-xl'>80+</p>
            <p className='text-[rgb(43,149,237)] text-sm sm:text-lg md:text-xl'>Modules</p>
           </div>
        </div>

        <div className='w-[80%] max-450:py-4 md:h-24 border-2 border-[#2B95ED]  rounded-lg flex justify-evenly items-center'>
           <img src={capImg}  className='w-[35%] sm:w-[30%] h-auto'/>
           <div>
            <p className='text-[#2B95ED] text-sm sm:text-lg md:text-xl'>10K+</p>
            <p className='text-[#2B95ED] text-sm sm:text-lg md:text-xl'>Students</p>
           </div>
        </div>
         
        <div className='w-[80%] max-450:py-3 md:h-24 border-2 border-[#2B95ED]  rounded-lg flex justify-evenly items-center'>
           <img src={university1Img}  className='w-[35%] sm:w-[30%] h-auto'/>
           <div>
            <p className='text-[#2B95ED] text-sm sm:text-lg md:text-xl'>100+</p>
            <p className='text-[#2B95ED] text-sm sm:text-lg md:text-xl'>Institutes</p>
           </div>
        </div>
    </div>
       
       <div className='mt-5 md:mt-10 px-14 flex justify-end'>
       <img src={ornamentImg}  className='max-450:w-[50%] w-[18%] sm:w-[20%] h-auto'/>
       </div>


         {/* Part-4 */}
       <div className='px-4 sm:px-14 py-5 grid grid-cols-3 bg-[#C5E5FF33]'>
        <div className='flex justify-center items-center'>
       <img src={bharatImg}  className='w-[70%] sm:w-[60%] h-auto'/>
       </div>

       <div className='md:h-28 border-l-2 border-r-2  border-l-gray-500 border-r-gray-500 flex justify-center items-center '>
       <img src={nsdcImg}  className='w-[70%] sm:w-[60%] h-auto'/>
       </div>

       <div className='flex justify-center items-center'>
       <img src={startUpImg}  className='w-[70%] sm:w-[60%] h-auto'/>
       </div>
       </div>
      
    </>
  )
}

export default Main