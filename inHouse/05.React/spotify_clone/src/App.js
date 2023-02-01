import './assets/css/App.css';
import './assets/css/style.css';
import Login from './assets/components/Login'
import Player from './assets/components/Player'
import { useState, useEffect } from 'react'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [token , setToken] = useState(null);

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const theToken = hash.access_token;

    if (theToken) {
      setToken(theToken);
      spotify.setAccessToken(theToken);
      spotify.getMe().then(user => {
        console.log('person', user);
      })
    }//if
    console.log(token);
  }, []);
  return (
    <div className="App">
      {
        token ? <Player /> : < Login />
      }
    </div>
  );
}

export default App;

//01:30:56//