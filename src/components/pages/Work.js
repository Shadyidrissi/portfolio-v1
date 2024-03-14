import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import '../style.css'

function Work() {
  return (
    <div className='work'>
      <Header />
      <Navbar />
      <div className='work-div'>
        <div className='paragraph-work'>
          <h1>Work</h1>
          <p>leoremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
        </div>
        <div className='photo-work'>
          <div id='cards-work'>
            <div id='card-work'></div>
            <div id='card-work'></div>
            <div id='card-work'></div>
            <div id='card-work'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work