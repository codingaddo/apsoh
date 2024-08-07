'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import svgs from './slidePics/svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FeesCard = ({text,url,animation,duration}) => {
    const [isShow, setIsShow] = useState(false)

      useEffect(()=>{
    Aos.init()
  })

  return (
        <div className=' bg-slate-300 h-[480px] w-full md:w-[25vw] rounded-xl flex flex-col items-center gap-10 pt-8 shadow-xl hover:shadow-2xl '
        onMouseEnter={()=>setIsShow(true)} 
        onMouseLeave={()=>setIsShow(false)}
        data-aos = {animation}
        data-aos-duration={duration}
        
        >
            <Image
            src={svgs[3]}
            alt='image'
            height={50}
            width={150}
            />
            <div className='flex flex-col gap-5 bg-slate-50 w-full h-full text-center p-10 pt-16 '>
            <h3 className='text-3xl text-green-600 text-center '>
                {text}
            </h3>
            {
                isShow &&
            < Link href={url} target='_blank' className=' ease-in duration-300 bg-green-500 rounded-lg py-2 p-1 font-medium text-white text-xl shadow-xl hover:shadow-2xl hover:bg-green-600'>
                View
            </Link>
            }


          </div>

        </div>
 
  )
}

export default FeesCard