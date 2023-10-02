'use client'
import React, { useEffect, useRef, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'
// import {Fade, Zoom, Slide} from 'react-slideshow-image'
import { Fade, Slide, SlideProps } from 'react-slideshow-image'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import { Pagination,Navigation,HashNavigation,Autoplay,EffectCoverflow ,Keyboard } from 'swiper/modules';
import Carousel from "nuka-carousel"
import Testimonials from './Testimonials'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import Image from 'next/image'
import pic1 from '../../public/assets/a.png'
import pic2 from '../../public/assets/b.png'
import pic3 from '../../public/assets/c.png'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const Container = ({data}) => {

  

   const [size,setSize]= useState(0)
    useEffect(()=>{
        setSize(window.innerWidth);
    },[size,setSize])
  return (

       <>

<Carousel 
autoplay={5000} 
wrapAround 
dragging={true} 
enableKeyboardControls={true}
  renderCenterLeftControls={({ previousSlide }) => (
    <button className='arrowL' onClick={previousSlide}><FaArrowAltCircleLeft/></button>
  )}
  renderCenterRightControls={({ nextSlide }) => (
    <button className='arrowR' onClick={nextSlide}><FaArrowAltCircleRight/></button>
  )}
  className='cursor-pointer'
 >
<Testimonials name={'Addo'}/>
<Testimonials name={'Mike'}/>
<Testimonials name={'Jonas'}/>

</Carousel>
  {/* <Fade>
  
  </Fade> */}
    </>
    
    // <Swiper 
    
    //             slidesPerView={1}
    //              keyboard={{enabled:true}}
    //              navigation={size>600?true:false}
    //              loop={true}
                 
    //              autoplay={{delay:5000, 
    //               disableOnInteraction: false,
                
    //              }}

    //              grabCursor={true}
    //              centeredSlides={true}
    //              coverflowEffect={{
    //               //  rotate: 50,
    //                stretch: 0,
    //                depth: 100,
    //                slideShadows: true,
                   
    //              }}

    //              pagination={{
    //                clickable: true,
    //                dynamicBullets: true,

    //              }}
    //              hashNavigation={{
    //               watchState: true,
    //             }}

    //               modules={[Pagination, Navigation, HashNavigation,Autoplay,EffectCoverflow,Keyboard]}
    //              onAutoplayTimeLeft={5000}

    // >
    //   <SwiperSlide>
    //     <Testimonials/>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <Testimonials/>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <Testimonials/>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <Testimonials/>
    //   </SwiperSlide>
      
    // </Swiper>
 
  )
}

export default Container