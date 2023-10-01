'use client'
import Slider from './components/Slider'
import Statistic from './components/Statistic'
import { FaBook,FaUserGraduate,} from 'react-icons/fa'
import {BsFillPeopleFill,BsBookHalf} from 'react-icons/bs'
import {ImLibrary} from 'react-icons/im'
import {BiChild} from 'react-icons/bi'
import Levels from './components/Levels'
import Testimonials from './components/Testimonials'
import Container from './components/Container'

export default function Home() {
  return (
    <main className="px-1 flex flex-col gap-16  py-12 md:px-10 bg-[#f8f8f6]">
      <Slider/>
      <div className='p-10 rounded-3xl bg-[#f9f3d670]'>

      <Levels/>
      </div>
      <div className='bg-green-100 rounded-3xl py-7 px-5 md:p-28 space-y-5 md:space-y-16'>
      <h2 className='text-center text-[2em] md:text-4xl font-extrabold'><span className='text-[#069251d3]'>APSOH AT </span> <span className='text-[#043129f0]'>A GLANCE</span></h2>
        <div className='flex flex-col md:grid md:grid-cols-3 gap-x-0 gap-y-0'>
        <Statistic icon={<FaUserGraduate/>} number={'50K+'} name={'Student'} className={'bg-[#9ed4cb57] p-7'} />
        <Statistic icon={<BsFillPeopleFill/>} number={'240+'} name={'Staff'} className={'bg-[#f5ebc070] p-7'}  />
        <Statistic icon={<ImLibrary/>} number={'10'} name={'Facilities'} className={'bg-[#f8e7987d] p-7'}  />
        <Statistic icon={<BiChild/>} number={'8'} name={'Creche Programs'} className={'bg-[#f5ebc070] p-7'}/>
        <Statistic icon={<FaBook/>} number={'15+'} name={'Basic Programs'} className={'bg-[#f8e7987d] p-7'}  />
        <Statistic icon={<BsBookHalf/>} number={'18+'} name={'JHS Programs'} className={'bg-[#9ed4cb57] p-7'}  />
        </div>
      </div>

      
       <div className='bg-[#f9f3d670] p-10 rounded-3xl'>
        <Container/>
       </div>
      
    </main>
  )
}
