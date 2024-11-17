import React from 'react';
import cardCutRImg from '/Images/Vector_45.png';

const CardRight = ({mainImg,heading,text}) => {
  return (
    <>
      {/* <img src={cardCutRImg} className='relative w-[8%] h-56 top-8 left-16 sm:left-20 md:left-24 lg:left-32 ' /> 

<div className='mt-10 w-[50%] h-52 shadow-2xl border-2 border-[#2B95ED] rounded-2xl'>
  <div className='mt-7 pl-10 flex gap-5 justify-start items-center'>
  <img src={mainImg} className='w-[12%]' /> 
  <p className='text-2xl font-normal text-[#393939]'>{heading} </p>
  </div>
  <p className='px-10 mt-6 text-sm text-[#393939]'> {text}</p>
</div> */}

<img src={cardCutRImg} className='max-450:hidden relative w-[8%] h-56 top-8 left-16 sm:left-20 md:left-24 lg:left-32 ' /> 

<div className='mt-10 w-[100%] md:w-[50%] h-52 shadow-2xl border-2 border-[#2B95ED] rounded-2xl'>
  <div className='mt-7 pl-5 md:pl-10 flex gap-2 md:gap-5 justify-start items-center'>
  <img src={mainImg} className='w-[12%]' /> 
  <p className='text-[12px] sm:text-sm md:text-2xl font-normal text-[#393939]'>{heading} </p>
  </div>
  <p className='px-2 md:px-10 sm:mt-4 md:mt-6 text-[10px] sm:text-xs lg:text-sm text-[#393939]'> {text}</p>
 </div>
    </>
  )
}

export default CardRight