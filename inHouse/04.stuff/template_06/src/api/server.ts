import { generateRandomString } from "../utils/generateRandomString";
import { REDIRECT_URL } from "../utils/constants";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const express = require("express");
const querystring = require("querystring");
const app = express();

app.get("/login", (req: any, res: any) => {
  const state = generateRandomString(16);
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: CLIENT_ID,
        scope: scope,
        redirect_uri: REDIRECT_URL,
        state: state,
      })
  );
});
