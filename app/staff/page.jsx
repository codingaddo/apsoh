import React from 'react'
import { StaffData } from '../components/StaffData'
import { MdEmail} from 'react-icons/md'
import Link from 'next/link'

const page = () => {
  return (
    <div className='p-5 md:p-10'>
        <div className='flex flex-col mb-10 gap-4 px-5'>
            <h1 className='text-lime-800 text-4xl md:pl-32'>Staff Directory</h1>
            <span className='w-full bg-slate-400 h-[1px]'></span>
        </div>
    <div className='flex flex-wrap fle gap-5 items-center justify-center '>
        {
            StaffData.map((staff,index)=>(
                <div key={index} className='py-3 px-4 pb-16 md:pb-5 border-2 flex flex-col gap-1 w-[80vw] md:w-[290px] md:h-[300px]'>
                    <h2 className='text-lime-900 font-bold text-[1.18em]'>{staff.name}</h2>
                    <div className='flex gap-2'>
                        <h1 className='text-lime-900 font-bold text-[1.01em]'>Position:</h1>
                        <span className='text-slate-500 text-[1em] font-medium'>{staff.position}</span>
                    </div>

                    <div className='flex gap-2'>
                        <h1 className='text-lime-900 font-bold text-[1.01em]'>Subjects:</h1>
                        <span className='text-slate-500 text-[1em] font-medium'>{staff.subject}</span>
                    </div>

                    <div className='flex gap-2'>
                        <h1 className='text-lime-900 font-bold text-[1.01em] '>Class:</h1>
                        <span className='text-slate-500 text-[1em] font-medium'>{staff.class  }</span>
                    </div>

                    <div className='flex gap-2'>
                        <h1 className='text-lime-900 font-bold text-[1.01em]'>Status:</h1>
                        <span className='text-slate-500 text-[1em] font-medium'>{staff.status}</span>
                    </div>

                    <Link href={`tel:${staff.phone}`} className='flex gap-2'>
                        <h1 className='text-lime-900 font-bold text-[1.01em]'>Phone:</h1>
                        <span className='text-slate-500 text-[1em] font-medium underline'>{staff.phone}</span>
                    </Link>

                    <Link href={`mailto:${staff.email}`} className='flex items-center text-lime-900 gap-1 '>
                        <h1 className='tex-lime-900 font-bold text-2xl '><MdEmail/></h1>
                        <span className='text-slat-500 text-[1em] font-medium underline'>{staff.email}</span>
                    </Link>

                </div>
            ))
        }
    </div>
    </div>
  )
}

export default page