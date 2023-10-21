import Link from 'next/link'
import React from 'react'
import { BsDownload } from 'react-icons/bs'

const DownloadForm = ({className}) => {
  return (
      <div className={`flex flex-col items-center md:${className} `}>
                <h2 className='text-xl text-center md:text-left pb-3 font-bold text-slate-600'>Download The Full Enrollment Application Form</h2>
                <button className=' flex items-center justify-center gap-1 bg-lime-500 hover:animate-none rounded-lg py-3 w-48 font-bold shadow-sm text-xl text-[#f8f8f6] hover:bg-lime-600 hover:shadow-2xl  ease duration-300'>
                    <Link href={''}>Download</Link>
                    <BsDownload className='animate-bounce font-bold text-[#f8f8f6]' />
                </button>
            </div>
  )
}

export default DownloadForm