import React from 'react'

const WannaCard = ({mainImg,text}) => {
  return (
    <>
      <div className='flex items-center gap-2'>
                   <img src={mainImg} className=' w-[15%]' />
                   <p className='max-450:text-[8px] text-[9px] sm:text-[12px] md:text-sm text-[#393939]'>{text}</p>
       </div>
    </>
  )
}

export default WannaCard