'use client'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Statistic = ({icon,number,name,className,plus}) => {
  const  [counterOn, setCounterOn] = useState(false)
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
    <div className={`${className} flex flex-col items-center`}>
       <div className='text-[40px] text-[#0f4a2ea2]'>{icon}</div>
       {
        counterOn &&
       <p className='text-[3em] font-bold'><CountUp start={0} end={number} duration={3} delay={0}/><span>{plus}</span></p>
       }
       <h3 className='text-2xl text-center font-bold text-[#0f4a2ea2]'>{name}</h3>
    </div>
    </ScrollTrigger>
  )
}

export default Statistic