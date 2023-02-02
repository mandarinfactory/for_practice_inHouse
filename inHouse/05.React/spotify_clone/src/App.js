import './assets/css/App.css';
import './assets/css/style.css';
import Login from './assets/components/Login'
import Player from './assets/components/Player'
import { useState, useEffect } from 'react'
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './dataLayer';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); 

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const theToken = hash.access_token;

    if (theToken) {
      dispatch({
        type : 'SET_TOKEN',
        token : theToken,
      })//dispatch

      spotify.setAccessToken(theToken);
      spotify.getMe().then(user => {
        dispatch({
          type : 'SET_USER',
          user,
        })//dispatch
      })//then
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type : 'SET_PLAYLISTS', 
          playlists,
        })//dispatch
      })//then
    }//if
  }, [])//useEffect
  return (
    <div className="App">
      {
        token ? <Player spotify={spotify}/> : < Login />
      }
    </div>
  );
}

export default App;

//01:30:56//