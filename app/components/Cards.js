import React from 'react'

const Cards = ({icon,text,para}) => {
  return (
        <div className='card flex flex-col items-center justify-center gap-2 text-center w-full md:w-[25vw] h-[350px] p-5 rounded-xl bg-slate-200 shadow-xl cursor-pointer hover:shadow-2xl ease-in-out duration-300'>
            <div className='text-lime-500]'>
            {icon}
            </div>
            <h2 className='text-2xl font-medium'>{text}</h2>
            <p>{para}</p>

        </div>

  )
}

export default Cards