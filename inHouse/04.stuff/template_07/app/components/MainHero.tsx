import React from 'react'

import RandomArtists from './RandomArtists'
import Playlists from './Playlists'

const MainHero:React.FC = () => {
  return (
    <>
        <RandomArtists />
        <Playlists />
    </>
  )
}

export default MainHero