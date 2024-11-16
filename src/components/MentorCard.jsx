import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";

const MentorCard = ({subImg,mainImg,text}) => {
  return (
    <>
    <div className='w-[20%] h-auto  rounded-lg shadow-2xl z-50'>
            <div className='flex flex-col justify-center items-center px-2 sm:px-4 md:px-8'>
                <div className='flex justify-between items-center py-5'>
                 <img src={subImg} className=' w-[50%]' />
                 <p className='flex text-[8px]'>31 March,2024</p>
                </div>

            <img src={mainImg} className=' w-[100%] flex justify-center ' />
            <p className='mt-5 text-[10px] md:text-sm text-[#393939]'>{text}</p>
                 <div className='my-2 sm:my-4 w-[100%] flex justify-between items-center '>
                <p className='text-[10px] md:text-sm text-[#0770C7]'>Read article</p>
                 <HiArrowLongRight />
                </div>
            </div>

        </div>
    </>
  )
}

export default MentorCard