import React from 'react'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import '../css/screen/Player.css'

function Player({ spotify }) {
  return (
    <div className='player'>
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>
        <Footer />
    </div>
  )
}

export default Player