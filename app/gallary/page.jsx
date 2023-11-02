import React from 'react'
import Gallary from '../components/Gallary'
import pictures from '../components/GallaryImages'

const page = () => {

  return (
    <div className='bg-gradient-to-r from-green-100 to-slate-100 px-5 md:px-10 pt-12 md:pt-24 pb-16' >
      <Gallary pics={pictures}/>
    </div>
  )
}

export default page