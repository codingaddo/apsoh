'use client'
import React, { useState } from 'react'
import pictures from './GallaryImages'
import Image from 'next/image'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'

const Gallary = ({pics}) => {
  const [openModal,setOpenModal] = useState(false)
  const [slideNumber,setSlideNumber] = useState(0)

  const handleCloseBtn = ()=>{
    setOpenModal(false)
  }

  const handleNextBtn = ()=>{
    setSlideNumber(slideNumber===pictures.length-1 ? 0 : c=>c+1)
  }

  const handlePrevtBtn = ()=>{
    setSlideNumber(slideNumber===0? pictures.length-1: c=>c-1)
  }

  const handleModal = (index)=>{
    setSlideNumber(index)
    setOpenModal(true)

  }

  return (
    <div className=''>
      {
        openModal && <div className='slide-container'>
          <FaAngleLeft className='prev-btn butt' onClick={handlePrevtBtn}/>
          <FaAngleRight className='next-btn butt' onClick={handleNextBtn}/>
          <AiFillCloseCircle className='close-btn butt' onClick={handleCloseBtn}/>
          <div className='fullscreen'>
            <Image
              src={pictures[slideNumber]}
              alt=''
              className='img'
              placeholder='blur'
              // loading="lazy"
              priority={true}
            />
          </div>
        </div>
      }
      <div className='gallary-wrap'>
        {
          pictures.map((picture,index)=>(
          <div key={index} className='single' onClick={()=>handleModal(index)}> 
            <Image 
            src={picture} 
            alt='picture'
            className='img'
            priority={true}
            placeholder='blur'
            // loading='lazy'
            
            />

         </div>
         ))
        }
      </div>
     
    </div>
  )
}

export default Gallary