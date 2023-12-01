'use client'
import Statistic from './components/Statistic'
import { FaBook,FaUserGraduate,} from 'react-icons/fa'
import {BsFillPeopleFill,BsBookHalf} from 'react-icons/bs'
import {ImLibrary} from 'react-icons/im'
import {BiChild} from 'react-icons/bi'
import Levels from './components/Levels'
import Testimonials from './components/Testimonials'
import MyCarousel from './components/Carousel'
import pic1 from '../public/assets/c.png'
import pic2 from '../public/assets/b.png'
import pic3 from '../public/assets/c.png'
import Image from 'next/image'
import {svgs} from './components/slidePics/svg'
import Link from 'next/link'
import DownloadForm from './components/DownloadForm'
import { useEffect, useState } from 'react'
export const data = [pic1,pic2,pic3]
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const [isHover, setIsHover] = useState(false)
  useEffect(()=>{
    Aos.init({duration:2000});
  })


  const handleHover = ()=>{
    setIsHover(true)
   }

   const handleNotHover =()=>{
    setIsHover(false)

   }

  return (

    <>
        <div className='hidden backgroundImg flex-col md:flex-row md:flex justify-around bg-gradient-to-r from-green-200 to-slate-100 px-10 pt-32 pb-16 '>
        <div className='h-[350px] w-[350px] shadow-xl px-10  text-center flex  flex-col justify-center gap-5 rounded-tl-3xl rounded-br-3xl bg-[#f8f8f6] border-lime-500'>
          <h2 className=' text-green-700 text-4xl font-bold'>APSOH Academy</h2>
          <p className='text-slate-700 text-xl'>Dedicated to improving Care and Education for Children</p>
          <button className='bg-green-600 animate-bounce hover:animate-none rounded-lg py-3 relative left-14 w-40 font-bold shadow-sm text-xl text-[#f8f8f6] hover:bg-green-500 hover:shadow-2xl  ease duration-300'>
            <Link href='/apply'>ENROLL NOW</Link>
          </button>
        </div>
        <Image
        src={svgs[0]}
        height={300}
        alt='educator'
        // loading='lazy'
        priority
        // className='hidden md:block'
        />

      </div>


        <div className='block md:hidden h-[50vw] md:h-[30vw] w-full relative bg-[#0000005f]'>
        <Image
          src={svgs[1]}
          alt=''
          loading='lazy'
           style={{
              width:"100%",
              height:"100%",
              zIndex: "-40",
              position: "relative",
              backgroundColor:"white",
              objectFit:'contain',
              paddingTop:'5px'

           }}
        />
       
        <div className="relative bottom-40 md:bottom-66 font-extrabold text-[#f1f1f1] text-center  text-4xl">
          <h1 className='font-bold'>Welcome to African Preparatory School of Hope</h1>
        </div>
      </div>

    <main className="px-1 flex flex-col gap-14   py-10 md:px-10 bg-[#f8f8f6]">
     
      <div className='  ' onMouseEnter={handleHover} onMouseLeave={handleNotHover}>

      <MyCarousel slidsToShow={1} isHover={isHover}>
         {
        data.map((item,index)=>{
          return(
              
            <div key={index} className='slider p-3 md:px-10 '>
              {
                
                 <Image
              src={item}
              alt='news'
              loading='lazy'
              style={{
                width:'1000px',
                height:'420px',
                borderRadius:'2vw',
                objectFit:'cover'
  
              }}
              />
              }

             
            </div>
          )
        })
      }
      </MyCarousel>
      </div>


     
      <div className='bg-green-100 rounded-3xl py-7 px-5 md:p-16 space-y-5 md:space-y-10' >
      <h2 className='text-center text-[2em] md:text-4xl font-extrabold'><span className='text-[#069251d3]'>APSOH AT </span> <span className='text-[#043129f0]'>A GLANCE</span></h2>
        <div className='grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-x-0 gap-y-0' data-aos ='zoom-in'>
    
         <Statistic icon={<FaUserGraduate/>} number={'50'} plus={'k+'} name={'Student'} className={'bg-[#9ed4cb57] p-7'} />
         
        <Statistic icon={<ImLibrary/>} number={'10'} plus={'+'} name={'Facilities'} className={'bg-[#f8e7987d] p-7 cursor-pointer'}  />
        <Statistic icon={<BiChild/>} number={'8'} plus={'+'} name={'Preschool Programs'} className={'bg-[#f5ebc070] p-7 cursor-pointer'}/>
        <Statistic icon={<FaBook/>} number={'15'} plus={'+'} name={'Basic Programs'} className={'bg-[#98f8c77d] p-7 cursor-pointer'}  />
        <Statistic icon={<BsBookHalf/>} number={'18'} plus={'+'} name={'JHS Programs'} className={'bg-[#9ed4cb57] p-7 cursor-pointer'}  />
        <Link href={'/staff'}>
           <Statistic icon={<BsFillPeopleFill/>} number={'240'} name={'Staff'} className={'bg-[#cdd38770] p-7 cursor-pointer'}  />
        </Link>
        </div>
      </div>
       <div 
       className='md:p-10 p-5 rounded-3xl bg-[#f9f3d670]'
        >
        
          <div data-aos ='zoom-in'>
            <Levels/>
          </div>
      </div>
      
       <div 
       className='bg-[#f9f3d670] md:p-10 p-5 rounded-3xl'
        onMouseEnter={handleHover}
         onMouseLeave={handleNotHover}
         >
          <div data-aos ='zoom-in'>
          <MyCarousel isHover={isHover}>
            <Testimonials name={'Addo Michael'} stage={'JHS 1 Student'}/>
          <Testimonials name={'Mike Sekyi'} stage={'Finale Year Student'}/>
          <Testimonials name={'Jonas Lantam'} stage={'Parent'}/>
          </MyCarousel>

          </div>
       </div>
       <div>

      <DownloadForm className={'items-center'} />
       </div>
      
    </main>
    </>
  )
}
