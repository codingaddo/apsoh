import React from 'react'
import Image from 'next/image'
import FeesCard from '../components/FeesCard'
import svgs from '../components/slidePics/svg'


const page = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='h-[40vw] md:h-[25vw] w-full relative bg-[#0b0b0b5f]'>
        <Image
          src={svgs[3]}
          alt=''
          priority = {true}

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

      <div className='w-full p-5 py-5 md:p-24 rounded-b-xl md:bg-slate-100 grid  sm:grid-cols-2 md:grid-cols-3 gap-10 items-center'>
            <FeesCard 
            url={'/fees.pdf'} 
            text={'Fees for Pre-School 2023/2024 Academic Year'}
            animation={'zoom-in'}
            duration={'2000'}


            />
            <FeesCard 
            url={'/fees.pdf'} 
            text={'Fees for Nursery 2023/2024 Academic Year'}
             animation={'zoom-in'}
            duration={'2500'}


            />
            <FeesCard
             url={'/fees.pdf'} 
             text={'Fees for Kindergarten 2023/2024 Academic Year'}
         animation={'zoom-in'}
            duration={'3000'}


             />
            <FeesCard
             url={'/fees.pdf'}
              text={'Fees for Primary Pupil 2023/2024 Academic Year'}
              animation={'zoom-in'}
         duration={'3500'}
              />
            <FeesCard 
            url={'/fees.pdf'} 
            text={'JHS Students Fees 2023/2024 Academic Year'}
             animation={'zoom-in'}
            duration={'4000'}
            />
      </div>


    </div>
  )
}

export default page