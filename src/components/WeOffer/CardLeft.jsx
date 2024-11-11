import React from 'react'
import cardCutLImg from '/Images/Vector_44.png';

const CardLeft = ({mainImg,heading,text}) => {
  return (
    <>
     <div className='relative md:w-[50%] h-52 md:h-52 shadow-2xl border-2 border-[#2B95ED] rounded-2xl'>
     {/* <img src={circleImg} className='absolute w-[14%]  left-36 -top-8 ' />  */}
        <div className='mt-5 pl-2 md:pl-5 flex gap-2 md:gap-5 justify-start items-center'>
        <img src={mainImg} className='w-[20%] md:w-[18%]' /> 
        <p className='text-[12px] sm:text-sm md:text-2xl font-normal text-[#393939]'>{heading} </p>
        </div>
        <p className='mt-4 md:mt-0 px-2 md:px-10 text-[10px] sm:text-xs lg:text-sm text-[#393939]'>{text}
            
        </p>
     </div>
     <img src={cardCutLImg} className='relative w-[8%] h-56 bottom-2 right-16 sm:right-20 md:right-24 lg:right-32 ' /> 
    </>
  )
}

export default CardLeft