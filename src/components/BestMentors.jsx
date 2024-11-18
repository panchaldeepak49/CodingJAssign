import React from 'react';
import ornamentImg1 from '/Images/New/Ornament_96.png';
import ornamentImg2 from '/Images/New/Ornament_94.png';
import ptcImg1 from '/Images/New/PTC-1.png';
import ptcImg2 from '/Images/New/PTC-2.png';
import ptcImg3 from '/Images/New/PTC-3.png';
import ptcFrame from '/Images/New/Frame_7.png';
import printImg from '/Images/New/image_113.png';
import outReachImg from '/Images/New/image_115.png';
import codingJuniorImg from '/Images/New/Coding_Jr.png';
import MentorCard from './MentorCard';
import ornamentRoundImg from '/Images/New/Ornament_103.png';


const BestMentors = () => {

  return (
    <>
    <div className='relative mt-20 flex flex-col justify-center items-center '>
        <p className='max-450:px-2 text-[#4C5856] text-xl'>We Know Just Education Is Not Enough Anymore </p>
        <p className='mt-2 max-450:px-2 max-450:text-2xl text-[#4C5856] font-Poppins text-3xl'>So We've Got The <span className='text-[#2B95ED]'>Best Mentors</span>  For You</p>
        <img src={ornamentImg1} className='absolute w-[7%] left-[26%] top-[60%]' />
        <img src={ornamentImg2} className='absolute w-[5%] left-[21%] top-[44%]' />
    </div>

    <div className='relative max-450:mt-10 mt-24 gap-4 flex justify-center'>
       <img src={ptcFrame} className='absolute  w-[20%] bottom-0 left-[18.85%] max-450:left-[15.5%] sm:left-[17.5%] md:left-[18%] lg:left-[18.4%] xl:left-[18.75%]' />
       <img src={ptcImg1} className=' w-[20%]' />
       <img src={ptcImg2} className=' w-[20%]' />
       <img src={ptcImg3} className=' w-[20%]' />
    </div>

    <div className='max-450:mt-10 mt-20 flex justify-center'>
        <p className='text-xl sm:text-2xl md:text-3xl font-medium text-[#4C5856] '>We've Also Been In<span className='text-[#2B95ED]'> News!</span> </p>
    </div>

    <div className='relative mt-10 flex justify-center max-450:gap-2 gap-4'>
         <img src={ornamentRoundImg} className='absolute w-[14%] max-450:top-[15%]  -top-[8%] sm:-top-[15%] left-[17%]' />
         <img src={ornamentRoundImg} className='absolute w-[12%] max-450:top-[12%] -top-[8%] sm:-top-[15%] right-[15%]' />
         <img src={ornamentRoundImg} className='absolute w-[12%] -bottom-[10%]  sm:-bottom-[18%] right-[33%]' />
        {/* <div className='w-[20%] h-auto bg-green-400 rounded-lg shadow-2xl'>
            <div className='flex flex-col justify-center items-center px-2 sm:px-4 md:px-8'>
                <div className='flex justify-between items-center py-5'>
                 <img src={printImg} className=' w-[50%]' />
                 <p className='flex text-[8px]'>31 March,2024</p>
                </div>

            <img src={codingJuniorImg} className=' w-[100%] flex justify-center ' />
            <p className='mt-5 text-[10px] md:text-sm text-[#393939]'>Coding Jr's CEO Sumit Bhat felicitated at Times 40 under 40 </p>
                 <div className='my-2 sm:my-4 w-[100%] flex justify-between items-center '>
                <p className='text-[10px] md:text-sm text-[#0770C7]'>Read article</p>
                 <HiArrowLongRight />
                </div>
            </div>

        </div> */}

        <MentorCard 
          subImg={printImg}
          mainImg={codingJuniorImg}
          text="Coding Jr's CEO Sumit Bhat felicitated at Times 40 under 40" />

        <MentorCard 
          subImg={outReachImg}
          mainImg={codingJuniorImg}
          text="Meet Vikas Shukla- The flag bearer of technology and ... " />  

         <MentorCard 
          subImg={printImg}
          mainImg={codingJuniorImg}
          text="Meet Vikas Shukla- The flag bearer of technology and ..." /> 

    </div>
    </>
  )
}

export default BestMentors