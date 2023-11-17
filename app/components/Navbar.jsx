'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaAngleDown,FaAngleUp } from 'react-icons/fa'
import {usePathname} from 'next/navigation'



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
    const pathname = usePathname()


    const toggleDropdowna = (name)=>{
     setDropDown((prevDropdown)=>({
        ...prevDropdown,
        [name]:!prevDropdown[name]
     }))
        
    }

    
    const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    // if (isOpen1) {
    //    setIsOpen2(false);
    //    setIsOpen3(false);
    // }
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    // if (isOpen2) {
    //   setIsOpen1(false);
    //   setIsOpen3(false);
    // }
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    // if (isOpen3) {
    //   setIsOpen1(false);
    //   setIsOpen2(false);
    // }
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
    <div className={!fixed?'flex relative justify-between items-center  z-40 bg-[#ffffff] shadow-2xl py-4 px-4 md:px-7  w-full ':' fixed  ease-in-out duration-300 top-0 flex justify-between  bg-[#ffffff] shadow-2xl py-4 z-40 px-4 md:px-7  w-full'}>
        <h1 className=' w-28 text-[#66b539] text-xl '>LOGO</h1>
        <ul className='hidden md:flex  justify-between gap-1 font-medium '>
        <Link href={'/'} className={pathname==='/'?'rounded-lg text-center text-sm transition ease duration-1000 bg-[#c5efbd] py-2 px-4':'rounded-lg text-center text-sm transition ease duration-1000 hover:bg-[#c5efbd] py-2 px-4'}>
            HOME
        </Link>


           <li className= {pathname==='/about'||pathname==='/gallary'|| pathname==='/clubs'?'rounded-t-lg cursor-pointer transition ease  bg-[#c5efbd] hover:bg-[#c5efbd]':'rounded-t-lg cursor-pointer transition ease  hover:bg-[#c5efbd]'} onMouseEnter={()=>toggleDropdowna('about')} onMouseLeave={()=>setDropDown(false)}>
            <button className={` flex items-center  text-sm transition ease duration-300 py-2 px-2`}>
                ABOUT APSOH {dropDown.about?<FaAngleUp className='text-sm'/>:<FaAngleDown className='text-sm'/>}
            </button>
            {
                dropDown.about &&
            <div className='flex flex-col bg-[#c5efbd] items-center justify-center gap-2 p-5 w-[125.9px] rounded-b-lg absolute  transition ease duration-1000'>
                <Link href={'/about'} className={pathname==='/about'?'text-center text-[.8rem] transition ease duration-300 hover:underline text-slate-400':'text-center text-[.8rem] transition ease duration-300 hover:underline'} onClick={()=>setDropDown(false)}>ABOUT</Link>
                <Link href={'/clubs'} className={pathname==='/clubs'?'text-center text-[.8rem] transition ease duration-300 hover:underline text-slate-400':'text-center text-[.8rem] transition ease duration-300 hover:underline'} onClick={()=>setDropDown(false)} >CLUBS</Link>
                <Link href={'/gallary'} className={pathname==='/gallary'?'text-center text-[.8rem] transition ease duration-300 hover:underline text-slate-400':'text-center text-[.8rem] transition ease duration-300 hover:underline'} onClick={()=>setDropDown(false)} >GALLARY</Link>
                <Link href={'/facilities'} className={pathname==='/facilities'?'text-center text-[.8rem] transition ease duration-300 hover:underline text-slate-400':'text-center text-[.8rem] transition ease duration-300 hover:underline'} onClick={()=>setDropDown(false)} >FACILITIES</Link>
                <Link href={'/ourculture'} className={pathname==='/ourculture'?'text-center text-[.8rem] transition ease duration-300 hover:underline text-slate-400':'text-center text-[.8rem] transition ease duration-300 hover:underline'} onClick={()=>setDropDown(false)} >OUR CULTURE</Link>
            </div>
            }
        </li>

           <li className={pathname==='/staff'||pathname==='/calender'|| pathname==='/schools'?'rounded-t-lg cursor-pointer transition ease  hover:bg-[#c5efbd] bg-[#c5efbd]':'hover:bg-[#c5efbd] rounded-t-lg cursor-pointer transition ease'} onMouseEnter={()=>toggleDropdowna('academics')} onMouseLeave={()=>setDropDown(false)}>
            <button className={` flex items-center justify-center text-sm transition ease duration-300  py-2 px-4`}>
                ACADEMICS {dropDown.academics?<FaAngleUp className='text-sm'/>:<FaAngleDown className='text-sm'/>}
            </button>
            {
                dropDown.academics &&
            <div className='flex flex-col bg-[#c5efbd] items-center justify-center gap-2 p-5 absolute w-[124px] rounded-b-lg transition ease duration-1000'>
                <Link href={'/staff'} className={pathname==='/staff'?'text-center text-[.8rem] transition ease duration-300 hover:underline text-slate-400':'text-center text-[.8rem] transition ease duration-300 hover:underline'} onClick={()=>setDropDown(false)}>STAFF</Link>
                <Link href={'/calender'} className={pathname==='/calender'?'text-center text-[.8rem] transition ease duration-300 hover:underline text-slate-400':'text-center text-[.8rem] transition ease duration-300 hover:underline'} onClick={()=>setDropDown(false)} >CALENDER</Link>
                <Link href={'/schools'} className={pathname==='/schools'?'text-center text-[.8rem] transition ease duration-300 hover:underline text-slate-400':'text-center text-[.8rem] transition ease duration-300 hover:underline'} onClick={()=>setDropDown(false)} >SCHOOLS</Link>
            </div>
            }
        </li>
           <li className={pathname==='/fees'||pathname==='/apply'?'rounded-t-lg cursor-pointer transition ease  hover:bg-[#c5efbd] bg-[#c5efbd]':'rounded-t-lg cursor-pointer transition ease  hover:bg-[#c5efbd]'} onMouseEnter={()=>toggleDropdowna('admission')} onMouseLeave={()=>setDropDown(false)}>
            <button className={`flex items-center justify-center  text-sm transition ease duration-300 py-2 px-4`}>
                ADMISSIONS {dropDown.admission?<FaAngleUp className='text-sm'/>:<FaAngleDown className='text-sm'/>}
            </button>
            {
                dropDown.admission &&
            <div className='flex flex-col bg-[#c5efbd] items-center justify-center gap-2 p-5 absolute w-[130.5px] rounded-b-lg transition ease duration-1000'>
                <Link href={'/apply'} className={pathname==='/apply'?'text-center text-[.8rem] transition ease duration-300 hover:underline text-slate-400':'text-center text-[.8rem] transition ease duration-300 hover:underline'} onClick={()=>setDropDown(false)}>APPLY NOW</Link>
                <Link href={'/fees'} className={pathname==='/fees'?'text-center text-[.8rem] transition ease duration-300 hover:underline text-slate-400':'text-center text-[.8rem] transition ease duration-300 hover:underline'} onClick={()=>setDropDown(false)} >FEES</Link>
            </div>
            }
        </li>
              
         <Link href={'/events'} className={pathname==='/events'?'text-center text-sm transition ease  bg-[#c5efbd] rounded-lg py-2 px-4':'rounded-lg text-center text-sm transition ease  hover:bg-[#c5efbd] py-2 px-4'}>EVENTS </Link>
        <Link href={'/contact'} className={pathname==='/contact'?'text-center text-sm transition ease duration-1000 bg-[#c5efbd] rounded-lg py-2 px-4':'rounded text-center text-sm transition ease duration-1000 hover:bg-[#c5efbd] py-2 px-4'}>CONTACT  </Link>
        </ul>

        
            





        {/* Responsive Navbar */}
       
         <ul className={nav?'flex flex-col w-full h-[93vh] absolute top-[68px] shadow-xl left-0 z-20 py-10 pt-2  overflow-y-auto transition-all  ease-in duration-300 bg-[#ffffff]  gap-1 font-medium md:hidden':' overflow-y-auto flex flex-col absolute h-[93vh] top-[68px] -left-96 z-20 py-2 pt-1  transition-all  ease-in duration-300 bg-[#ffffff]   gap-1 font-medium md:hidden'}>
        <Link href={'/'} className={pathname==='/'?'text-sm bg-slate-300 p-5 hover:bg-slate-200 text-[#66b539]':'text-sm bg-slate-100 p-5 hover:bg-slate-300 text-[#66b539]'} onClick={handleState}> <span>HOME</span></Link>
        <li className='w-full cursor-pointer transition ease duration-1000 focus:outline-none text-left text-[#66b539] ' onClick={toggleDropdown1}>
            <button className={` bg-slate-100 w-full p-5 flex  items-center justify-between text-sm transition ease duration-300 min-w-[120px]  md:px-4 hover:bg-slate-300`}>
               <span> ABOUT APSOH</span> {isOpen1?<FaAngleUp className=' text-[20px]'/>:<FaAngleDown className=' text-[20px]'/>}
            </button>
            {
                isOpen1 &&
            <div className=' bg-zinc-500 text-[#f1f1f1] flex flex-col items-start justify-center gap-1  py-1  cursor-pointer w-full transition ease duration-1000'>
                <Link href={'/about'} className={pathname==='/about'?'w-full text-orange-500 pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400':'w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400'} onClick={closeAllDropdowns}>ABOUT</Link>
                <Link href={'/gallary'} className={pathname==='/gallary'?' w-full text-orange-500 pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400':' w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400'} onClick={closeAllDropdowns}>GALLARY</Link>
                <Link href={'/clubs'} className={pathname==='/clubs'?' w-full text-orange-500 pl-5  p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400':' w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400'} onClick={closeAllDropdowns}>CLUBS</Link>
                <Link href={'/facilities'} className={pathname==='/facilities'?'w-full text-orange-500 pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400':' w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400'} onClick={closeAllDropdowns}>FACILITIES</Link>
                <Link href={'/ourculture'} className={pathname==='/ourculture'?' w-full text-orange-500 pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400':' w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400'} onClick={closeAllDropdowns}>OUR CULTURE</Link>

            </div>
            }
        </li>
        <li className='cursor-pointer transition ease duration-1000 focus:outline-none text-[#66b539] ' onClick={toggleDropdown2}>
            <button className={`bg-slate-100 w-full p-5 flex  items-center justify-between text-sm transition ease duration-300 min-w-[120px]  md:px-4 hover:bg-slate-300`}>
                <span>ACADEMICS</span> {isOpen2?<FaAngleUp className='text-[20px]'/>:<FaAngleDown className='text-[20px]'/>}
            </button>
            {
                isOpen2 &&
            <div className='bg-zinc-500 text-[#f1f1f1] flex flex-col items-start justify-center gap-1 py-1  cursor-pointer w-full transition ease duration-1000'>
                <Link href={'/staff'} className={pathname==='/staff'?'text-orange-500 w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400':' w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400'} onClick={closeAllDropdowns}>STAFF</Link>
                <Link href={'/calender'} className={pathname==='/calender'?'text-orange-500 w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400':' w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400'} onClick={closeAllDropdowns}>CALENDER</Link>
                <Link href={'/schools'} className={pathname==='/schools'?'text-orange-500 w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400':' w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400'} onClick={closeAllDropdowns}>SCHOOLS</Link>
            </div>
            }
        </li>
        <li className='cursor-pointer transition ease duration-1000 focus:outline-none text-[#66b539] ' onClick={toggleDropdown3}>
            <button className={` bg-slate-100 w-full p-5 flex  items-center justify-between text-sm transition ease duration-300 min-w-[120px]  md:px-4 hover:bg-slate-300`}>
                 <span>ADMISSIONS</span> {isOpen3?<FaAngleUp className='text-[20px] text-[#66b539]'/>:<FaAngleDown className='text-[20px] text-[#66b539]'/>}
            </button>
            {
                isOpen3 &&
            <div className='bg-zinc-500 text-[#f1f1f1] flex flex-col items-start justify-center gap-1 py-1  cursor-pointer w-full transition ease duration-1000'>
                <Link href={'/fees'} className={pathname==='/fees'?' text-orange-500 w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400':'w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400'} onClick={closeAllDropdowns}>FEES</Link>
                <Link href={'/apply'} className={pathname==='/apply'?' text-orange-500 w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400':'w-full pl-5 p-2 text-left text-sm  transition ease duration-300 hover:bg-slate-400'} onClick={closeAllDropdowns}>APPLY NOW</Link>
                
            </div>
            }
        </li>
       
        <Link href={'/events'} className={pathname==='/events'?'text-sm bg-slate-300 p-5 hover:bg-slate-200 text-[#66b539]':'text-sm bg-slate-100 p-5 hover:bg-slate-300 text-[#66b539]'} onClick={handleState}> <span>EVENTS</span> </Link>
        <Link href={'/contact'} className={pathname==='/contact'?'text-sm bg-slate-300 p-5 hover:bg-slate-200 text-[#66b539]':'text-sm bg-slate-100 p-5 hover:bg-slate-300 text-[#66b539]'} onClick={handleState}><span>CONTACT </span> </Link>
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