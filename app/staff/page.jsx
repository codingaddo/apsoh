import React from 'react'
import { StaffData } from '../components/StaffData'

const page = () => {
  return (
    <div className='p-5 md:p-10'>
    <div className='flex flex-wrap fle gap-5 items-center justify-center '>
        {
            StaffData.map((staff,index)=>(
                <div key={index} className='py-4 px-4 pb-16 md:pb-5 border-2 shadow-xl flex flex-col gap-1 w-[80vw] md:w-fit'>
                    <h2 className='text-lime-700 font-bold text-xl'>{staff.name}</h2>
                    <div className='flex gap-2'>
                        <h1 className='text-lime-600 font-bold text-sm'>Position:</h1>
                        <span className='text-slate-700'>{staff.position}</span>
                    </div>

                    <div className='flex gap-2'>
                        <h1 className='text-lime-600 font-bold text-sm'>Subjects:</h1>
                        <span className='text-slate-700'>{staff.position}</span>
                    </div>

                    <div className='flex gap-2'>
                        <h1 className='text-lime-600 font-bold text-sm '>Class:</h1>
                        <span className='text-slate-700'>{staff.class  }</span>
                    </div>

                    <div className='flex gap-2'>
                        <h1 className='text-lime-600 font-bold text-sm'>Status:</h1>
                        <span className='text-slate-700'>{staff.status}</span>
                    </div>

                    <div className='flex gap-2'>
                        <h1 className='text-lime-600 font-bold text-sm'>Phone:</h1>
                        <span className='text-slate-700'>{staff.phone}</span>
                    </div>

                    <div className='flex gap-2'>
                        <h1 className='text-lime-600 font-bold text-sm'>Email:</h1>
                        <span className='text-slate-700'>{staff.email}</span>
                    </div>

                </div>
            ))
        }
    </div>
    </div>
  )
}

export default page