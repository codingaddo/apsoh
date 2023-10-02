'use client'
import React, { useEffect, useRef, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide, SlideProps } from 'react-slideshow-image'

import Carousel from "nuka-carousel"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const MyCarousel = ({children}) => {

  

   const [size,setSize]= useState(0)
    useEffect(()=>{
        setSize(window.innerWidth);
    },[size,setSize])
  return (

       <>

<Carousel 
autoplay={3000} 
wrapAround 
dragging={true} 
pauseOnHover={false}
enableKeyboardControls={true}
renderBottomCenterControls={{}}
  renderCenterLeftControls={({ previousSlide }) => (
    <button className='arrowL' onClick={previousSlide}>{size>878&& <FaArrowAltCircleLeft/>}</button>
  )}
  renderCenterRightControls={({ nextSlide }) => (
    <button className='arrowR' onClick={nextSlide}>{size>878&& <FaArrowAltCircleRight/>}</button>
  )}
  className='cursor-pointer'
 >
{children}

</Carousel>

  </>
    
  )
}

export default MyCarousel