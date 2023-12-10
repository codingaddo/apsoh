'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ContactInfo = ({title,icon,text,href}) => {
   useEffect(()=>{
    Aos.init({duration:1500})
  })
 
  return (
    <div 
    data-aos ='zoom-in'
     >
    <Link 
    href={href}
    target='_blank'
     className='flex flex-col items-center gap-4 cursor-pointer border p-7 w-[300px] rounded-xl shadow-lg hover:shadow-2xl'>
        <div className='text-slate-600'>{title}</div>
        <div className='text-green-600 text-4xl'>{icon}</div>
        <div className='text-slate-600'>
            {text}
        </div>
    </Link>
    </div>

  )
    
}

export default ContactInfo