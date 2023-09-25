import Link from 'next/link'
import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaSearch} from 'react-icons/fa'


const TopNavbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#080908c6] p-2 text-sm'>
        <div className='flex gap-7 text-[#Fafafa]'>
            <Link href={'/'} className='hover:text-[#6BF178]'>xyz@gmail.com</Link>
            <Link href={'/'} className='hover:text-[#6BF178]'>LOCATION</Link>
            <Link href={'/'} className='hover:text-[#6BF178]'>FEES</Link>
        </div>
        <div className="socials flex gap-2">
            <div className='bg-[#6BF178] text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]'>
            <FaFacebook/>

            </div>
            <div className='bg-[#6BF178] text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]'>

            <FaTwitter/>
            </div>
            <div className='bg-[#6BF178] text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]'>

            <FaInstagram/>
            </div>
            <div className='bg-[#6BF178] text-sm flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]'>

            <FaSearch/>

            </div>
        </div>
    </div>
  )
}

export default TopNavbar