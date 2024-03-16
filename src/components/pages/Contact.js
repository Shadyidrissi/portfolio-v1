import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'

function Contact() {
  return (
    <div className='contact'>
        <Header/>
        <Navbar/>
        <div className='contact-div'>
            <h1>let's talk</h1>
            <div className='form'>
                <input type="text" placeholder='name' />
                <input type="text" placeholder='name' />
                <input type="text" placeholder='name' />
                <input type="text" placeholder='name' />
                <input type="text" placeholder='name' />
                <input type="text" placeholder='name' />
            </div>
        </div>
    </div>
  )
}

export default Contact