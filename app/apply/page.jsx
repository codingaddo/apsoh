import React from 'react'
import Head from '../components/Head'
import Link from 'next/link'
import { BsDownload, } from 'react-icons/bs'
import DownloadForm from '../components/DownloadForm'

const page = () => {
  return (
    <>
        <Head url={''} text={'Download Form'}/>
    <div className='p-4 md:p-10'>
            <h1 className='text-3xl md:text-4xl text-center md:text-left pb-3 font-bold text-slate-600'>Erollment</h1>
        <div className='flex flex-col  md:flex-row items-center md:items-start gap-10 justify-between'>
            <div className='flex flex-col gap-5 md:w-[90%]'>
            <p className='text-[1.25em] text-slate-600 text-center md:text-justify'>
                At APSOH Academy, we have a rolling enrollment process. Although many children do start on the traditional early-August schedule, we also welcome new families throughout the year.
            </p>
            <p className='text-[1.25em] text-slate-600 text-center md:text-justify'>
                Our rolling enrollment process acknowledges the reality that the most significant influences in a family’s need for preschool (a child’s readiness for preschool, a parent’s decision to start or stop working full time, or the arrival of a new sibling) do not occur on a strict academic calendar.
            </p>
            <p className='text-[1.25em] text-slate-600 text-center md:text-justify'>
                After completing the enrollment inquiry form, we will contact you to inform you of the enrollment. Our enrollment policy is a first come first serve basis (siblings do have priority). Depending on the wait list your child may start at the time you desire or you may have to wait before a space is available.
            </p>
            </div>

          <DownloadForm className={'items-start'}/>
          
        </div>
    </div>

    </>
  )
}

export default page