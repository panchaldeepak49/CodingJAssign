import React from 'react'
import quoteImg from '/Images/New/quote.png';
import programmerImg from '/Images/New/programmerwan.png';

const AgreeCard = () => {
  return (
    <>
    
            <div className='relative w-[30%] h-auto bg-[#FFFFFF] rounded-xl max-450:px-1 px-4 md:px-10 pt-7 pb-5 z-50'>
            <img src={programmerImg} className='absolute max-450:w-[22%] w-[12%] max-450:left-[40%] left-[45%] max-450:-top-[3%] -top-[6%] md:-top-[10%] h-auto' />
            <img src={quoteImg} className='absolute  w-[6%] left-[10%] h-auto' />
                   <p className='mt-4 text-[10px] md:text-xs text-[#393939] italic flex justify-center'> Lorem ipsum dolor sit amet, consectetur </p>
                   <p className='text-[10px] md:text-xs text-[#393939] italic flex justify-center'>adipiscing elit.Nunc vulputate libero et velit </p> 
                   <p className='text-[10px] md:text-xs text-[#393939] italic flex justify-center'>interdum, ac aliquet odio mattis. Class aptent taciti </p>
                   <p className='text-[10px] md:text-xs text-[#393939] italic flex justify-center'>sociosqu ad litora torquent per conubia nostra, per</p>
                    <p className='text-[10px] md:text-xs text-[#393939] italic flex justify-center'>inceptos himenaeos.</p>
                <img src={quoteImg} className='absolute w-[6%] right-[10%] h-auto' />
                <p className='mt-2 text-[#1C408E] font-medium flex justify-center'>Saanvi Patel</p> 
                <p className='text-[10px] text-[#1C408E] flex justify-center'>Executive Engineer</p>   
            </div>
        
    </>
  )
}

export default AgreeCard