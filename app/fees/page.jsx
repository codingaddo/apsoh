import React from 'react'
import {svgs} from '../components/slidePics/svg'
import Image from 'next/image'
import FeesCard from '../components/FeesCard'


const page = () => {
  return (
    <div className='flex flex-col items-center bg-slate-100'>
            <div className='h-[40vw] md:h-[25vw] w-full relative bg-[#0000005f]'>
        <Image
          src={svgs[3]}
          alt=''
        //  loading='lazy'
         priority

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
        <h2 className="relative bottom-28 sm:bottom-48 md:bottom-48 font-bold text-[#f1f1f1] text-center  text-[3rem]">Fees</h2>
      </div>
      <div className=' p-5 py-5 md:p-24 rounded-b-xl md:bg-slate-100 grid  sm:grid-cols-2 md:grid-cols-3 gap-10 items-center'>
            <FeesCard url={'/fees.pdf'} text={'Fees for Pre-School 2023/2024 Academic Year'}/>
            <FeesCard url={'/fees.pdf'} text={'Fees for Nursery 2023/2024 Academic Year'}/>
            <FeesCard url={'/fees.pdf'} text={'Fees for Kindergarten 2023/2024 Academic Year'}/>
            <FeesCard url={'/fees.pdf'} text={'Fees for Primary Pupil 2023/2024 Academic Year'}/>
            <FeesCard url={'/fees.pdf'} text={'JHS Students Fees 2023/2024 Academic Year'}/>
      </div>
    </div>
  )
}

export default page