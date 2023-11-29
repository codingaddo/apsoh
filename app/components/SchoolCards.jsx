import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import kids from '../../public/assets/kids.webp'

const SchoolCards = () => {
  return (
    <div>
        <Link href={''} className='bg-gray-500 '>
            <div className=' h-[480px] overflow-clip w-full rounded-2xl relative'>
            <Image
                src={kids}
                alt='kids'
                style={{
              width:"100%",
              height:"100%",
              zIndex: "-40",
              position: "relative",
              objectFit:'cover',
              opacity:'0.75',
              
           }}
            />

            </div>
            <div className=' absolute left-44 -bottom-80 flex flex-col'>
                <h2 className='text-[2.5rem] font-bold uppercase text-green-500'>Pre-School</h2>
                <button className='flex items-center justify-center text-center text-white text-md font-medium bg-green-600 gap-5 p-4 px- rounded-3xl hover:bg-green-500 duration-300'>
                    <span>Enroll Now</span> <FaArrowRight className='text-sm' />
                </button>
            </div>

        </Link>
    </div>
  )
}

export default SchoolCards