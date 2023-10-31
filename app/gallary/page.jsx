import React from 'react'
import Gallary from '../components/Gallary'
import pictures from '../components/GallaryImages'

const page = () => {

  return (
    <div >
      <Gallary pics={pictures}/>
    </div>
  )
}

export default page