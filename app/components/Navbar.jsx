'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useScroll from './hooks/scroll'


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
    <div className={!fixed?'flex justify-around items-center bg-[#ffffff] shadow-xl py-7 w-full':'fixed top-0 flex justify-around items-center bg-[#ffffff] shadow-xl py-7 w-full'}>
        <h1>Logo</h1>
        <ul className='flex justify-between gap-10 font-bold'>
        <Link href={'/'}>HOME</Link>
        <Link href={'/about'}>ABOUT APSOH</Link>
        <Link href={'/'}>ACADEMICS</Link>
        <Link href={'/'}>ADMISSIONS</Link>
        <Link href={'/'}>EVENTS</Link>
        <Link href={'/'}>CONTACT</Link>

        </ul>
    </div>
  )
}

export default Navbar