'use client'
import React from 'react'
import Image from 'next/image'
import pic from '../../public/assets/mike.jpeg'
import { FaGreaterThan,FaLessThan } from 'react-icons/fa'

const Testimonials = ({title,text,imgageUrl,name,stage}) => {
  return (
   
        <div className='bg-[#ffffffb9] rounded-2xl sm:p-5 sm:py-10 py-20 items-center md:p-24  flex flex-col text-center gap-4'>
            <h2 className='font-bold text-2xl'>What our Students and Parents are Saying </h2>
            <p className='text-justify md:text-start text-xl  px-2 md:px-16'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusamus officiis vitae. Repudiandae sit nemo enim distinctio atque nihil natus asperiores, ipsa, voluptatem vitae quasi hic quis? Non, voluptatibus quia.
            </p>
                <div className='flex  md:flex-row items-center justify-center gap-5 md:gap-32 md:px-20 '>
                    <Image
                        src={pic}
                        alt='picture'
                        placeholder='blur'
                        // width={120}
                        // height={120}
                        style={{
                            width:'180px',
                            height:'180px',
                            borderRadius:'50%',
                            padding:'10px'
                        }}
                    />
                <div className='font-bold text-xl flex flex-col gap-2 md:text-start '>
                    <h3>{name}</h3>
                    <h3 className='font-md text-sm'>Final year student</h3>

                </div>
                </div>

               
            
        </div>
  )
}

export default Testimonials