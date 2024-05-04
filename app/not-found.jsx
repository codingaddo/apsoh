'use client'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className=' text-center bg-slate-200 pb-24 flex flex-col items-center justify-center gap-5'>
        <h2 className='text-4xl pt-24 text-slate-500'>Page Not found error ☹️</h2>
        <h2 className='text-4xl pt-2 text-slate-500'>Page does not exist</h2>
        <button className=' underline text-blue-600'>
            <Link href={'/'}>Go to Home Page</Link>
        </button>
        
    </div>
  )
}

export default notFound