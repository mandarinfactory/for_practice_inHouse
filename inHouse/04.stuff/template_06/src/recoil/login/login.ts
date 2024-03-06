import qs from "querystring";

import { SPOTIFY_URL } from "../../utils/constants";
import { generateRandomString } from "../../utils/generateRandomString";

export const login = () => {
  const state = generateRandomString(16);
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";
  const handleRedirect = () => {
    window.location.href = `https://accounts.spotify.com/authorize?${qs.stringify(
      {
        response_type: "code",
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        scope: scope,
        redirect_uri: `${SPOTIFY_URL}/api/callback`,
        state: state,
      }
    )}`;
  };
};