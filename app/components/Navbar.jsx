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
        admission:false,
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
                if (window.scrollY > 10){
                    setFixed(!fixed);
                }else{setFixed(fixed)}

        })
    }, [])

  return (
    <div className={!fixed?'flex relative justify-between items-center  z-40 bg-[#ffffff] shadow-xl py-4 px-7 w-full ':' fixed  ease-in-out duration-300 top-0 flex justify-between  bg-[#ffffff] shadow-xl py-4 z-40 px-7 w-full'}>
        <h1 className=' w-28'>Logo</h1>
        <ul className='hidden md:flex  justify-between gap-1  font-bold'>
        <Link href={'/'} className={`text-center transition ease duration-1000 hover:bg-[#c5efbd] py-2 px-4`}>
            HOME
        </Link>


           <div className= 'cursor-pointer transition ease duration-1000 hover:bg-[]' onMouseEnter={()=>toggleDropdowna('about')} onMouseLeave={()=>setDropDown(false)}>
            <button className={` flex text-center transition ease duration-300 hover:bg-[] py-2 px-2`}>
                ABOUT APSOH {dropDown.about?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.about &&
            <div className='flex flex-col bg-[#c5efbd] items-start justify-center gap-2 p-5 absolute  w-72 transition ease duration-1000'>
                <Link href={'/about'} className='text-center text-md transition ease duration-300 hover:underline ' onClick={()=>setDropDown(false)}>ABOUT</Link>
                <Link href={'/gallary'} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >GALLARY</Link>
                <Link href={'/gallary'} className='text-center uppercase text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >our culture</Link>
            </div>
            }
        </div>

           <div className='cursor-pointer transition ease duration-1000 hover:bg-[]' onMouseEnter={()=>toggleDropdowna('academics')} onMouseLeave={()=>setDropDown(false)}>
            <button className={` flex text-center transition ease duration-300 hover:bg-[] py-2 px-4`}>
                ACADEMICS {dropDown.academics?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.academics &&
            <div className='flex flex-col bg-[#c5efbd] items-start justify-center gap-2 p-5 absolute w-72 transition ease duration-1000'>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline ' onClick={()=>setDropDown(false)}>STAFF</Link>
                <Link href={'calender'} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >CALENDER</Link>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >NEWS</Link>
                <Link href={''} className='text-center uppercase text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >SCHOOLS</Link>
            </div>
            }
        </div>
           <div className='cursor-pointer transition ease duration-1000 hover:bg-[]' onMouseEnter={()=>toggleDropdowna('admission')} onMouseLeave={()=>setDropDown(false)}>
            <button className={` flex text-center transition ease duration-300 hover:bg-[] py-2 px-4`}>
                ADMISSIONS {dropDown.admission?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.admission &&
            <div className='flex flex-col bg-[#c5efbd] items-start justify-center gap-2 p-5 absolute w-72 transition ease duration-1000'>
                <Link href={'/apply'} className='text-center text-md transition ease duration-300 hover:underline ' onClick={()=>setDropDown(false)}>APPLY NOW</Link>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >FEES</Link>
                <Link href={''} className='text-center text-md transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >CLUBS</Link>
            </div>
            }
        </div>
              
         <Link href={'/events'} className='text-center transition ease duration-300 hover:bg-[#c5efbd] py-2 px-4 '>EVENTS </Link>
        <Link href={'/contact'} className='text-center transition ease duration-300 hover:bg-[#c5efbd] py-2 px-4'>CONTACT  </Link>
        </ul>

        
            





        {/* Responsive Navbar */}
       
         <ul className={nav?'flex flex-col w-full max-h-[100vh] absolute top-[70px] shadow-xl left-0 z-20 py-16 pt-14 px-44 pl-10 overflow-y-auto transition-all  ease-in duration-300 bg-[#ffffff]  justify-between gap-5 font-bold md:hidden':' overflow-y-auto flex flex-col absolute max-h-[100vh] top-[70px] shadow-2xl -left-96 z-20 py-16 pt-14 px-44 pl-10  transition-all  ease-in duration-300 bg-[#ffffff]  justify-between gap-10 font-bold md:hidden'}>
        <Link href={'/'} className='flex items-center' onClick={handleState}>HOME</Link>
        <div className='cursor-pointer transition ease duration-1000 focus:outline-none' onClick={()=>toggleDropdowna('about')}>
            <button className={` flex text-center transition ease duration-300 py-2 md:px-4`}>
                ABOUT APSOH {dropDown.about?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.about &&
            <div className='flex flex-col items-start justify-center gap-3 p-3 cursor-pointer w-72 transition ease duration-1000'>
                <Link href={'/about'} className='text-left transition ease duration-300 ' onClick={closeAllDropdowns}>ABOUT</Link>
                <Link href={'/gallary'} className='text-left  transition ease duration-300' onClick={closeAllDropdowns}>GALLARY</Link>
                <Link href={'/gallary'} className='text-left  transition ease duration-300 uppercase' onClick={closeAllDropdowns}>Our culture</Link>
            </div>
            }
        </div>
        <div className='cursor-pointer transition ease duration-1000 focus:outline-none' onClick={()=>toggleDropdowna('academics')}>
            <button className={` flex text-center transition ease duration-300 py-2 md:px-4`}>
                ACADEMICS {dropDown.academics?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.academics &&
            <div className='flex flex-col items-start justify-center gap-3 p-3 cursor-pointer w-72 transition ease duration-1000'>
                <Link href={'/about'} className='text-left transition ease duration-300 ' onClick={closeAllDropdowns}>STAFF</Link>
                <Link href={'/calender'} className='text-left  transition ease duration-300' onClick={closeAllDropdowns}>CALENDER</Link>
                <Link href={'/gallary'} className='text-left  transition ease duration-300' onClick={closeAllDropdowns}>NEWS</Link>
                <Link href={'/gallary'} className='text-left  transition ease duration-300 uppercase' onClick={closeAllDropdowns}>schools</Link>
            </div>
            }
        </div>
        <div className='cursor-pointer transition ease duration-1000 focus:outline-none' onClick={()=>toggleDropdowna('admission')}>
            <button className={` flex text-center transition ease duration-300 py-2 md:px-4`}>
                ADMISSIONS {dropDown.admission?<FaAngleUp className='text-2xl'/>:<FaAngleDown className='text-2xl'/>}
            </button>
            {
                dropDown.admission &&
            <div className='flex flex-col items-start justify-center gap-3 p-3 cursor-pointer w-72 transition ease duration-1000'>
                <Link href={'/apply'} className='text-left uppercase transition ease duration-300 ' onClick={closeAllDropdowns}>apply now</Link>
                <Link href={'/fees'} className='text-left uppercase  transition ease duration-300' onClick={closeAllDropdowns}>Fees</Link>
                <Link href={'/clubs'} className='text-left  uppercase transition ease duration-300' onClick={closeAllDropdowns}>clubs</Link>
                
            </div>
            }
        </div>
       
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