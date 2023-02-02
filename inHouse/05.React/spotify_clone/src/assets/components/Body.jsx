import React from 'react'
import Header from '../components/Header'
import '../css/screen/Body.css'

function Body({ spotify }) {
  return (
    <div className='body'>
        <Header spotify={spotify}/>
        <div className="body_info">
          <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/F7gdmTr2jk94I_jlyQ1R5IGfnWQHbfSp4V7nMWgl40369bn8n9Bn-xQvGRa7VfZEfPwtPCOzQmcGoxR8Mk3BVzoBXHNw192IVm4Sr5iLQYc=/MTU6MDE6MDFUMjEtMjEtMg==" alt />
          <div className="body_infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>description.....</p>
          </div>
        </div>
    </div>
  )
}

export default Body