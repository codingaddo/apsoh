'use client'
import Slider from './components/Slider'
import Statistic from './components/Statistic'
import { FaBook,FaUserGraduate,} from 'react-icons/fa'
import {BsFillPeopleFill,BsBookHalf} from 'react-icons/bs'
import {ImLibrary} from 'react-icons/im'
import {BiChild} from 'react-icons/bi'
import Levels from './components/Levels'
import Testimonials from './components/Testimonials'
import MyCarousel from './components/Carousel'
import pic1 from '../public/assets/a.png'
import pic2 from '../public/assets/b.png'
import pic3 from '../public/assets/c.png'
import Image from 'next/image'
import {svgs} from './components/slidePics/svg'
import Link from 'next/link'
export const data = [pic1,pic2,pic3]

export default function Home() {
  return (

    <>
        <div className='hidden backgroundImg flex-col md:flex-row md:flex justify-around bg-gradient-to-r from-green-200 to-slate-100 px-10 pt-32 pb-16 '>
        <div className='h-[350px] w-[350px] shadow-xl px-10  text-center flex  flex-col justify-center gap-5 rounded-tl-3xl rounded-br-3xl bg-[#f8f8f6] border-lime-500'>
          <h2 className=' text-lime-600 text-4xl font-bold'>APSOH Academy</h2>
          <p className='text-slate-500 text-xl'>Dedicated to improving Care and Education for Children</p>
          <button className='bg-lime-500 animate-bounce hover:animate-none rounded-lg py-3 relative left-14 w-40 font-bold shadow-sm text-xl text-[#f8f8f6] hover:bg-lime-600 hover:shadow-2xl  ease duration-300'>
            <Link href='/contact'>ENROLL NOW</Link>
          </button>
        </div>
        <Image
        src={svgs[0]}
        height={300}
        alt='educator'
        // className='hidden md:block'
        />

      </div>
    <main className="px-1 flex flex-col gap-14   py-10 md:px-10 bg-[#f8f8f6]">
      <div className ='block md:hidden text-center md:text-star uppercase text-lime-600'>
      <h1 className='sm:text-center text-2xl md:text-4xl font-bold'>APSOH</h1>
      <h2 className='sm:text-center text-xl md:text-2xl font-bold'>Shaping your wards future for the best</h2>

      </div>

      <div>

      <MyCarousel slidsToShow={1}>
         {
        data.map((item,index)=>{
          return(
              
            <div key={index} className='slider p-3 md:px-10 '>
              {
                
                 <Image
              src={item}
              alt='news'
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


     
      <div className='bg-green-100 rounded-3xl py-7 px-5 md:p-28 space-y-5 md:space-y-16'>
      <h2 className='text-center text-[2em] md:text-4xl font-extrabold'><span className='text-[#069251d3]'>APSOH AT </span> <span className='text-[#043129f0]'>A GLANCE</span></h2>
        <div className='grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-x-0 gap-y-0'>
        <Statistic icon={<FaUserGraduate/>} number={'50K+'} name={'Student'} className={'bg-[#9ed4cb57] p-7'} />
        <Statistic icon={<ImLibrary/>} number={'10'} name={'Facilities'} className={'bg-[#f8e7987d] p-7 cursor-pointer'}  />
        <Statistic icon={<BiChild/>} number={'8'} name={'Preschool Programs'} className={'bg-[#f5ebc070] p-7 cursor-pointer'}/>
        <Statistic icon={<FaBook/>} number={'15+'} name={'Basic Programs'} className={'bg-[#98f8c77d] p-7 cursor-pointer'}  />
        <Statistic icon={<BsBookHalf/>} number={'18+'} name={'JHS Programs'} className={'bg-[#9ed4cb57] p-7 cursor-pointer'}  />
        <Statistic icon={<BsFillPeopleFill/>} number={'240+'} name={'Staff'} className={'bg-[#cdd38770] p-7 cursor-pointer'}  />
        </div>
      </div>
       <div className='md:p-10 p-5 rounded-3xl bg-[#f9f3d670]'>
      <Levels/>
      </div>
      
       <div className='bg-[#f9f3d670] md:p-10 p-5 rounded-3xl'>
        <MyCarousel>
          <Testimonials name={'Addo'}/>
        <Testimonials name={'Mike'}/>
        <Testimonials name={'Jonas'}/>
        </MyCarousel>
       </div>
      
    </main>
    </>
  )
}
