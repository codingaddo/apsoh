import Link from 'next/link'
import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaSearch} from 'react-icons/fa'


const TopNavbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#080908c6] p-2'>
        <div className='flex gap-7 text-[#FAFAFA]'>
            <Link href={'/'} className='hover:text-[#fffc4d]'>xyz@gmail.com</Link>
            <Link href={'/'} className='hover:text-[#fffc4d]'>LOCATION</Link>
            <Link href={'/'} className='hover:text-[#fffc4d]'>FEES</Link>
        </div>
        <div className="socials flex gap-2">
            <div className='bg-[#fffc4d] text-sm flex justify-center items-center p-2 cursor-pointer hover:scale-125 hover:bg-[#e6c65b]'>
            <FaFacebook/>

            </div>
            <div className='bg-[#fffc4d] text-sm flex justify-center items-center p-2 cursor-pointer hover:scale-125 hover:bg-[#e6c65b]'>

            <FaTwitter/>
            </div>
            <div className='bg-[#fffc4d] text-sm flex justify-center items-center p-2 cursor-pointer hover:scale-125 hover:bg-[#e6c65b]'>

            <FaInstagram/>
            </div>
            <div className='bg-[#fffc4d] text-sm flex justify-center items-center p-2 cursor-pointer hover:scale-125 hover:bg-[#e6c65b]'>

            <FaSearch/>

            </div>
        </div>
    </div>
  )
}

export default TopNavbar