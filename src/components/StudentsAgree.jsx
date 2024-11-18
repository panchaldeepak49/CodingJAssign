import React,{ Suspense } from 'react';
import waveImg from '/Images/New/Vector_21.png';
import vectorImg from '/Images/New/Vector_22.png';
import boyImg from '/Images/New/image_122.png';
import girlImg from '/Images/New/image_123.png';
import headboyImg from '/Images/New/image_124.png';
import headgirlImg from '/Images/New/image_121.png';
import javaImg from '/Images/New/Java.png';
import cssImg from '/Images/New/css.png';
import reactImg from '/Images/New/React.png';
import nodeImg from '/Images/New/NodeJS.png';
import flutterImg from '/Images/New/Flutter.png';
//import AgreeCard from './AgreeCard';

  const AgreeCard = React.lazy(()=> import('./AgreeCard'));
  
  


const StudentsAgree = () => {

  return (
    <>
    <div className='relative mt-10 w-full'>
       <img src={headboyImg} className='absolute right-[30%] top-[9%]  h-auto w-[20%]' />
       <img src={headgirlImg} className='absolute right-[12%] top-[6%]  h-auto w-[16%]' />
       <img src={waveImg} className='w-full h-auto' /> 
       <img src={vectorImg} className='absolute bottom-0 h-auto w-full z-50' /> 
       <img src={boyImg} className='absolute bottom-[29%] h-auto w-[25%]' />
       <img src={girlImg} className='absolute left-[27%] bottom-[27%] h-auto w-[21%]' />
    </div>
 

    <div className=' w-[100%] h-auto bg-gradient-to-b from-[#0196F9] via-[#2B95ED] to-[#14CBD5] pb-24 '> 
        <div className='relative flex justify-center'>
          <p className='text-white text-xl sm:text-4xl'>And Our Students Agree...</p>
          <img src={javaImg} className='absolute max-450:w-[8%] w-[6%] left-0 h-auto' />
        </div> 

        <div className='relative mt-20 flex justify-between'>
        {/* <div className='relative mt-20 grid grid-cols-3'> */}
        {/* <img src={cssImg} className='absolute w-[6%] left-10 h-auto' /> */}
           <Suspense fallback={<div>Loading image...</div>}>
            <AgreeCard />
            <AgreeCard />
            <AgreeCard />
           </Suspense>
            <img src={cssImg} className='absolute max-450:w-[8%] w-[6%] left-[32%] -top-[20%] h-auto' />
            <img src={reactImg} className='absolute max-450:w-[8%] w-[6%] -bottom-[12%] right-[27%] h-auto' />
        </div>

        <div className='relative mt-10'>
           <img src={nodeImg} className='absolute max-450:w-[8%] w-[6%] left-[17%] h-auto' /> 
           <img src={flutterImg} className='absolute w-[10%] top-[10%] right-[20%] h-auto' /> 
        </div>

    </div>

    
    
    </>
  )
}

export default StudentsAgree