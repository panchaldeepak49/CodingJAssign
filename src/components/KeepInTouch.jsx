import React from 'react';
import phoneImage from '/Images/New/phone.png';
import mailImage from '/Images/New/mail.png';
import locImage from '/Images/New/map-pin.png';
import instaImage from '/Images/New/instagram.png';
import facebookImage from '/Images/New/facebook.png';
import linkedInImage from '/Images/New/Linkedin.png';

const KeepInTouch = () => {

  return (
    <>
      <div className='my-10 sm:mt-20 flex justify-center '>
      <div className='relative max-450:w-[80%] w-[60%] flex max-450:flex-col '>{/* bg-blue-300 */}

        <div className=' max-450:w-[100%] w-[40%] bg-gradient-to-b from-[#1C408E] to-[#081228]'>
            <div className='flex flex-col justify-center items-center py-20 pl-10 sm:pl-4 lg:px-0'>
                <div>
                <p className='text-base sm:text-xl md:text-2xl lg:text-3xl text-[#FFFFFF]'>Let's keep in touch!</p>
                <p className='mt-2 text-[#FFFFFF] text-[8px] md:text-[12px] lg:text-sm font-light '>Request a CodingPro Institute enquiry! </p>
                <input type='text' className='mt-2 rounded-xl pl-2' placeholder='Institute Name' />
                <p className='mt-2 text-[10px] md:text-[12px] font-light text-[#FFFFFF]'>Create Account</p>
                <p className='mt-2 text-[10px] md:text-[12px] font-light text-[#FFFFFF]'>Sign In</p>

                <div className='mt-2 flex gap-2'>
                  <img src={phoneImage} className='w-[8%] text-[8px] md:text-[10px] font-extralight'/>
                  <p className='text-[#FFFFFF] text-[10px] md:text-[12px] font-light'>+91 9797359144</p>
                </div>

                <div className='mt-2 flex gap-2'>
                  <img src={mailImage} className='w-[8%] text-[10px] font-extralight'/>
                  <p className='text-[#FFFFFF] text-[10px] md:text-[12px] font-light'>codingjr.in@gmail.com</p>
                </div>

                <div className='mt-2 flex gap-2'>
                  <img src={locImage} className='w-[5%] text-[10px] font-light'/>
                  <p className='text-[#FFFFFF] text-[10px] md:text-[12px] font-light'>AIC-BHU ,Varanasi, 421004</p>
                </div>

                </div>
            </div>
        </div>
       
        <div className='max-450:w-[100%] w-[60%] bg-gradient-to-b from-[#0F234D]  to-[#2B95ED] via-[#1C40BE]'>
            <div className='grid grid-cols-3 py-20'>
                <div className='flex flex-col gap-2 px-4 '>{/* bg-red-300 */}
               <p className='text-[#FFFFFF] text-sm sm:text-base'>Courses </p>
               <p className='text-[#FFFFFF] text-[10px] sm:text-[12px] font-extralight'>Campus Training Program </p>
               <p className='text-[#FFFFFF] text-[10px] sm:text-[12px] font-extralight'>Professional Training Program </p>
               <p className='text-[#FFFFFF] text-[10px] sm:text-[12px] font-extralight'>B. Tech </p>
               <p className='text-[#FFFFFF] text-[10px] sm:text-[12px] font-extralight'>B. Des</p>
               </div>

               <div className='flex flex-col gap-2 px-4 '>{/* bg-green-300 */}
               <p className='text-[#FFFFFF] text-sm sm:text-base'>Company </p>
               <p className='text-[#FFFFFF] text-[10px] sm:text-[12px] font-extralight'>About Us </p>
               <p className='text-[#FFFFFF] text-[10px] sm:text-[12px] font-extralight'>Blog </p>
               <p className='text-[#FFFFFF] text-[10px] sm:text-[12px] font-extralight'>Our Team  </p>
               <p className='text-[#FFFFFF] text-[10px] sm:text-[12px] font-extralight'>Privacy</p>
               <p className='text-[#FFFFFF] text-[10px] sm:text-[12px] font-extralight'>Terms & Conditions </p>
               <p className='text-[#FFFFFF] text-[10px] sm:text-[12px] font-extralight'>FAQ</p>
               </div>
               
               <div className='flex flex-col gap-2 px-4 '>{/* bg-red-300 */}
               <p className='text-[#FFFFFF] text-sm sm:text-base'>Follow Us  </p>
                <div className='grid grid-cols-3 '>
                    <img src={instaImage} className='w-[60%]' />
                    <img src={facebookImage} className='w-[60%]' />
                    <img src={linkedInImage} className='w-[60%]' />
                </div>
               </div>

            </div>
        </div>

      </div>
      </div>
    </>
  )
}

export default KeepInTouch