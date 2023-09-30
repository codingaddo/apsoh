'use client'
import React from 'react'
import Image from 'next/image'
import pic from '../../public/assets/mike.jpeg'

const Testimonials = ({title,text,imgageUrl,name,stage}) => {
  return (
    <div className='bg-[#f9f3d670] p-10 rounded-3xl flex'>
        <div className='bg-[#fff] rounded-2xl p-10 py-12 flex flex-col text-center gap-8'>
            <h2 className='font-bold text-2xl'>What our Students and Parents are Saying </h2>
            <p className='text-start text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusamus officiis vitae. Repudiandae sit nemo enim distinctio atque nihil natus asperiores, ipsa, voluptatem vitae quasi hic quis? Non, voluptatibus quia.
            </p>
            <div className='flex flex-col md:flex-row items-center justify-around px-40'>
                <div className=''>
                    <Image
                        src={pic}
                        alt='picture'
                        placeholder='blur'
                        // width={100}
                        // height={100}
                        style={{
                            width:'180px',
                            height:'180px',
                            borderRadius:'50%',

                        }}
                    />
                </div>
                <div className='font-bold text-xl text-start'>
                    <h3>Addo Michael</h3>
                    <h3 className='font-md text-sm'>Final year student</h3>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials