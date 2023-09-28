import React from 'react'
import Link from 'next/link'
import Socials from './Socials'


const TopNavbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#080908c6] px-3 p-2 text-sm'>
        <div className='flex gap-2 text-[#Fafafa]'>
            <Link href={'/'} className='hover:text-[#6BF178]'>xyz@gmail.com</Link>
            <Link href={'/'} className='hover:text-[#6BF178]'>LOCATION</Link>
            <Link href={'/'} className='hover:text-[#6BF178]'>FEES</Link>
        </div>
        
        <Socials/>
      
    </div>
  )
}

export default TopNavbar