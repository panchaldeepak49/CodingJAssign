import React from 'react';
import mobileImage from '/Images/New/mobileImage.png';
import ornamentImage from '/Images/New/Ornament 88.png';
import recordedLectImage from '/Images/New/Glyph.png';
import keyboardImage from '/Images/New/Vector_24.png';
import quizzesImage from '/Images/New/Quizzes.png';
import projectSizeImage from '/Images/New/Vector_25.png';
import appCodingImage from '/Images/New/Page-1.png';
import cloudImage from '/Images/New/Vector_26.png';
import evaluationImage from '/Images/New/Vector_23.png';
import magazineImage from '/Images/New/Magazine.png';
import playImage from '/Images/New/Icon.png';
import appleImage from '/Images/New/Apple.png';
import WannaCard from './WannaCard';
import WannaButton from './WannaButton';

const Wanna = () => {
    
  return (
    <>
    <div className='flex justify-center items-center'>
    <div className='mt-20 w-[60%] flex justify-between'>

        <div className='w-[30%] '>     {/* bg-blue-400 */}
            <img src={mobileImage} className=' w-[90%]' />
        </div>
        
        <div className='w-[50%] sm:mt-3 md:mt-5 '>  {/* bg-green-400 */}
            {/* <img src={mobileImage} className=' w-[10%]' /> */}
            <p className='text-[#4C5856] text-xl sm:text-2xl md:text-3xl text-medium'>Wanna See More?</p>
            <p className='sm:mt-2 text-[#4C5856] text-xl sm:text-2xl md:text-3xl text-medium'>Join Us !</p>
            
            <div>
            <div className='md:mt-8 lg:mt-10 grid grid-cols-2 md:gap-4'>
                <WannaCard mainImg={recordedLectImage} text='Recorded Lectures' />
                <WannaCard mainImg={keyboardImage} text='Language Specific Keyboard' />

                <WannaCard mainImg={quizzesImage} text='Online Quizzes' />
                <WannaCard mainImg={projectSizeImage} text='Infinite Project Size' />

                <WannaCard mainImg={appCodingImage} text='In-app Coding' />
                <WannaCard mainImg={cloudImage} text='Cloud Computation' />

                <WannaCard mainImg={evaluationImage} text='Evaluation Reports' />
                <WannaCard mainImg={magazineImage} text='Coding Magazine' />
            </div>

               <div className='mt-8 lg:mt-20 flex gap-4'>
                {/* <button className='bg-[#2B95ED] px-2 py-1 flex items-center gap-4 w-[40%] rounded-md'>
                    <img src={playImage} className='w-[18%]'/>
                    <div className='flex flex-col items-start'>
                    <p className='text-[10px] text-[#FFFFFF]'>GET IT ON</p>
                    <p className='text-lg text-[#FFFFFF]'>Google Play</p>
                    </div>
                </button> */}
                 <WannaButton mainImg={playImage} subText='GET IT ON' mainText='Google Play' />
                 <WannaButton mainImg={appleImage} subText='Download on the' mainText='App Store' />

               </div>
            </div>
        </div>

        <div className='flex flex-col items-end w-[15%] '>
            <img src={ornamentImage} className=' w-[100%]' />
            <img src={ornamentImage} className=' w-[100%]' />
        </div>

        </div>
    </div>
    </>
  )
}

export default Wanna