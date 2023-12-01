'use client'
import React from 'react'
import Image from 'next/image'
import pic from '../../public/assets/mike.jpeg'
const Testimonials = ({title,text,imgageUrl,name,stage}) => {
  return (
   
        <div className='bg-[#ffffffb9] rounded-2xl sm:p-5 sm:py-10 py-10 items-center md:p-14 flex flex-col text-center gap-4'>
            <h2 className='font-bold text-2xl text-green-900'>What our Students and Parents are Saying </h2>
            <p className=' p-5 text-center text-[1.2rem] px-4 md:px-24 text-slate-700'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusamus officiis vitae. Repudiandae sit nemo enim distinctio atque nihil natus asperiores.
            </p>
                <div className='flex  md:flex-row items-center justify-center gap-5 md:gap-10 md:px-20 '>
                    <Image
                        src={pic}
                        alt='picture'
                        placeholder='blur'
                        loading='lazy'
                        // width={120}
                        // height={120}
                        style={{
                            width:'150px',
                            height:'150px',
                            borderRadius:'50%',
                            objectFit:'contain'
                        }}
                    />
                <div className='font-bold text-xl flex flex-col  md:text-start '>
                    <h3 className='text-slate-500' >{name}</h3>
                    <h3 className='font-md text-sm text-slate-500 '>{stage}</h3>

                </div>
                </div>

               
            
        </div>
  )
}

export default Testimonials