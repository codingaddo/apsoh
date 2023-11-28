'use client'
import React, { useEffect, useRef, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide, SlideProps } from 'react-slideshow-image'

import Carousel from "nuka-carousel"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { FaAnglesRight, FaAnglesLeft } from 'react-icons/fa6';

const MyCarousel = ({children,slidsToShow, isHover}) => {

   const [size,setSize]= useState(0)

    useEffect(()=>{
        setSize(window.innerWidth);
    },[size,setSize])
  return (

       <>

<Carousel 
slidesToShow={slidsToShow}
autoplay={5000} 
wrapAround 
dragging={true} 
pauseOnHover={true}
enableKeyboardControls={true}
renderBottomCenterControls={{}}

  renderCenterLeftControls={({ previousSlide }) => (
    
      <button className='arrowL' onClick={previousSlide}>{size>850 && <span>{ isHover && <FaAnglesLeft  className='hover:text-green-500'/>}</span>}</button>
    
  )}
  renderCenterRightControls={({ nextSlide }) => (
    <button className='arrowR' onClick={nextSlide}>{size>850 && <span>{ isHover && <FaAnglesRight  className='hover:text-green-500'/>}</span>}</button>
  )}
  className='cursor-pointer'
 >
{children}

</Carousel>

  </>
    
  )
}

export default MyCarousel