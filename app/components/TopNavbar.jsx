import React from 'react'
import Link from 'next/link'
import Socials from './Socials'


const TopNavbar = () => {
  return (
    <div className='flex justify-between  items-center bg-[#080908c6] px-3 p-2 text-sm'>
        <div className='flex gap-2 text-[#Fafafa]'>
            <Link href={'/contact'} className='hover:text-green-600'>xyz@gmail.com</Link>
            <Link href={'/contact'} className='hover:text-green-600'>LOCATION</Link>
            <Link href={'/fees'} className='hover:text-green-600'>FEES</Link>
        </div>
        
        <div className='hidden md:block'>

          <Socials/>
        </div>
          
      
    </div>
  )
}

export default TopNavbar