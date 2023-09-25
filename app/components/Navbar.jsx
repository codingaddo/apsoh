'use client'
import Link from 'next/link'
import React, { useState } from 'react'


const Navbar = () => {
    const [size, setSize] = useState()
  return (
    <div className='flex justify-around items-center bg-[#ffffff] shadow-xl py-7 w-full'>
        <h1>Logo</h1>
        <ul className='flex justify-between gap-10'>
        <Link href={'/'}>HOME</Link>
        <Link href={'/'}>ABOUT APSOH</Link>
        <Link href={'/'}>ACADEMICS</Link>
        <Link href={'/'}>ADMISSIONS</Link>
        <Link href={'/'}>EVENTS</Link>
        <Link href={'/'}>CONTACT</Link>

        </ul>
    </div>
  )
}

export default Navbar