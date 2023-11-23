import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaWhatsapp} from 'react-icons/fa'


const Socials = ({className,iconStyles}) => {
  return (
     <div className={`socials flex gap-2 ${className} `}>
            <div className={` ${iconStyles} bg-green-500 text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-[1.1] hover:bg-green-600`}>
            <FaFacebook/>

            </div>
            <div className={` ${iconStyles} bg-green-500 text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-[1.1] hover:bg-green-600`}>

            <FaTwitter/>
            </div>
             <div className={` ${iconStyles} bg-green-500 text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-[1.1] hover:bg-green-600`}>
            <FaInstagram/>
            </div>
             <div className={` ${iconStyles} bg-green-500 text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-[1.1] hover:bg-green-600`}>
            <FaYoutube/>

            </div>
             <div className={` ${iconStyles} bg-green-500 text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-[1.1] hover:bg-green-600`}>
            <FaWhatsapp/>

            </div>
        </div>
  )
}

export default Socials
