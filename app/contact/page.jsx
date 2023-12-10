'use client'
import React from 'react'
import Head from '../components/Head'
import contact from '../../public/assets/contact.svg'
import Map from '../components/Map'
import ContactInfo from '../components/ContactInfo'
import {FaPhoneSquare,FaWhatsapp} from 'react-icons/fa'
const Page = () => {
   

  return (
    <>
    <Head url={'/apply'} text={'APPY NOW'} imageUrl={contact}/>
    <div className='p-5 md:p-10 flex flex-col items-center  justify-center gap-16 '>
     <div className=" flex flex-col md:flex-row gap-16 md:gap-20 items-center justify-between p-5">
        {/* <h2 className="heading text-2xl text-slate-600 font-medium ">Contact Us</h2> */}
        {/* <form ref={form} className="form w-[100%] " onSubmit={sendEmail}>
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
                <input type="submit" value="Send" className='btn' />
                
            </div>
        </form> */}
      
    <ContactInfo href={'tel:0505541697'} title={'Give us a call'} text={'0505541697'} icon={<FaPhoneSquare/>}/>
    <ContactInfo href={'mailto:michaeladdo@1997gmail.com'} title={'Send us a mail'} text={'michaeladdo@1997gmail.com'} icon={<FaPhoneSquare/>}/>
    <ContactInfo href={'https://api.whatsapp.com/send?phone=+233551817972'} title={'Whatsapp us'} text={'0551817972'} icon={<FaWhatsapp/>}/>

   
       
    </div>
    <div className='flex flex-col gap-5 items-center justify-center'>
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

export default Page