'use client'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timegridplugin from '@fullcalendar/timegrid'
import interactionplugin from '@fullcalendar/interaction'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const page = () => {
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
      
      />
    </div>
  )
}

export default page