'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useScroll from './hooks/scroll'
import { FaAngleDown,FaAngleUp } from 'react-icons/fa'
import Container from './Carousel'



const Navbar = () => {
    const [fixed,setFixed] = useState(false)
    const [nav,setNav]=useState(false)
  const [isOpen1,setIsOpen1]=useState(false)
  const [isOpen2,setIsOpen2]=useState(false)
  const [isOpen3,setIsOpen3]=useState(false)
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

    
    const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    if (isOpen1) {
      setIsOpen2(false);
      setIsOpen3(false);
    }
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    if (isOpen2) {
      setIsOpen1(false);
      setIsOpen3(false);
    }
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    if (isOpen3) {
      setIsOpen1(false);
      setIsOpen2(false);
    }
  };

 const closeAllDropdowns = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setNav(!nav)
  };




  
    const handleState = ()=>{
        !nav && setDropDown(false);   
        setNav(false)
        setDropDown(false)
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);

    }

 

    const handleNav =()=>{
        setNav(!nav)
        setDropDown(false)
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        
    
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
        <ul className='hidden md:flex  justify-between gap-1 font-medium '>
        <Link href={'/'} className={`text-center text-sm transition ease duration-1000 hover:bg-[#c5efbd] py-2 px-4`}>
            HOME
        </Link>


           <li className= 'cursor-pointer transition ease duration-1000 hover:bg-[]' onMouseEnter={()=>toggleDropdowna('about')} onMouseLeave={()=>setDropDown(false)}>
            <button className={` flex items-center  text-sm transition ease duration-300 hover:bg-[] py-2 px-2`}>
                ABOUT APSOH {dropDown.about?<FaAngleUp className='text-sm'/>:<FaAngleDown className='text-sm'/>}
            </button>
            {
                dropDown.about &&
            <div className='flex flex-col bg-[#c5efbd] items-start justify-center gap-2 p-5 absolute  w-72 transition ease duration-1000'>
                <Link href={'/about'} className='text-center text-sm transition ease duration-300 hover:underline ' onClick={()=>setDropDown(false)}>ABOUT</Link>
                <Link href={'/gallary'} className='text-center text-sm transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >GALLARY</Link>
                <Link href={''} className='text-center text-sm transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >CLUBS</Link>
                <Link href={'/gallary'} className='text-center  text-sm transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >OUR CULTURE</Link>
            </div>
            }
        </li>

           <li className='cursor-pointer transition ease duration-1000 hover:bg-[]' onMouseEnter={()=>toggleDropdowna('academics')} onMouseLeave={()=>setDropDown(false)}>
            <button className={` flex items-center justify-center text-sm transition ease duration-300 hover:bg-[] py-2 px-4`}>
                ACADEMICS {dropDown.academics?<FaAngleUp className='text-sm'/>:<FaAngleDown className='text-sm'/>}
            </button>
            {
                dropDown.academics &&
            <div className='flex flex-col bg-[#c5efbd] items-start justify-center gap-2 p-5 absolute w-72 transition ease duration-1000'>
                <Link href={'/staff'} className='text-center text-sm transition ease duration-300 hover:underline ' onClick={()=>setDropDown(false)}>STAFF</Link>
                <Link href={'/calender'} className='text-center text-sm transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >CALENDER</Link>
                <Link href={''} className='text-center text-sm transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >NEWS</Link>
                <Link href={''} className='text-center uppercase text-sm transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >SCHOOLS</Link>
            </div>
            }
        </li>
           <li className='cursor-pointer transition ease duration-1000 hover:bg-[]' onMouseEnter={()=>toggleDropdowna('admission')} onMouseLeave={()=>setDropDown(false)}>
            <button className={`flex items-center justify-center  text-sm transition ease duration-300 hover:bg-[] py-2 px-4`}>
                ADMISSIONS {dropDown.admission?<FaAngleUp className='text-sm'/>:<FaAngleDown className='text-sm'/>}
            </button>
            {
                dropDown.admission &&
            <div className='flex flex-col bg-[#c5efbd] items-start justify-center gap-2 p-5 absolute w-72 transition ease duration-1000'>
                <Link href={'/apply'} className='text-center text-sm transition ease duration-300 hover:underline ' onClick={()=>setDropDown(false)}>APPLY NOW</Link>
                <Link href={''} className='text-center text-sm transition ease duration-300 hover:underline  ' onClick={()=>setDropDown(false)} >FEES</Link>
            </div>
            }
        </li>
              
         <Link href={'/events'} className='text-center text-sm transition ease duration-300 hover:bg-[#c5efbd] py-2 px-4 '>EVENTS </Link>
        <Link href={'/contact'} className='text-center text-sm transition ease duration-300 hover:bg-[#c5efbd] py-2 px-4'>CONTACT  </Link>
        </ul>

        
            





        {/* Responsive Navbar */}
       
         <ul className={nav?'flex flex-col w-full max-h-[100vh] absolute top-[68px] shadow-xl left-0 z-20 py-16 pt-14 px-44 pl-10 overflow-y-auto transition-all  ease-in duration-300 bg-[#ffffff]  justify-between gap-7 font-medium md:hidden':' overflow-y-auto flex flex-col absolute max-h-[100vh] top-[68px] shadow-2xl -left-96 z-20 py-16 pt-14 px-44 pl-10  transition-all  ease-in duration-300 bg-[#ffffff]  justify-between gap-7 font-medium md:hidden'}>
        <Link href={'/'} className='text-sm' onClick={handleState}>HOME</Link>
        <li className='cursor-pointer transition ease duration-1000 focus:outline-none text-left' onClick={toggleDropdown1}>
            <button className={` flex  items-center  text-sm transition ease duration-300 min-w-[120px]  md:px-4`}>
                ABOUT APSOH {isOpen1?<FaAngleUp className=''/>:<FaAngleDown className=''/>}
            </button>
            {
                isOpen1 &&
            <div className='flex flex-col items-start justify-center gap-4 py-2 cursor-pointer w-72 transition ease duration-1000'>
                <Link href={'/about'} className='text-left text-sm transition ease duration-300 ' onClick={closeAllDropdowns}>ABOUT</Link>
                <Link href={'/gallary'} className='text-left text-sm  transition ease duration-300' onClick={closeAllDropdowns}>GALLARY</Link>
                <Link href={'/clubs'} className='text-left text-sm   transition ease duration-300' onClick={closeAllDropdowns}>CLUBS</Link>
                <Link href={'/gallary'} className='text-left text-sm  transition ease duration-300' onClick={closeAllDropdowns}>OUR CULTURE</Link>

            </div>
            }
        </li>
        <li className='cursor-pointer transition ease duration-1000 focus:outline-none' onClick={toggleDropdown2}>
            <button className={` flex justify-center items-center text-center text-sm transition ease duration-300  md:px-4`}>
                ACADEMICS {isOpen2?<FaAngleUp className=''/>:<FaAngleDown className=''/>}
            </button>
            {
                isOpen2 &&
            <div className='flex flex-col items-start justify-center gap-4 py-2 cursor-pointer w-72 transition ease duration-1000'>
                <Link href={'/staff'} className='text-left text-sm transition ease duration-300 ' onClick={closeAllDropdowns}>STAFF</Link>
                <Link href={'/calender'} className='text-left text-sm  transition ease duration-300' onClick={closeAllDropdowns}>CALENDER</Link>
                <Link href={'/gallary'} className='text-left  text-sm transition ease duration-300' onClick={closeAllDropdowns}>NEWS</Link>
                <Link href={'/gallary'} className='text-left  text-sm transition ease duration-300' onClick={closeAllDropdowns}>SCHOOLS</Link>
            </div>
            }
        </li>
        <li className='cursor-pointer transition ease duration-1000 focus:outline-none' onClick={toggleDropdown3}>
            <button className={` flex justify-center items-center text-center text-sm transition ease duration-300  md:px-4`}>
                ADMISSIONS {isOpen3?<FaAngleUp className=''/>:<FaAngleDown className=''/>}
            </button>
            {
                isOpen3 &&
            <div className='flex flex-col items-start justify-center gap-4 py-2 cursor-pointer w-72 transition ease duration-1000'>
                <Link href={'/fees'} className='text-left text-sm  transition ease duration-300' onClick={closeAllDropdowns}>FEES</Link>
                <Link href={'/apply'} className='text-left text-sm  transition ease duration-300 ' onClick={closeAllDropdowns}>APPLY NOW</Link>
                
            </div>
            }
        </li>
       
        <Link href={'/events'} className=' text-sm' onClick={handleState}>EVENTS </Link>
        <Link href={'/contact'} className=' text-sm' onClick={handleState}>CONTACT  </Link>
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