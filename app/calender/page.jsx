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
    end: '2023-10-05T08:59:00',
  },

  {
     title:'No school',
    start:'2023-12-05T08:00:00',
    end: '2023-12-05T08:00:00',
  },
  {
     title:'Graduation',
    start:new Date(2023,11,10),
    end: '',
  }
]

  return (
    <div className='calendar-container p-3 md:p-14 flex flex-col gap-5'>
      <div className='pb-10'>
        <h1 className='text-2xl font-bold text-slate-600 uppercase'>Calendar</h1>
        <div className=' w-full h-[0.12rem] bg-slate-500'></div>
      </div>
      <FullCalendar
      plugins={[dayGridPlugin,timegridplugin,interactionplugin]}
      initialView={'dayGridMonth'}
       nowIndicator={true}
        // editable={true}
        selectable={true}
        selectMirror={true}
      headerToolbar ={
                {
          start: 'title', // will normally be on the left. if RTL, will be on the right
          center: '',
          end: 'prev,next' // will normally be on the right. if RTL, will be on the left
        }
      }
      height={'100vh'}
      events={event}
       resources={[
            { id: 'a', title: 'Auditorium A' },
            { id: 'b', title: 'Auditorium B', eventColor: 'green' },
            { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
          ]}

            initialEvents={[
              // { title: 'Reopen', start:'2023-11-01' , resourceId: 'c' },
            { title: 'Reopen Week', start: new Date(), resourceId: 'b' },
          ]}
      
    
      
      />
    </div>
  )
}

export default page