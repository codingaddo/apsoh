import Link from 'next/link'
import React from 'react'

const ContactInfo = ({title,icon,text,href}) => {
  return (
    <>
    <Link 
    href={href}
    target='_blank'
     className='flex flex-col items-center gap-4 cursor-pointer border p-7 w-[250px] rounded-xl shadow-lg hover:shadow-2xl'>
        <div className='text-slate-600'>{title}</div>
        <div className='text-green-600 text-4xl'>{icon}</div>
        <div className='text-slate-600'>
            {text}
        </div>
    </Link>
    </>

  )
    
}

export default ContactInfo