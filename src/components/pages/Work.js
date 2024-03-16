import React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import '../style.css';

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
            <a className='card-work' id='card-work'>
              <div className='card-content'>Title 1</div>
            </a>
            <a className='card-work' id='card-work'>
              <div className='card-content'>Title 2</div>
            </a>
            <a className='card-work' id='card-work'>
              <div className='card-content'>Title 3</div>
            </a>
            <a href='https://shady-studyhub.web.app/' className='card-work' id='card-work'>
              <div className='card-content'>Web Site</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
