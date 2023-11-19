'use client'
import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [progress,setProgress] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setProgress((prevProgress)=>prevProgress>=100?0:prevProgress+5)
        },600)

        return ()=>{
          clearInterval(interval)
        }

    },[])
  return (
    <div className='loading'>
      <div className='loadingBar' style={{width:`${progress}%`}}>

      </div>
    </div>
  )
}

export default ProgressBar