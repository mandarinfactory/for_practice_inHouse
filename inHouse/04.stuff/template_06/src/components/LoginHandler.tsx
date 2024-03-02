import React, { useState } from "react";
import qs from "querystring";
import { SPOTIFY_ACCESS_TOKEN_URL } from "../util/constants";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

const generateRandomString = (num: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
};

const LoginHandler: React.FC = () => {
  const [state, setState] = useState(generateRandomString(16));
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";

  const handleRedirect = () => {
    window.location.href = `https://accounts.spotify.com/authorize?${qs.stringify(
      {
        response_type: "code",
        client_id: CLIENT_ID,
        scope: scope,
        redirect_uri: `${SPOTIFY_ACCESS_TOKEN_URL}/api/callback`,
        state: state,
      }
    )}`;
  };

  return (
    <div>
      <button onClick={handleRedirect}>Redirect to Spotify</button>
    </div>
  );
};

export default LoginHandler;
