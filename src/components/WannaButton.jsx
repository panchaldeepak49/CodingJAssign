import React from 'react'

const WannaButton = ({mainImg,subText,mainText}) => {
  
  return (
    <>
      <button className='bg-[#2B95ED] px-2 py-1 flex items-center gap-1 md:gap-4  rounded-md'>
                    <img src={mainImg} className='w-[18%]'/>
                    <div className='flex flex-col items-start'>
                    <p className='text-[6px] sm:text-[8px] md:text-[10px] text-[#FFFFFF]'>{subText}</p>
                    <p className='text-[10px] sm:text-sm md:text-lg text-[#FFFFFF]'>{mainText}</p>
                    </div>
                </button>
    </>
  )
}

export default WannaButton