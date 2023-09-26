'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useScroll from './hooks/scroll'
import { FaAngleDown } from 'react-icons/fa'



const Navbar = () => {
    const [fixed,setFixed] = useState(false)
        useEffect(()=>{
            window.addEventListener('scroll',()=> {
                if (window.pageYOffset > 10){
                    setFixed(!fixed);
                }else{setFixed(fixed)}
        })
    },[])

  return (
    <div className={!fixed?'flex relative justify-around items-center bg-[#ffffff] shadow-xl py-7 w-full':'fixed top-0 flex justify-around items-center bg-[#ffffff] shadow-xl py-7 w-full'}>
        <h1>Logo</h1>
        <ul className='flex justify-between gap-10 font-bold'>
        <Link href={'/'} className='flex items-center'>HOME</Link>
        <Link href={'/about'} className='flex items-center'>ABOUT APSOH<FaAngleDown/> </Link>
        <Link href={'/'} className='flex items-center'>ACADEMICS <FaAngleDown/> </Link>
        <Link href={'/'} className='flex items-center'>ADMISSIONS<FaAngleDown/> </Link>
        <Link href={'/'} className='flex items-center'>EVENTS<FaAngleDown/> </Link>
        <Link href={'/'} className='flex items-center'>CONTACT <FaAngleDown/> </Link>

        </ul>
    </div>
  )
}

export default Navbar