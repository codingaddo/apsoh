import React from 'react'
import {svgs} from '../components/slidePics/svg'
import Image from 'next/image';
import {FaFirstAid} from 'react-icons/fa'
import {GiGraduateCap, GiAlarmClock} from 'react-icons/gi'
import Cards from '../components/Cards';

const about = () => {
  return (
    <div className='p-1 pt-10 sm:pt-10 md:p-10 flex  flex-col items-center'>
      <div className='about-head bg-lime-600 w-[250px] p-5 mb-7 '>
      <h1 className='text-center text-4xl font-extrabold  text-[#f1f1f1]'>ABOUT US</h1>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
        <Image
          src={svgs[2]}
          alt=''
          width={350}
        />
        <div className='p-5 md:p-10'>
          <h2 className='text-4xl pb-5 font-bold text-slate-600'>Our Vision</h2>
          <p className='text-[1.1em] text-justify'>
            African Preparatory School of Hope Academy is dedicated to improving the care and education of children . We believe that early childhood is a time of exploration and discovery. We know that young children learn by “hands on” experiences. Our staff is highly qualified to enhance each child’s growth and development in a stimulating atmosphere of warmth and understanding. Our ultimate goal is to allow each child to develop as an individual as well as part of a group in a happy, safe, and nurturing environment.
          </p>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 gap-10 md:grid-cols-3 my-16 p-5'>
     <Cards text={'Safety First'} icon={<FaFirstAid className='text-lime-600 text-[80px]'/>} para={'Staff is First Aid and CPR Certified'}/>
     <Cards text={'Curriculum'} icon={<GiGraduateCap className='text-lime-600 text-[80px]'/>} para={'At APSOH Academy, we utilize the HighReach Learning® curriculum and the Creative Curriculum to aid in the efficient advancement of our children.'}/>
     <Cards text={'Hours'} icon={<GiAlarmClock className='text-lime-600 text-[80px]'/>} para={'We are open weekdays 6:30 AM to 6:30 PM'}/>

      </div>

      <div className='p-5 md:p-10'>
        <h2 className='text-4xl pb-5 font-bold text-slate-600 '>Our Mission</h2>
        <p className='text-[1.1em] text-justify' >
          At APSOH, we nurture a safe and supportive learning environment that promotes high academic and social achievement for all students. We meet the needs of all learners through meaningful instruction and work collaboratively with colleagues and parents to support student learning.
        </p>
      </div>
    
    <div className='p-5 md:p-10 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-16'>
      <div className='list'>
        <h2 className='text-4xl pb-5 font-bold text-slate-600'>Our Beliefs</h2>
        <ul>
          <div className='flex'><span className='text-xl pr-2'>👉</span><li className='pb-2'>Students engage in purposeful learning and authentic delivery.</li></div>
          <div className='flex'><span className='text-xl pr-2'>👉</span><li className='pb-2'>Staff members set and hold high expectations for all students.</li></div>
          <div className='flex'><span className='text-xl pr-2'>👉</span><li className='pb-2'>Our Home-School partnership thrives with ongoing communication and parent participation.</li></div>
          <div className='flex'><span className='text-xl pr-2'>👉</span><li className='pb-2'>Our school community respects and embraces our diversity.</li></div>
        </ul>
      </div>

      <Image
        src={svgs[1]}
        alt=''
        width={340}
      />
      
      </div>

    </div>
  )
}
export default about;
