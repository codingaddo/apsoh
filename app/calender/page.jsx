'use client'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timegridplugin from '@fullcalendar/timegrid'
import interactionplugin from '@fullcalendar/interaction'

const page = () => {

  const event = [
    {
    title:'PTA Meeting',
    start:'2023-10-05T08:00:00',
    end: '2023-10-30T08:59:00',
  },

  {
     title:'No school',
    start:'2023-12-05',
    end: '2023-12-11',
  }
]

  return (
    <div className='p-5 md:p-14 flex flex-col'>
      <div className='pb-10'>
        <h1>Calendar</h1>
        <div className=' w-full h-[0.12rem] bg-slate-500'></div>
      </div>
      <FullCalendar
      plugins={[dayGridPlugin,timegridplugin,interactionplugin]}
      initialView={'dayGridMonth'}
      headerToolbar ={
                {
          start: 'today,prev,next', // will normally be on the left. if RTL, will be on the right
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay' // will normally be on the right. if RTL, will be on the left
        }
      }
      height={'100vh'}
      events={event}
    
      
      />
    </div>
  )
}

export default page