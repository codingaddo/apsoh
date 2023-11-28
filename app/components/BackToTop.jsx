import React from 'react'
import {FaAngleUp} from 'react-icons/fa'
import useScroll from './hooks/scroll'

const BackToTop = () => {
    const [top,setTop,ScrollUp] = useScroll()
  return (
    <>
    { top &&
        <div className='fixed right-3 md:right-5 bottom-7 rounded-lg z-30 bg-green-600 cursor-pointer h-[40px] w-[40px]  flex items-center justify-center hover:bg-green-500' onClick={ScrollUp}>
            <FaAngleUp className='text-slate-200 text-3xl'/>
        </div>
    }
</>
  )
}

export default BackToTop