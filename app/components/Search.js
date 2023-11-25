'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/navigation'


const Search = ({className}) => {
   const [searchTerm, setSearchTerm] = useState('')
   const router = useRouter()
   const err = '/error'

   const handleSearch = (e)=>{
    e.preventDefault()
    if(!searchTerm) return
    if (searchTerm.trim() !== '') {
      router.push(`${encodeURIComponent(searchTerm).toLowerCase()}`);
    } 

    }
   

  return (
       <form className='flex' onSubmit={handleSearch}>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e)=>setSearchTerm(e.target.value)}
              placeholder='Search' 
              className='p-3 rounded-l-md outline-none sm:w-full '
            />
            <button 
              className='btn bg-[#4bcd58] rounded-r-md text-sm flex justify-center items-center p-3 px-4 cursor-pointer transition-all duration-300 hover:bg-[#6fc249]'
              
            >
            <FaSearch/>
            </button>
        </form>
  )
}

export default Search