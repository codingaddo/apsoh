import Link from 'next/link'
import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaSearch, FaMailBulk, FaLocationArrow, FaPhoneSquare} from 'react-icons/fa'
import Search from './Search'
import Socials from './Socials'


const Footer = () => {
  return (
    <>
    <div className='lastDiv text-center p-8 text-md md:text-2xl font-bold bg-[#e8f7ddaa]'>
        <p className=''>Need help? Call our award winning support team on +233 551 817 972</p>
      </div>
    <footer className='flex  md:justify-between items-start md:items-center py-20 px-12 flex-col md:flex-row gap-10 bg-[#66b539]'>
            <div className='flex flex-col gap-5'>

            <h1>Logo</h1>

         
          <Search/>

          <Socials className={'hidden md:flex gap-3'} iconStyles={'p-4'}/>



           

            <p className='text-md text-[#f1f1f1]'>{<span>&copy; {new Date().getFullYear()}</span>} | All rights reserved</p>

            </div>



            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-bold text-[#FEEFE5]'>Academics</h3>
                    <Link href={''} className='text-[#f1f1f1] text-md font-thin hover:underline'>Fees</Link>
                    <Link href={''} className='text-[#f1f1f1] text-md font-thin hover:underline'>Subjects</Link>
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-bold text-[#FEEFE5]'>Staff</h3>
                    <Link href={''} className='text-[#f1f1f1] text-md font-thin hover:underline'>Teaching</Link>
                    <Link href={''} className='text-[#f1f1f1] text-md font-thin hover:underline '>Non-Teaching</Link>
                    
                </div>
            </div>




            <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-bold text-[#FEEFE5]'>Who We Are</h3>
                    <Link href={''} className='text-[#f1f1f1] text-md font-thin hover:underline'>About Us</Link>
                    <Link href={''} className='text-[#f1f1f1] text-md font-thin hover:underline'>What We Offer</Link>
                    <Link href={''} className='text-[#f1f1f1] text-md font-thin hover:underline'>Levels</Link>
                    <Link href={''} className='text-[#f1f1f1] text-md font-thin hover:underline'>Facilities</Link>
                    <Link href={''} className='text-[#f1f1f1] text-md font-thin hover:underline'>Our Culture</Link>
                    
                </div>
            <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-bold text-[#FEEFE5]'>Contacts</h3>
                    <Link href={''} className='text-[#f1f1f1] text-md flex gap-2 font-thin hover:underline'><button className='text-[#6BF178] text-sm'><FaLocationArrow/> </button>Post Office Box 28, Samsam Accra,Ghana</Link>
                    <Link href={''} className='text-[#f1f1f1] text-md flex gap-2 font-thin hover:underline'><button className='text-[#6BF178] text-sm'><FaPhoneSquare/> </button>Propritor Office +233 551 817 972</Link>
                    <Link href={''} className='text-[#f1f1f1] text-md flex gap-2 font-thin hover:underline'><button className='text-[#6BF178] text-sm'><FaPhoneSquare/> </button>Principal Office +233 551 8172 972</Link>
                    <Link href={''} className='text-[#f1f1f1] text-md flex gap-2 font-thin hover:underline'><button className='text-[#6BF178] text-sm'><FaPhoneSquare/> </button>Head Master/Mistress Office +233 551 817 972</Link>
                    <Link href={''} className='text-[#f1f1f1] text-md flex gap-2 font-thin hover:underline'><button className='text-[#6BF178] text-sm'><FaMailBulk/> </button> info@apsoh.edu.gh</Link>
                    
                </div>
        
    </footer>
    </>
  )
}

export default Footer