import React from 'react'
import {svgs} from '../components/slidePics/svg'
import Image from 'next/image'
import Link from 'next/link'

const Head = ({imageUrl,text,url}) => {
  return (
   
      <div className='flex flex-row-reverse items-center justify-between p-5 md:p-16 h-[400px] md:h-[40vw] w-full relative bg-[#0000005f]'>
        <div className='hidden md:block'>

        <Image
          src={imageUrl || svgs[1]}
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
        </div>
         <div className='h-[300px] w-[1000px] md:h-[300px] md:w-[900px] shadow-xl  text-center flex items-center  flex-col justify-center gap-5 md:gap-3 p-2 rounded-tl-3xl rounded-bl-4xl bg-[#f8f8f6] border-2 border-lime-500'>
          <h2 className=' text-green-700 text-4xl font-bold uppercase'>APSOH Academy</h2>
          <p className='text-slate-500 text-xl text-center px-2 md:px-16'>Dedicated to improving Care and Education for Children</p>
          <button className='bg-green-700 animate-bounce hover:animate-none rounded-lg py-3 self-center w-48 font-bold shadow-sm text-xl text-[#f8f8f6] hover:bg-green-600 hover:shadow-2xl  ease duration-300 cursor-pointer'>
            <Link href={url}>{text}</Link>
          </button>
        </div>
      </div>
  )
}

export default Head