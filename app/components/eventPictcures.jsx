'use client'
import React, { useEffect, useState } from 'react'
import MyCarousel from './Carousel'
import svgs from './slidePics/svg'
import Image from 'next/image'

const EventPictcures = ({img,text,bg}) => {

    const [size,setSize]= useState(0)
    useEffect(()=>{
        setSize(window.innerWidth);
    },[size,setSize])
  return (
    <div className={`${bg} flex flex-col gap-7  md:p-2`}>
        <h2 className='text-4xl pb-5 font-bold text-slate-600 text-center md:text-left'>{text}</h2>
        
        <MyCarousel slidsToShow={size>850?3:1}>
         {
        img.map((item,index)=>{
          return(
              
            <div key={index} className='slider p-3 md:px-10 border-e-2 hover:scale-110 ease-in duration-300 '>
              {
                
                 <Image
              src={item}
              alt='news'
              style={{
                width:'300px',
                height:'300px',
                borderRadius:'2vw',
                objectFit:'cover'
  
              }}
              />
              }

             
            </div>
          )
        })
      }
      </MyCarousel>
      </div>
  )
}

export default EventPictcures