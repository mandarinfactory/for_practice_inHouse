import axios from "axios";

import { getCookie, setCookie } from "../../utils/cookie";
import { getAccessTokenData, getLoginAccessTokenData, getRefreshAccessTokenData } from "./token";
import { SPOTIFY_URL } from "../../utils/constants";

const spotifyAPI = axios.create({
  baseURL: SPOTIFY_URL,
});

spotifyAPI.interceptors.request.use(
  async (req) => {
    if (typeof window !== "undefined") {
      try {
        const access_token = getCookie("access_token");
        const refresh_token = getCookie("refresh_token");
        console.log(access_token, refresh_token);
        

        // access_token있으면 그대로 사용
        if (typeof access_token === "string" && access_token !== "") {
          req.headers["Authorization"] = `Bearer ${access_token}`;
          return req;
        }

        // refresh_token는 있지만 access_token 없을 때 새로운 토큰 발급
        if (typeof refresh_token === "string" && refresh_token !== "") {
          const { data } = await getRefreshAccessTokenData(refresh_token);
          req.headers["Authorization"] = `Bearer ${data.access_token}`;
          setCookie("access_token", data.access_token, {
            maxAge: data.expires_in,
          });

          return req;
        }

        // access_token과 refresh_token 둘 다 없으면 client credential 방식의 access_token 발급
        const { data } = await getAccessTokenData();
        req.headers["Authorization"] = `Bearer ${data.access_token}`;
        setCookie("access_token", data.access_token, {
          maxAge: data.expires_in,
        });
      } catch (error) {
        return req;
      }
    }

    return req;
  },
  (error) => Promise.reject(error)
);

spotifyAPI.interceptors.response.use(
    (res) => res,
    async (error) => {
      const { config, response } = error;
  
      if (response?.status === 401 && !config._retry) {
        try {
          config._retry = true;
          const refresh_token = getCookie('refresh_token');
          
          // refresh_token 있으면 access_token 재발급 후 다시 요청
          if (typeof refresh_token === 'string' && refresh_token !== '') {
            const { data } = await getRefreshAccessTokenData(refresh_token);
            spotifyAPI.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
            setCookie('access_token', data.access_token, {
              maxAge: data.expires_in,
            });
  
            return spotifyAPI(config);
          }
          
          // refresh_token 없으면 client credential 방식의 access_token 발급 후 다시 요청
          const { data } = await getLoginAccessTokenData("");
          spotifyAPI.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
          setCookie('access_token', data.access_token, {
            maxAge: data.expires_in,
          });
  
          return spotifyAPI(config);
        } catch (error) {
          return Promise.reject(error);
        }
      }
  
      return Promise.reject(error);
    }
  );