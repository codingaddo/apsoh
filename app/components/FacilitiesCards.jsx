'use client'
import React, { useEffect } from 'react'
import afterSchoop from '../../public/assets/afterSchool.png'
import classSize from '../../public/assets/classSize.png'
import Library from '../../public/assets/digitalLib.png'
import meal from '../../public/assets/meals.png'
import itLab from '../../public/assets/itLab.png'
import equip from '../../public/assets/equip.webp'
import playGround from '../../public/assets/playGround.webp'
import sClassRoom from '../../public/assets/sClassRoom.png'
import primaryIcon from '../..//public/assets/primary-icons-03.png'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

const facilities = [
    {
        img:Library,
        text:'Modern Library'
    },
    {
        img:itLab,
        text:'Modern ICT Lab'
    },
    {
        img:classSize,
        text:'Small class sizez'
    },
    {
        img:meal,
        text:'A Large Carnteen'
    },
   
    {
        img:sClassRoom,
        text:'Modern Spacious Classrooms'
    },
    {
        img:playGround,
        text:'Playground Equipment'
    },
    
    
]

const FacilitiesCards = () => {
     useEffect(()=>{
    Aos.init({duration:2000})
  })
 
  return (
    <div className='py-5 grid  sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center'>
        {
            facilities.map((item)=>(
                <div 
                key={item.img}
                className='flex flex-col items-center justify-center md:w-[25vw] h-[400px] border bg-slate-200 rounded-xl shadow-xl'
                data-aos = 'zoom-in'
                >
                    <div>
                    <Image 
                    src={item.img}
                    alt={item.text}
                    width={120}

                    />
                    </div>
                    <h1 className='text-2xl p-10 text-center text-green-600 font-bold'>{item.text}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default FacilitiesCards
