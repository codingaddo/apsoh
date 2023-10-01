'use client'
import React, { useEffect, useRef, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination,Navigation,HashNavigation,Autoplay,EffectCoverflow ,Keyboard } from 'swiper/modules';

import Testimonials from './Testimonials'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const Container = () => {

  

   const [size,setSize]= useState(0)
    useEffect(()=>{
        setSize(window.innerWidth);
    },[size,setSize])
  return (
    
    <Swiper 
    
                slidesPerView={1}
                 keyboard={{enabled:true}}
                 navigation={size>600?true:false}
                 loop={true}
                 
                 autoplay={{delay:5000, 
                  disableOnInteraction: false,
                
                 }}

                 grabCursor={true}
                 centeredSlides={true}
                 coverflowEffect={{
                  //  rotate: 50,
                   stretch: 0,
                   depth: 100,
                   slideShadows: true,
                   
                 }}

                 pagination={{
                   clickable: true,
                   dynamicBullets: true,

                 }}
                 hashNavigation={{
                  watchState: true,
                }}

                  modules={[Pagination, Navigation, HashNavigation,Autoplay,EffectCoverflow,Keyboard]}
                 onAutoplayTimeLeft={5000}

    >
      <SwiperSlide>
        <Testimonials/>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonials/>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonials/>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonials/>
      </SwiperSlide>
      
    </Swiper>
    
  )
}

export default Container