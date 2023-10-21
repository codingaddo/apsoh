import React from 'react'
import Head from '../components/Head'

const page = () => {
  return (
    <>
    <Head url={'/apply'} text={'APPY NOW'}/>
    <div className='p-5 md:p-10 flex flex-col-reverse items-start gap-10 md:flex-row'>
     <div className="container">
        <h2 className="heading text-4xl text-slate-600 ">Contact Us</h2>
        <form action="" className="form w-[100%] md:w-[50%]">
            <div className="input-field">
                <input id="username" name="text" type="text" autocomplete="off" required/>
                <label for="username">Full Name</label>
            </div>
            <div className="input-field">
                <input id="email" name="email" type="email" autocomplete="off" required/>
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
                <textarea id="password" name="text" type="text" autocomplete="off" required/>
                <label for="username">Message</label>
                
            </div>
            
            <div className="btn-container">
                <button className="btn">Submit</button>
                
            </div>
        </form>
    </div>
    <div className='p-5'>
      <h2 className='text-4xl text-slate-600'>Information</h2>
    </div>

    </div>

    </>
  )
}

export default page