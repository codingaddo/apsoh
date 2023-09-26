import React from 'react'

const Statistic = ({icon,number,name,className}) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
       <div className='text-[40px] text-[#0f4a2ea2]'>{icon}</div>
       <p className='text-[3em] font-bold'>{number}</p>
       <h3 className='text-2xl text-center font-bold text-[#0f4a2ea2]'>{name}</h3>
    </div>
  )
}

export default Statistic