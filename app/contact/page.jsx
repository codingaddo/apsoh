'use client'
import React, { useRef } from 'react'
import Head from '../components/Head'
import contact from '../../public/assets/contact.svg'
import Map from '../components/Map'
import emailjs from '@emailjs/browser';

const page = () => {
    // const form = useRef()


  return (
    <>
    <Head url={'/apply'} text={'APPY NOW'} imageUrl={contact}/>
    <div className='p-5 md:p-10 flex flex-col items-center md:items-start justify-around gap-5 md:flex-row'>
     <div className="container md:w-[40%]">
        <h2 className="heading text-2xl text-slate-600 font-medium ">Contact Us</h2>
        <form action="" className="form w-[100%] ">
            <div className="input-field">
                <input id="username" name="user_name" type="text" autocomplete="off" required/>
                <label for="username">Full Name</label>
            </div>
            <div className="input-field">
                <input id="email" name="user_email" type="email" autocomplete="off" required/>
                <label for="email">Email</label>
            </div>
            <div className="input-field">
                <input id="password" name="text" type="text" autocomplete="off" required/>
                <label for="username">Phone</label>
                
            </div>
            <div className="input-field">
                <input id="password" name="text" type="text" autocomplete="off" required/>
                <label for="username">Subject</label>
                
            </div>
            <div className="input-field">
                <textarea id="password" name="message" type="text" autocomplete="off" required/>
                <label for="username">Message</label>
                
            </div>
            
            <div className="btn-container">
                <button className="btn">Submit</button>
                
            </div>
        </form>
    </div>
    <div className='flex flex-col gap-5 '>
      <div className='flex flex-col  text-slate-600'>
      <span className='text-md text-slate-600 font-medium'>Post Office Box 999,Medie-Samsam,Accra</span>
      <span className='text-md text-slate-600 font-medium'>0551817972</span>
      </div>
        <Map/>
    </div>

    </div>

   

    </>
  )
}

export default page