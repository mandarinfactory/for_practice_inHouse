import axios from "axios";

import {
  AccessTokenData,
  AuthorizationTokenData,
  RefreshTokenData,
} from "../types/types";
import { REDIRECT_URL, SPOTIFY_ACCESS_TOKEN_URL } from "../utils/constants";

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

export const getAuthorizationTokenData = (code: string) => {
  return axios<AuthorizationTokenData>({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
    },
    data: {
      code: code,
      redirect_uri: REDIRECT_URL + "/api/callback",
      grant_type: "authorization_code",
    },
  });
};

export const getRefreshTokenData = (refresh_token: string) => {
  return axios<RefreshTokenData>({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
        ).toString("base64"),
    },
    data: {
      grant_type: "refresh_token",
      refresh_token,
    },
  });
};
