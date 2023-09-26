import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa'


const Socials = ({className,iconStyles}) => {
  return (
     <div className={`socials flex gap-2 ${className} `}>
            <div className={` ${iconStyles} bg-[#6BF178] text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]`}>
            <FaFacebook/>

            </div>
            <div className={` ${iconStyles} bg-[#6BF178] text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]`}>

            <FaTwitter/>
            </div>
             <div className={` ${iconStyles} bg-[#6BF178] text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]`}>
            <FaInstagram/>
            </div>
             <div className={` ${iconStyles} bg-[#6BF178] text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]`}>
            <FaYoutube/>

            </div>
        </div>
  )
}

export default Socials