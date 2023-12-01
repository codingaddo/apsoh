'use client'
import Link from 'next/link'
import React,{useEffect} from 'react'
import { BsDownload } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'

const DownloadForm = ({className}) => {
   useEffect(()=>{
    Aos.init({duration:2000});
  })
  
  return (
      <div className={`flex flex-col items-center md:${className} `} data-aos = 'zoom-in'>
                <h2 className='text-xl text-center md:text-left pb-3 font-bold text-slate-600'>Download The Full Enrollment Application Form</h2>
                <button className=' flex items-center justify-center gap-1 bg-green-600 hover:animate-none rounded-lg py-3 w-48 font-bold shadow-sm text-xl text-[#f8f8f6] hover:bg-green-500 hover:shadow-2xl  ease duration-300'>
                    <Link href={''}>Download</Link>
                    <BsDownload className='animate-bounce font-bold text-[#f8f8f6]' />
                </button>
            </div>
  )
}

export default DownloadForm