import axios from "axios";

import { AccessTokenData } from "../../types/types";
import { SPOTIFY_ACCESS_TOKEN_URL } from "../../utils/constants";

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

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
    },
  });
};
