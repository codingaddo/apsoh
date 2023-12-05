'use client'
import React, { useEffect } from 'react'
import Image from 'next/image';
import director from '../../public/assets/Florence-Adjepong.jpg'
import { FaHandsHoldingChild } from "react-icons/fa6";
import {GiGraduateCap} from 'react-icons/gi'
import { IoTelescope } from "react-icons/io5";
import Cards from '../components/Cards';
import DownloadForm from '../components/DownloadForm';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Directors from '../components/Directors';

const About = () => {
  useEffect(()=>{
    Aos.init()
  })
 

  return (
    <>
    
    <div className='p-1 pt-10 sm:pt-10 md:p-10 flex  flex-col items-center'>
      
    <h1 className='uppercase text-xl font-bold text-slate-600 '>about us</h1>
    <div className='flex flex-col md:flex-row items-center md:items-stretch justify-center  md:justify-between gap-5 md:gap-16 pb-16'>
      <div className='w-3/3 rounded-2xl pt-7 md:pt-14 ' data-aos='flip-right' data-aos-duration='1000'>
        <h1 className='md:hidden text-4xl font-bold text-green-600 text-center pb-5 '>Welcome</h1>

        <Image
          src={director}
          alt='Director'
          width={''}
          height={''}
          priority={true}
          placeholder='blur'
          className='rounded-2xl w-[550px] h-[400px] shadow-2xl'
        />
      </div>
      <div className='p-5 md:w-2/3 text-justify '>
        <h1 className='hidden md:inline-block text-4xl font-bold text-green-600 py-4'>Welcome</h1>
        <div className='flex flex-col gap-3'>
        <p className=' text-[1.05em] text-gray-500 md:leading-8 leading-6'>
          Alpha Beta Education Centres is a co-education international school based in Accra and open to children aged 18 months to 18 years.
        </p>
        <p className=' text-[1.05em] text-gray-500 md:leading-8 leading-6'>
          It was founded by Rev. Samuel and Florence Adjepong who relocated from the UK in 1986. The school began with six children, ages two to three years under the carport of their home in Dansoman in September 1988, and so it was that the Alpha Beta Montessori Learning Centre took off. The success of the pre-school resulted in the setting up of the Kindergarten in 1991 which was followed by the start of the first phase of Alpha Beta Primary and Junior Secondary School in 1992.
        </p>
        <p className=' text-[1.05em] text-gray-500 md:leading-8 leading-6'>
          Today, Alpha Beta is one of the top private schools in Ghana, with a student and staff body of over 800 individuals, and offering an enriched British curriculum with a distinct focus on entrepreneurial leadership from the Primary level. The school building is also a landmark edifice prominently situated on the Dansoman High Street. Alpha Beta continues to expand its physical infrastructure.
        </p>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row gap-16 p-5 md:p-1 mb-24'>
       <Cards
        text={'Mission'} 
        icon={<IoTelescope className='text-green-500 text-[80px]'/>} 
        para={'To expose students to an enriched teaching and learning environment which promotes knowledge, Christian values and service to others.'}
        hstyle={'text-green-700 text-4xl font-bold'}
         pstyle={'leading-7 text-[1.07em]'}
         width={'[35vw]'}

        />
     <Cards
      text={'Vision'}
       icon={<GiGraduateCap className='text-green-500 text-[80px]'/>} 
       para={'To raise leaders of tomorrow who shall be part of the solution to Africa’s developmental challenges.'}
       hstyle={'text-green-700 text-4xl font-bold'}
       pstyle={'leading-7 text-[1.07em]'}
       width={'[35vw]'}
       />
    </div>

    <div className='p-5'>
      <h1 className='text-4xl text-green-600 font-bold text-center md:text-start pb-5'>Core Values in Action</h1>
      <div className='py-5  grid  grid-cols-2 md:grid-cols-3 gap-10 items-center'>
        <Cards width={'[25vw]'}
         icon={<FaHandsHoldingChild className='text-green-500 text-[80px]' />}
         text={'Services'}
         para={'We believe that the knowledge skills and experiences of our students should also be used to benefit others in their community, country and beyond.'}
         pstyle={'leading-7 text-[1.07em]'}
         hstyle={'text-green-700 text-4xl font-bold'}

         />
        <Cards width={'[25vw]'}
           icon={<FaHandsHoldingChild className='text-green-500 text-[80px]' />}
         text={'Discipline'}
         para={'We believe that the knowledge skills and experiences of our students should also be used to benefit others in their community, country and beyond.'}
         pstyle={'leading-7 text-[1.07em]'}
         hstyle={'text-green-700 text-4xl font-bold'}
        />
        <Cards width={'[25vw]'}
           icon={<FaHandsHoldingChild className='text-green-500 text-[80px]' />}
         text={'Integrity'}
         para={'We believe that the knowledge skills and experiences of our students should also be used to benefit others in their community, country and beyond.'}
         pstyle={'leading-7 text-[1.07em]'}
         hstyle={'text-green-700 text-4xl font-bold'}
        />
        <Cards width={'[25vw]'}
           icon={<FaHandsHoldingChild className='text-green-500 text-[80px]' />}
         text={'Excellence'}
         para={'We believe that the knowledge skills and experiences of our students should also be used to benefit others in their community, country and beyond.'}
         pstyle={'leading-7 text-[1.07em]'}
         hstyle={'text-green-700 text-4xl font-bold'}
        />
        <Cards width={'[25vw]'}
           icon={<FaHandsHoldingChild className='text-green-500 text-[80px]' />}
         text={'Leadership'}
         para={'We believe that the knowledge skills and experiences of our students should also be used to benefit others in their community, country and beyond.'}
         pstyle={'leading-7 text-[1.07em]'}
         hstyle={'text-green-700 text-4xl font-bold'}
        />
        <Cards width={'[25vw]'}
           icon={<FaHandsHoldingChild className='text-green-500 text-[80px]' />}
         text={'Hard work'}
         para={'We believe that the knowledge skills and experiences of our students should also be used to benefit others in their community, country and beyond.'}
         pstyle={'leading-7 text-[1.07em]'}
         hstyle={'text-green-700 text-4xl font-bold'}
        />
      </div>
    </div>

    </div>
    <Directors/>
      <DownloadForm className={'items-center'}/>
    </>
  )
}
export default About;
