'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'



const Slider = ({items}) => {
  const [current,setCurrent] = useState(0)
  !items?'Hello':items

  const nextImage =()=>{
    setCurrent(current===items.length-1?0:current+1)
  }
  const prevImage =()=>{
    setCurrent(current===0?items.length-1:current-1)
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent(current===items.length-1? 0: current+1)
    }, 5000)
    return ()=> clearInterval(interval)
  },[current])
   
  return (
    <div className='slider'>
      <FaArrowAltCircleLeft className='arrowL' onClick={prevImage}/>
      {
        items.map((item,index)=>{
          return(
              
            <div key={index} className={index===current?'slede active':'slide'}>
              {
                index === current && 
                 <Image
              src={item}
              alt='news'
              style={{
                width:'1000px',
                height:'350px',
                borderRadius:'20px'
  
              }}
              />
              }

             
            </div>
          )
        })
      }
  <FaArrowAltCircleRight className='arrowR' onClick={nextImage}/>
    </div>
  )
}

export default Slider