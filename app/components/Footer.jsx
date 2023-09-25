import Link from 'next/link'
import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaSearch, FaMailBulk, FaLocationArrow, FaPhoneSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='flex justify-around md:items-center py-20 px-7 flex-col md:flex-row gap-10 bg-[#66b539]'>
            <div className='flex flex-col gap-5'>

            <h1>Logo</h1>

          <form action="" className='flex'>
            <input type="text" placeholder='Search' className='p-3 rounded-l-md outline-none sm:w-full '/>
            <button className='btn bg-[#6BF178] rounded-r-md text-sm flex justify-center items-center p-3 px-4 cursor-pointer transition-all duration-300 hover:bg-[#6fc249]'>
            <FaSearch/>
            </button>
          </form>



            <div className='hidden md:block'>
            <div className="socials flex gap-3 sm:py-7">
            <div className='bg-[#6BF178] text-sm flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]'>
            <FaFacebook/>

            </div>
            <div className='bg-[#6BF178] text-sm flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]'>

            <FaTwitter/>
            </div>
            <div className='bg-[#6BF178] text-sm flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]'>

            <FaInstagram/>
            </div>
            <div className='bg-[#6BF178] text-sm flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#6fc249]'>

            <FaSearch/>

            </div>
        </div>
        </div>

            <p className='text-[1.1em] text-[#feefe5]'>{<span>&copy; {new Date().getFullYear()}</span>} | All rights reserved</p>

            </div>



            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-md text-[#FEEFE5]'>Academics</h3>
                    <Link href={''} className='text-[#dfe0de] text-sm'>Fees</Link>
                    <Link href={''} className='text-[#dfe0de] text-sm'>Subjects</Link>
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-md text-[#FEEFE5]'>Staff</h3>
                    <Link href={''} className='text-[#dfe0de] text-sm'>Teaching</Link>
                    <Link href={''} className='text-[#dfe0de] text-sm'>Non-Teaching</Link>
                    
                </div>
            </div>




            <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-md text-[#FEEFE5]'>Who We Are</h3>
                    <Link href={''} className='text-[#dfe0de] text-sm'>About Us</Link>
                    <Link href={''} className='text-[#dfe0de] text-sm'>What We Offer</Link>
                    <Link href={''} className='text-[#dfe0de] text-sm'>Levels</Link>
                    <Link href={''} className='text-[#dfe0de] text-sm'>Facilities</Link>
                    <Link href={''} className='text-[#dfe0de] text-sm'>Our Culture</Link>
                    
                </div>
            <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-md text-[#FEEFE5]'>Contacts</h3>
                    <Link href={''} className='text-[#dfe0de] text-sm flex gap-2'><button className='text-[#6BF178] text-xl'><FaLocationArrow/> </button>Post Office Box 28, Samsam Accra,Ghana</Link>
                    <Link href={''} className='text-[#dfe0de] text-sm flex gap-2'><button className='text-[#6BF178] text-xl'><FaPhoneSquare/> </button>Propritor Office +233 551 817 972</Link>
                    <Link href={''} className='text-[#dfe0de] text-sm flex gap-2'><button className='text-[#6BF178] text-xl'><FaPhoneSquare/> </button>Principal Office +233 551 8172 972</Link>
                    <Link href={''} className='text-[#dfe0de] text-sm flex gap-2'><button className='text-[#6BF178] text-xl'><FaPhoneSquare/> </button>Head Master/Mistress Office +233 551 817 972</Link>
                    <Link href={''} className='text-[#dfe0de] text-sm flex gap-2'><button className='text-[#6BF178] text-xl'><FaMailBulk/> </button> info@apsoh.edu.gh</Link>
                    
                </div>
        
    </footer>
  )
}

export default Footer