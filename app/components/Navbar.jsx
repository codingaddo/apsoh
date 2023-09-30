'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useScroll from './hooks/scroll'
import { FaAngleDown } from 'react-icons/fa'
import Container from './Container'



const Navbar = () => {
    const [fixed,setFixed] = useState(false)
    const [nav,setNav]=useState(false)
    const [show, setShow] = useState(false)

    const handleNav =()=>{
        setNav(!nav)
    
    }

    
        useEffect(()=>{
            window.addEventListener('scroll',()=> {
                if (window.pageYOffset > 10){
                    setFixed(!fixed);
                }else{setFixed(fixed)}

        })
    },[])

  return (
    <div className={!fixed?'flex relative justify-between  bg-[#ffffff] shadow-xl py-7 px-10 w-full':'fixed top-0 flex justify-between  bg-[#ffffff] shadow-xl py-7 px-10 w-full'}>
        <h1>Logo</h1>
        <ul className='hidden md:flex  justify-between gap-7 font-bold'>
        <Link href={'/'} className={`flex items-center transition ease duration-1000 hover:bg-[#c5efbd] py-2 px-7`}>
            HOME
            {/* <span className={`h-[2px] inline-block bg-[#091107db] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-500`}></span> */}
        </Link>
        <Link href={'/about'} onMouseEnter={()=>setShow(!show)} onMouseLeave={()=>setShow(prev=>!prev)} className='flex items-center'>ABOUT APSOH<FaAngleDown/> </Link>
        <Link href={'/academics'} className='flex items-center'>ACADEMICS <FaAngleDown/> </Link>
        <Link href={'/admissions'} className='flex items-center'>ADMISSIONS<FaAngleDown/> </Link>
        <Link href={'/events'} className='flex items-center'>EVENTS<FaAngleDown/> </Link>
        <Link href={'/contact'} className='flex items-center'>CONTACT <FaAngleDown/> </Link>
        </ul>

            { show &&

        <div className='absolute top-24 left-[50vw] bg-slate-50 p-10'>

        <Container>

        </Container>
        </div>
            }

        {/* Responsive Navbar */}
       
        
         <ul className={nav?'flex flex-col h-100 absolute top-[83px] shadow-xl left-0 z-20 py-20 pt-24 px-44 pl-10 overflow-x-hidden  overflow-auto transition-all  ease-in duration-300 bg-[#ffffff]  justify-between gap-9 font-bold md:hidden':'flex flex-col absolute h-100 top-[83px] shadow-xl -left-96 z-20 py-20 pt-24 px-44 pl-10  ransition-all  ease-in duration-300 bg-[#ffffff]  justify-between gap-9 font-bold md:hidden'}>
        <Link href={'/'} className='flex items-center' onClick={()=>setNav(false)}>HOME</Link>
        <Link href={'/about'} className='flex items-center'>ABOUT APSOH<FaAngleDown/> </Link>
        <Link href={'/academics'} className='flex items-center'>ACADEMICS <FaAngleDown/> </Link>
        <Link href={'/admissions'} className='flex items-center'>ADMISSIONS<FaAngleDown/> </Link>
        <Link href={'/events'} className='flex items-center'>EVENTS<FaAngleDown/> </Link>
        <Link href={'/contact'} className='flex items-center'>CONTACT <FaAngleDown/> </Link>
        </ul>

        <button className={nav?'hamburger open flex flex-col md:hidden z-20 shadow-2xl':'hamburger  flex flex-col md:hidden z-20 shadow-2xl'} onClick={handleNav}>
            <span className='bg-[#66b539] top'></span>
            <span className='bg-[#66b539] middle'></span>
            <span className='bg-[#66b539] bottom'></span>
        </button>

    </div>
  )
}

export default Navbar