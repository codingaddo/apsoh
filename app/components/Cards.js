'use client'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Cards = ({icon,text,para,pstyle,hstyle,width,animation,duration}) => {
    useEffect(()=>{
    Aos.init()
  })
  return (
        <div  
        className={`card flex flex-col items-center pt-10 gap-5 text-center w-full md:w-${width} h-[480px] p-5 rounded-xl bg-slate-200 shadow-xl cursor-pointer hover:shadow-2xl ease-in-out duration-300 `}
        data-aos = {animation}
        data-aos-duration={duration}
        >
            <div className='text-lime-500]'>
            {icon}
            </div>
            <h2 className={`${hstyle}`}>{text}</h2>
            <p className={`${pstyle}`}>{para}</p>

        </div>

  )
}

export default Cards