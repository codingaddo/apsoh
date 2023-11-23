'use client'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({className}) => {
    const handleSumit = (e)=>{
        e.preventDefault()
    }
  return (
       <form action="" className='flex' onSubmit={handleSumit}>
            <input type="text" placeholder='Search' className='p-3 rounded-l-md outline-none sm:w-full '/>
            <button className='btn bg-[#4bcd58] rounded-r-md text-sm flex justify-center items-center p-3 px-4 cursor-pointer transition-all duration-300 hover:bg-[#6fc249]'>
            <FaSearch/>
            </button>
          </form>
  )
}

export default Search