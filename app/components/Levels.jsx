import React from 'react'

const Levels = () => {
  return (
    <div>

    <div className='bg-[#66b539] w-[] p-3'></div>
    <div className='bg-[#e8f7dd] p-5'>
        <h2 className='text-4xl md:text-3xl font-extrabold'>Our Schools</h2>
        <div className=''>
            <h4 className='text-3xl md:text-2xl font-bold bg-[#290d0db2] text-white p-4 px-4'>Creche</h4>
            <h4 className='text-3xl md:text-2xl font-bold p-4 px-4 bg-[#6BF178]'>Nursery</h4>
            <h4 className='text-3xl md:text-2xl font-bold p-4 px-4 text-white bg-[#2CA02C]'>Kindergarten</h4>
            <h4 className='text-3xl md:text-2xl font-bold p-4 px-4 bg-[#FFE74C]'>Primary</h4>
            <h4 className='text-3xl md:text-2xl font-bold p-4 px-4 text-white bg-[#ae9d38a5]'>Junior High</h4>
        </div>
    </div>
    </div>
  )
}

export default Levels