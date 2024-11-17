import React from 'react';
import starImg from '/Images/Ornament_116.png';
import ropeImg from '/Images/Ornament_114.png';
import fullEllipseImg from '/Images/Ellipse_99.png';
import partEllipseImg from '/Images/Ellipse_100.png';
import removeBgImg from '/Images/RemoveBG.png';
import group1Img from '/Images/Group1.png';
import degreeImg from '/Images/Degree.png';
import onlineImg from '/Images/Online.png';
import ai1Img from '/Images/AI1.png';
import resumeImg from '/Images/Vector_18.png';
import placementImg from '/Images/Vector_19.png';
import interviewImg from '/Images/Vector_20.png';
import cardCutLImg from '/Images/Vector_44.png';
import cardCutRImg from '/Images/Vector_45.png';
import circleImg from '/Images/circle.png';
import CardLeft from './WeOffer/CardLeft';
import CardRight from './WeOffer/CardRight';


const WeOffer = () => {

  return (
    <>
    <div className='mt-10 flex justify-center '>
       <div className='flex flex-col justify-center items-center'>
        <p className='max-450:text-xl text-2xl sm:text-4xl font-Poppins font-medium text-[#4C5856]'>Because We Offer What You Need  </p>
       <p className='mt-2 max-450:text-xl text-2xl sm:text-4xl font-Poppins font-medium text-[#4C5856]'>At <span className='text-[#2B95ED]'>Every Step</span> Of Your  </p>
       
       <p className='mt-2 max-450:text-xl  text-2xl sm:text-4xl font-Poppins font-medium text-[#2B95ED]'>Transformative Learning Journey  </p>
       <img src={starImg}  className='relative max-450:w-[10%] w-[15%] max-450:right-40 right-52 sm:right-80 bottom-12'/>
       </div>
    </div>
     
     <div className='flex justify-center'>
    <img src={ropeImg}  className='relative w-[8%] bottom-16 left-48'/>
    </div>

    {/* <div className='mt-10 flex flex-col items-center'>
       <img src={removeBgImg}  className='w-[30%] relative top-48 '/>
       <img src={fullEllipseImg}  className='w-[30%]'/>
       <img src={partEllipseImg}  className='w-[30%] relative bottom-32'/>
    </div> */}

    <div className='relative mt-10 flex items-center justify-center'>
  <img src={removeBgImg} className='max-450:w-[50%] w-[30%] absolute bottom-10 sm:bottom-12' />
  <img src={fullEllipseImg} className='max-450:w-[50%] w-[30%]' />
  <img src={partEllipseImg} className='max-450:w-[50%] w-[30%] absolute max-450:top-11 top-12 sm:top-16 md:top-20 lg:top-28' />
   </div>



   <div className=' mt-10 px-4 sm:px-32 flex gap-10  '>   {/* bg-green-400 */}
   {/* <div className=' mt-10 px-4 sm:px-32 grid max-450:grid-cols-1 grid-cols-2 '> */}
    
       {/* 1st card */}
       
     <div className='relative w-[100%] md:w-[50%] h-52 md:h-52 shadow-2xl border-2 border-[#2B95ED]  rounded-2xl'>   {/* bg-red-400 */}
     {/* <img src={circleImg} className='absolute w-[14%]  left-36 -top-8 ' />  */}
        <div className='mt-5 md:pl-5 flex gap-2 md:gap-5 justify-start items-center'>
        <img src={degreeImg} className='w-[20%] md:w-[18%]' /> 
        <p className='text-[12px] sm:text-sm md:text-2xl font-normal text-[#393939]'>Custom Specialization </p>
        </div>
        <p className='mt-4 md:mt-0 px-2 md:px-10 text-[10px] sm:text-xs lg:text-sm text-[#393939]'> We understand the value of choice so we empower you to design your course and select the 
            specialization that best suites your goals.
        </p>
     </div>
     <img src={cardCutLImg} className='max-450:hidden relative w-[8%] h-56 bottom-2 right-16 sm:right-20 md:right-24 lg:right-32 ' /> 
      
      {/* 2nd card */}
      <img src={cardCutRImg} className='max-450:hidden relative w-[8%] h-56 top-8 left-16 sm:left-20 md:left-24 lg:left-32 ' /> 

      <div className='mt-10 w-[100%] md:w-[50%] h-52 shadow-2xl border-2 border-[#2B95ED] rounded-2xl'>
        <div className='mt-7 pl-5 md:pl-10 flex gap-2 md:gap-5 justify-start items-center'>
        <img src={onlineImg} className='w-[12%]' /> 
        <p className='text-[12px] sm:text-sm md:text-2xl font-normal text-[#393939]'>Virtual Labs </p>
        </div>
        <p className='px-2 md:px-10 sm:mt-4 md:mt-6 text-[10px] sm:text-xs lg:text-sm text-[#393939]'> We provide our students with the convenience of accessing
            a fully equipped lab from anywhere just with an internet connection.
        </p>
     </div>


   </div>


   <div className=' mt-10 px-4 sm:px-32 flex gap-10 '>
     <CardLeft 
      mainImg={ai1Img}
      heading= "AI Tests"
      text= "We understand that teaching alone isn't enough, so we provide our students with AI-powered tests to access their progress."
     />
     
     <CardRight 
       mainImg={resumeImg}
       heading= "Resume Builder"
       text= "We not only support skill development but also leverage AI to highlight those skills effectively on your resume to help you stand out from the crowd."
     />
     </div>

     <div className=' mt-10 px-4 sm:px-32 flex gap-10 '>
     <CardLeft 
      mainImg={placementImg}
      heading= "Placement Preparation"
      text= "We go beyond building skills, taking our students to the next level by providing them with thorough placement preparation."
     />
     
     <CardRight 
       mainImg={interviewImg}
       heading= "AI Interviews"
       text= "Interview can be challenging ,so we use AI to conduct mock interviews, helping our students build confidence and be fully prepared."
     />
     </div>
    </>
  )
}

export default WeOffer