import React from 'react'
import { StaffData } from '../components/StaffData'

const page = () => {
  return (
    <div className='p-5 md:p-10 md:pl-24 '>
    <div className='flex flex-wrap gap-16 items-ceter justify-center md:justify-start'>
        {
            StaffData.map((staff,index)=>(
                <div key={index}>
                    <h2>{staff.name}</h2>
                    <div>
                        <h1>Position:</h1>
                        <span>{staff.position}</span>
                    </div>

                </div>
            ))
        }
    </div>
    </div>
  )
}

export default page