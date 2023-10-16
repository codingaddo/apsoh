import React from 'react'
import EventPictcures from '../components/eventPictcures'
import {svgs} from '../components/slidePics/svg'
const page = () => {
  return (
    <div className='p-1 md:pt-10 pt-5 md:p-10 md:px-16 flex  flex-col items-center bg-[]' >
      {/* <div className='about-head bg-lime-600 w-[220px] p-5 mb-7 '>
      <h1 className='text-center text-xl font-extrabold uppercase  text-[#f1f1f1]'>News and Events</h1>
      </div> */}
<div className='flex flex-col gap-24'>
      <EventPictcures img={svgs} text={'Principal Honour Christmas Term'} bg={''}/>
      <EventPictcures img={svgs} text={'Sugar Strike'}/>
      <EventPictcures img={svgs} text={'The Spelling Bee'}/>
      <EventPictcures img={svgs} text={'Geography Trip'}/>
      <EventPictcures img={svgs} text={'Cultural Shows'}/>
      <EventPictcures img={svgs} text={'Graduation'}/>

</div>
    </div>
  )
}

export default page