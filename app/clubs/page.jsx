import Image from 'next/image'
import React from 'react'
import svgs from '../components/slidePics/svg'

const page = () => {
  return (
    <div className=''> 
        <div className='h-[40vw] md:h-[25vw] w-full relative bg-[#0000005f]'>
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
        <h2 className="relative bottom-28 sm:bottom-48 md:bottom-48 font-bold text-[#f1f1f1] text-center  text-[3rem]">Clubs</h2>
      </div>
    </div>
  )
}

export default page