import React from 'react'

function Navbar() {
  return (
    <reactFragment>
      <ul className='navbar-iteams'>
        <li>
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" color='white' width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="/about">
            <svg fill="none" color='white' viewBox="0 0 24 24" height="1em" width="1em" >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                clipRule="evenodd"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="/service">
            <svg
              color='white'
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="/work">
            <svg fill="none" color='white' viewBox="0 0 24 24" height="1em" width="1em" >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17 7a3 3 0 00-3-3h-4a3 3 0 00-3 3H6a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3v-8a3 3 0 00-3-3h-1zm-3-1h-4a1 1 0 00-1 1h6a1 1 0 00-1-1zM6 9h12a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="/contact">
            <svg
              color='white'
              viewBox="0 0 448 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384 196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
            </svg>
          </a>
        </li>
      </ul>
    </reactFragment>
  )
}

export default Navbar

