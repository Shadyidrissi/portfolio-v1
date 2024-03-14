import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import '../style.css'
import '../../App.css'
function Home() {
  return (
    <div className="home-div">
      <Header/>
      <Navbar/>
      <h1 className='title-home'>
        Transform Idea To Digital Reality
      </h1>
    </div>
  )
}

export default Home