import axios from "axios";

import { SPOTIFY_ACCESS_TOKEN_URL } from "../../util/constants";
import {
  AccessTokenData,
  LoginAccessTokenData,
  RefreshAccessTokenData,
} from "../../types/type";

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
    },
  });
};

export const getLoginAccessTokenData = async (code: string) => {
  return axios<LoginAccessTokenData>({
    method: "POST",
    url: SPOTIFY_ACCESS_TOKEN_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
    },
    data: {
      code: code,
      redirect_uri: SPOTIFY_ACCESS_TOKEN_URL + "/api/callback",
      grant_type: "client_credentials",
    },
  });
};

export const getRefreshAccessToken = async (refreshToken: string) => {
  return axios<RefreshAccessTokenData>({
    method: "POST",
    url: SPOTIFY_ACCESS_TOKEN_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
    },
    data: {
      grant_type: "refresh_token",
      refreshToken,
    },
  });
};

const tokenAPI = axios.create({
  baseURL: SPOTIFY_ACCESS_TOKEN_URL,
});

tokenAPI.interceptors.request.use(
  async (request) => {
    if (typeof window !== "undefined") {
      try {
        const access_token = getCookie("access_token");
        const refresh_token = getCookie("refresh_token");
      }
    }
  }
)