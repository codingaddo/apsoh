'use client'
import React, { useEffect, useRef, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide, SlideProps } from 'react-slideshow-image'

import Carousel from "nuka-carousel"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const MyCarousel = ({children,slidsToShow}) => {

  

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
    <button className='arrowL' onClick={previousSlide}>{size>850 && <FaArrowAltCircleLeft className='hover:text-green-400'/>}</button>
  )}
  renderCenterRightControls={({ nextSlide }) => (
    <button className='arrowR' onClick={nextSlide}>{size>850 && <FaArrowAltCircleRight className='hover:text-green-400'/>}</button>
  )}
  className='cursor-pointer'
 >
{children}

</Carousel>

  </>
    
  )
}

export default MyCarousel