'use client'
import React, { useEffect, useState } from 'react'

const Map = () => {
    const [size,setSize] =useState(0)

    useEffect(()=>{
        setSize(window.innerWidth)
        console.log(size)

    },[size])
  return (
    
    <div className=''>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.5202788921356!2d-0.30641322592530057!3d5.7819246942007325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf0bb24afbd1f1%3A0x4e34fca440d1d58b!2sAfrican%20Preparatory%20School%20of%20Hope!5e0!3m2!1sen!2sgh!4v1700102171132!5m2!1sen!2sgh" width={350} height={400} style={{border:1}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
  )
}

export default Map