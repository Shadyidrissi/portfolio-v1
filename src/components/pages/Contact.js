import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'

function Contact() {
  return (
    <div className='contact'>
      <Header />
      <Navbar />
      <div className='contact-div'>
        <h1>let's talk</h1>
        <div className='form'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="text" placeholder='Number Phone' />
          <input type="text" placeholder='Gmail' />
          <textarea id='message-input' placeholder='Message' cols="80" rows="4"></textarea>
          <button id='button-send'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact