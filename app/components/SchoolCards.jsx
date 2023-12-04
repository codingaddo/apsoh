
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import kids from '../../public/assets/kids.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'


const SchoolCards = ({school,animate,time}) => {
  
  useEffect(()=>{
    Aos.init({duration:2000});
  })
  return (
     <div 
     class="flex flex-wrap flex-col items-center p-6 rounded-xl bg-veryLightGray md:w-1/3"
      data-aos={animate}
       data-aos-duration={time}
      >
        <h3 className=' text-slate-100 text-2xl font-bold p-2 bg-green-600'>{school}</h3>
         <Image
          src={kids}
          alt=''
          priority={true}
          placeholder='blur'
          className='rounded-xl'
         />    
      </div>
  )
}

export default SchoolCards