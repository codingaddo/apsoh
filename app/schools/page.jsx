import React from 'react'
import Head from '../components/Head'
import SchoolCards from '../components/SchoolCards'

const page = () => {
  return (
    <div>
        <Head text={'Enroll Now'} url={'/apply'}/>
        <div className='p-5 md:p-10'>
          <div className='flex flex-col md:flex-row justify-between items-baseline pb-10'>
            <h1 className='text-4xl font-bold text-green-600'>Departments</h1>
            <p className='text-slate-600'>
              We are ensuring a promising beginning for your childs future
            </p>
          </div>
          <div className="school-cards hidden md:block">
              <SchoolCards/>
          </div>
        </div>
    </div>
  )
}

export default page