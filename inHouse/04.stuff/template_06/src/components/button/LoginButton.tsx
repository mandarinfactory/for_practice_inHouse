import React from "react";

import { BASE_URL } from "../../utils/constants";
import { generateRandomString } from "../../utils/generateRandomString";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

const LoginButton: React.FC = () => {
  const state = generateRandomString(16);
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";
    
  const loginRedirectHandler = async () => {
    const loginParams = {
      response_type: "code",
      client_id: CLIENT_ID,
      scope: scope,
      redirect_uri: `${BASE_URL}`,
      state: state,
    };

    // 객체를 URL 쿼리 문자열로 변환하는 함수
    const paramsToQueryString = (params: object) =>
      Object.entries(params)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

    const queryString = paramsToQueryString(loginParams);
    const spotifyAuthorizeURL = `https://accounts.spotify.com/authorize?${queryString}`;

    try {
      // 비동기적으로 URL로 이동
      window.location.assign(spotifyAuthorizeURL);
    } catch (error) {
      console.error("Error redirecting to Spotify authorize URL:", error);
    }
  };

  return (
    <div className="w-auto">
      <button onClick={() => loginRedirectHandler}>
        <h1 className="p-2 mb-3 text-2xl text-white bg-gradient-to-r from-red-500 to-sky-500 rounded-2xl cursor-pointer">
          로그인
        </h1>
      </button>
    </div>
  );
};

export default LoginButton;
