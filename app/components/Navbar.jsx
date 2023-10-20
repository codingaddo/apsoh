'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useScroll from './hooks/scroll'
import { FaAngleDown,FaAngleUp } from 'react-icons/fa'
import Container from './Carousel'



const Navbar = () => {
    const [fixed,setFixed] = useState(false)
    const [nav,setNav]=useState(false)
    const [dropDown,setDropDown] = useState({
        about:false,
        academics:false,
    })


    const toggleDropdowna = (name)=>{
     setDropDown((prevDropdown)=>({
        ...prevDropdown,
        [name]:!prevDropdown[name]
     }))
        
    }
 const closeAllDropdowns = () => {
    setDropDown(dropDown);

    setNav(!nav)
  };





  
    const handleState = ()=>{
        !nav && setDropDown(false);   
        setNav(false)
        setDropDown(false)

    }

 

    const handleNav =()=>{
        setNav(!nav)
        setDropDown(false)
        
    
    }

        useEffect(()=>{
            window.addEventListener('scroll',()=> {
                if (window.pageYOffset > 10){
                    setFixed(!fixed);
                }else{setFixed(fixed)}

        })
    }, [])

  return (
    <div className={!fixed?'flex relative justify-between items-center  z-40 bg-[#ffffff] shadow-xl py-4 px-7 w-full ':' fixed  ease-in-out duration-300 top-0 flex justify-between  bg-[#ffffff] shadow-xl py-4 z-40 px-7 w-full'}>
        <h1>Logo</h1>
        <ul className='hidden md:flex  justify-between gap-2  font-bold'>
        <Link href={'/'} className={`text-center transition ease duration-1000 hover:bg-[#c5efbd] py-2 px-4`}>
            HOME
            {/* <span className='w-[full] bg-[#c5efbd]'></span> */}
        </Link>


           <div className='cursor-pointer transition ease duration-1000 hover:bg-[#c5efbd]' onMouseEnter={()=>toggleDropdowna('about')} onMouseLeave={()=>setDropDown(false)}>
            <button className={` flex text-center transition ease duration-300 hover:bg-[#c5efbd] py-2 px-4`}>
                ABOUT APSOH {dropDown.about?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.about &&
            <div className='flex flex-col bg-[#c5efbd] items-start justify-center gap-2 p-10 absolute w-72 transition ease duration-1000'>
                <Link href={'/about'} className='text-center text-md transition ease duration-300 hover:underline ' onClick={()=>setDropDown(false)}>ABOUT</Link>
                <Link href={'/gallary'} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >GALLARY</Link>
            </div>
            }
        </div>

           <div className='cursor-pointer transition ease duration-1000 hover:bg-[#c5efbd]' onMouseEnter={()=>toggleDropdowna('academics')} onMouseLeave={()=>setDropDown(false)}>
            <button className={` flex text-center transition ease duration-300 hover:bg-[#c5efbd] py-2 px-4`}>
                ACADEMICS {dropDown.academics?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.academics &&
            <div className='flex flex-col bg-[#c5efbd] items-start justify-center gap-2 p-10 absolute w-72 transition ease duration-1000'>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline ' onClick={()=>setDropDown(false)}>STAFF</Link>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >CALENDER</Link>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >NEWS</Link>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >CLUBS</Link>
            </div>
            }
        </div>
           <div className='cursor-pointer transition ease duration-1000 hover:bg-[#c5efbd]' onMouseEnter={()=>toggleDropdowna('academics')} onMouseLeave={()=>setDropDown(false)}>
            <button className={` flex text-center transition ease duration-300 hover:bg-[#c5efbd] py-2 px-4`}>
                ADMISSIONS {dropDown.academics?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.academics &&
            <div className='flex flex-col bg-[#c5efbd] items-start justify-center gap-2 p-10 absolute w-72 transition ease duration-1000'>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline ' onClick={()=>setDropDown(false)}>APPLY NOW</Link>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >FEES</Link>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >CONTACT PRINCIPAL</Link>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >CLUBS</Link>
            </div>
            }
        </div>
              
         <Link href={'/events'} className='text-center transition ease duration-300 hover:bg-[#c5efbd] py-2 px-4 '>EVENTS </Link>
        <Link href={'/contact'} className='text-center transition ease duration-300 hover:bg-[#c5efbd] py-2 px-4'>CONTACT  </Link>
        </ul>

        
            

        {/* Responsive Navbar */}
       
         <ul className={nav?'flex flex-col w-full h-100vh absolute top-[70px] shadow-xl left-0 z-20 py-16 pt-14 px-44 pl-10 overflow-x-hidden  overflow-auto transition-all  ease-in duration-300 bg-[#ffffff]  justify-between gap-5 font-bold md:hidden':'flex flex-col absolute h-100vh top-[70px] shadow-xl -left-96 z-20 py-16 pt-14 px-44 pl-10  ransition-all  ease-in duration-300 bg-[#ffffff]  justify-between gap-10 font-bold md:hidden'}>
        <Link href={'/'} className='flex items-center' onClick={handleState}>HOME</Link>
        <div className='cursor-pointer transition ease duration-1000 focus:outline-none' onClick={()=>toggleDropdowna('about')}>
            <button className={` flex text-center transition ease duration-300 py-2 md:px-4`}>
                ABOUT APSOH {dropDown.about?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.about &&
            <div className='flex flex-col items-start justify-center gap-5 p-10 w-72 transition ease duration-1000'>
                <Link href={'/about'} className='text-left transition ease duration-300 ' onClick={closeAllDropdowns}>ABOUT</Link>
                <Link href={'/gallary'} className='text-left  transition ease duration-300' onClick={closeAllDropdowns}>GALLARY</Link>
            </div>
            }
        </div>
        <div className='cursor-pointer transition ease duration-1000 focus:outline-none' onClick={()=>toggleDropdowna('academics')}>
            <button className={` flex text-center transition ease duration-300 py-2 md:px-4`}>
                ACADEMICS {dropDown.academics?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.academics &&
            <div className='flex flex-col items-start justify-center gap-5 p-10 w-72 transition ease duration-1000'>
                <Link href={'/about'} className='text-left transition ease duration-300 ' onClick={closeAllDropdowns}>STAFF</Link>
                <Link href={'/gallary'} className='text-left  transition ease duration-300' onClick={closeAllDropdowns}>CALENDER</Link>
                <Link href={'/gallary'} className='text-left  transition ease duration-300' onClick={closeAllDropdowns}>NEWS</Link>
            </div>
            }
        </div>


       
        {/* <Link href={'/academics'} className='flex items-center' onClick={handleState}>ACADEMICS  </Link> */}
        <Link href={'/admissions'} className='flex items-center' onClick={handleState}>ADMISSIONS </Link>
        <Link href={'/events'} className='flex items-center' onClick={handleState}>EVENTS </Link>
        <Link href={'/contact'} className='flex items-center' onClick={handleState}>CONTACT  </Link>
        </ul>

        <button className={nav?'hamburger open flex flex-col md:hidden z-20 shadow-2xl focus:outline-none':'hamburger  flex flex-col md:hidden z-20 shadow-2xl focus:outline-none'} onClick={handleNav}>
            <span className='bg-[#66b539] top'></span>
            <span className='bg-[#66b539] middle'></span>
            <span className='bg-[#66b539] bottom'></span>
        </button>

    </div>
  )
}

export default Navbar