
import React from 'react'
import Head from '../components/Head'
import SchoolCards from '../components/SchoolCards'
import DownloadForm from '../components/DownloadForm'


const page =()=>{

  return (
    <div>
        <Head text={'Enroll Now'} url={'/apply'}/>
        <div className='p-5 md:p-10'>
          <div className='flex flex-col md:flex-row justify-between items-baseline pb-10'>
            <h1 className='text-4xl font-bold text-green-600 p-2'>Schools</h1>
            <p className='text-slate-600'>
              We are ensuring a promising beginning for your childs future
            </p>
          </div>
          <div className="school-cards flex flex-wrap " >
 
              <SchoolCards school={'Pre-School'} animate={'zoom-in'} time={'2000'}/>
              <SchoolCards school={'Nursery School'} animate={'flip-down'} time={'3000'}/>
              <SchoolCards school={'Kindergarten'} animate={'flip-left'} time={'4000'}/>
              <SchoolCards school={'Primary School'} animate={'fade-left'} time={'5000'}/>
              <SchoolCards school={'Junior High School'} animate={'flip-up'} time={'5500'}/>
              
          </div>
          <DownloadForm/>
        </div>

    </div>
  )
}

export default page