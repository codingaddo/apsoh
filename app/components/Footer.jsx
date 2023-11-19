import Link from 'next/link'
import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaSearch, FaMailBulk, FaLocationArrow, FaPhoneSquare,FaWhatsapp} from 'react-icons/fa'
import Search from './Search'
import Socials from './Socials'


const Footer = () => {
  return (
    <div className='pt-5'>
    <div className='lastDiv text-center p-8 text-md md:text-2xl font-bold bg-[#e8f7ddaa]'>
        <p className=''>Need help? Call our award winning support team on +233 551 817 972</p>
      </div>
    <footer className='flex  md:justify-between items-start md:items-center pt-16 pb-3 px-8 md:px-12 flex-col md:flex-row gap-10 bg-[#66b539]'>
            <div className='flex flex-col gap-5'>

            <h1>Logo</h1>

         
          <Search/>

          <Socials className={'hidden md:flex gap-3'} iconStyles={'p-4'}/>


            <p className='text-md text-[#f1f1f1]'>{<span>&copy; {new Date().getFullYear()}</span>} | All rights reserved</p>

            </div>



            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl font-bold text-[#FEEFE5]'>Academics</h3>
                    <Link href={'/fees'} className='text-[#f1f1f1] text-md font-md hover:underline'>Fees</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <Link href={'/staff'} className='text-[#f1f1f1] text-md font-md hover:underline'>Staff</Link>
                    <Link href={'/schools'} className='text-[#f1f1f1] text-md font-md hover:underline '>Schools</Link>
                    <Link href={'/apply'} className='text-[#f1f1f1] text-md font-md hover:underline '>Apply Now</Link>
                    
                </div>
            </div>




            <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl font-bold text-[#FEEFE5]'>Who We Are</h3>
                    <Link href={'/about'} className='text-[#f1f1f1] text-md font-md hover:underline'>About Us</Link>
                    <Link href={'/gallary'} className='text-[#f1f1f1] text-md font-md hover:underline'>Gallary</Link>
                    <Link href={'/facilities'} className='text-[#f1f1f1] text-md font-md hover:underline'>Facilities</Link>
                    <Link href={'/ourculture'} className='text-[#f1f1f1] text-md font-md hover:underline'>Our Culture</Link>
                    
                </div>
            <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl font-bold text-[#FEEFE5]'>Contacts</h3>
                    <Link href={'/contact'} className='text-[#f1f1f1] text-md flex gap-2 font-md hover:underline'><button className='text-[#6BF178] text-sm'><FaLocationArrow/> </button>Post Office Box 28, Samsam Accra,Ghana</Link>
                    <Link href={'tel:0551817972'} className='text-[#f1f1f1] text-md flex gap-2 font-md hover:underline'><button className='text-[#6BF178] text-sm'><FaPhoneSquare/> </button>Propritor Office +233 551 817 972</Link>
                    <Link href={'tel:0551817972'} className='text-[#f1f1f1] text-md flex gap-2 font-md hover:underline'><button className='text-[#6BF178] text-sm'><FaPhoneSquare/> </button>Principal Office +233 551 8172 972</Link>
                    <Link href={'mailto:xzy@gmail.com'} className='text-[#f1f1f1] text-md flex gap-2 font-md hover:underline'><button className='text-[#6BF178] text-sm'><FaMailBulk/> </button> info@apsoh.edu.gh</Link>
                    
                </div>

    </footer>
      <div className='text-center p-4 bg-black flex flex-col'>
        <span className='text-slate-300 text-md'>Website Powered by</span>
        <Link href={'https://codingaddo-eta.vercel.app/'} target='_blank' className='text-lg text-orange-500 font-medium'> MYTECH DEVELOPMENT</Link>
       
      </div>
    </div>
  )
}

export default Footer