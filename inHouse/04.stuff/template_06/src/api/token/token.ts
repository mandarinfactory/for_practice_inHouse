import axios from "axios";
import { Buffer } from "buffer";

import { AccessTokenData } from "../../types/type";
import { SPOTIFY_ACCESS_TOKEN_URL } from "../../utils/constants";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export const getAccessTokenData = () => {
  return axios<AccessTokenData>({
    method: "POST",
    url: SPOTIFY_ACCESS_TOKEN_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
    },
    data: {
      grant_type: "client_credentials",
      scope:
        "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming",
    },
  });
};
