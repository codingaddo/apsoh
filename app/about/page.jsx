import React from 'react'
import {svgs} from '../components/slidePics/svg'
import Image from 'next/image';
import {FaFirstAid} from 'react-icons/fa'
import {GiGraduateCap, GiAlarmClock} from 'react-icons/gi'
import Cards from '../components/Cards';
import DownloadForm from '../components/DownloadForm';

const about = () => {
  return (
    <>
      <div className='h-[40vw] md:h-[30vw] w-full relative bg-[#0000005f]'>
        <Image
          src={svgs[1]}
          alt=''
        //  loading='lazy'
         priority

           style={{
              width:"100%",
              height:"100%",
              zIndex: "-40",
              position: "relative",
              backgroundColor:"white",
              objectFit:'contain',
              paddingTop:'5px'

           }}
        />
        <h2 className="relative bottom-28 md:bottom-60 font-extrabold text-[#f1f1f1] text-center  text-4xl">About Us</h2>
      </div>
    <div className='p-1 pt-10 sm:pt-10 md:p-10 flex  flex-col items-center'>
     

        <div className='p-3 md:p-7'>
          <h2 className='text-3xl text-center md:text-left pb-5 font-bold text-slate-600'>Our Vision</h2>
          <p className='text-[1.05em] text-slate-600 text-justify'>
            African Preparatory School of Hope Academy is dedicated to improving the care and education of children . We believe that early childhood is a time of exploration and discovery. We know that young children learn by “hands on” experiences. Our staff is highly qualified to enhance each child’s growth and development in a stimulating atmosphere of warmth and understanding. Our ultimate goal is to allow each child to develop as an individual as well as part of a group in a happy, safe, and nurturing environment.
          </p>
        </div>

      <div className='p-5 md:p-7'>
        <h2 className='text-3xl text-center md:text-left pb-3 font-bold text-slate-600 '>Our Mission</h2>
        <p className='text-[1.05em] text-slate-600 text-justify' >
          At APSOH, we nurture a safe and supportive learning environment that promotes high academic and social achievement for all students. We meet the needs of all learners through meaningful instruction and work collaboratively with colleagues and parents to support student learning.
        </p>
      </div>
    
    <div className='p-5 md:p-7 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-16'>
      <div className='list'>
        <h2 className='text-3xl text-center md:text-left pb-3 font-bold text-slate-600'>Our Beliefs</h2>
        <ul>
          <div className='flex'><span className='text-xl pr-2 text-slate-600'>👉</span><li className='pb-2 text-[1em]'>Students engage in purposeful learning and authentic delivery.</li></div>
          <div className='flex'><span className='text-xl pr-2 text-slate-600'>👉</span><li className='pb-2 text-[1em]'>Staff members set and hold high expectations for all students.</li></div>
          <div className='flex'><span className='text-xl pr-2 text-slate-600'>👉</span><li className='pb-2 text-[1em]'>Our school community respects and embraces our diversity.</li></div>
          <div className='flex'><span className='text-xl pr-2 text-slate-600'>👉</span><li className='pb-2 text-[1em]'>Our Home-School partnership thrives with ongoing communication and parent participation.</li></div>
        </ul>
      </div>

      <Image
        src={svgs[1]}
        alt=''
        width={340}
      />
      
      </div>


       <div className='grid sm:grid-cols-2 gap-10 md:grid-cols-3 my-16 p-5'>
     <Cards text={'Safety First'} icon={<FaFirstAid className='text-green-600 text-[80px]'/>} para={'Staff is First Aid and CPR Certified'}/>
     <Cards text={'Curriculum'} icon={<GiGraduateCap className='text-green-600 text-[80px]'/>} para={'At APSOH Academy, we utilize the HighReach Learning® curriculum and the Creative Curriculum to aid in the efficient advancement of our children.'}/>
     <Cards text={'Hours'} icon={<GiAlarmClock className='text-green-600 text-[80px]'/>} para={'We are open weekdays 6:30 AM to 6:30 PM'}/>

      </div>
      <DownloadForm className={'items-center'}/>
    </div>
    </>
  )
}
export default about;
