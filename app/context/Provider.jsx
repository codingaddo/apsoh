'use client'
import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const Provider = (
    {children}
) => {
  return (
    <>
    <ProgressBar
        color='#6BF178'
        height='4px'
        shallowRouting
        options={
            {
                showSpinner:false,
            }
        }
        
    />
        {children}
    </>
  )
}

export default Provider