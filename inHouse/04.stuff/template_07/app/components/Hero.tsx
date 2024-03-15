"use client"

import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { accessTokenState, musicValState } from "../recoil/atom";
import { getAccessTokenData } from "../api/token";
import MainHero from "./MainHero";

const Hero: React.FC = () => {

  const setAccessToken = useSetRecoilState(accessTokenState);
  const musicVal = useRecoilValue(musicValState);
  
  useEffect(() => {
    const getSaveAccessToken = localStorage.getItem("accessToken");
    const filteredAccessToken = async () => {
      try {
        const data = await getAccessTokenData();
        
        console.log(data);
        
        localStorage.setItem("accessToken", data.data.access_token);
      } catch (error) {
        console.error("데이터 에러:", error);
      }
    };

    filteredAccessToken();

    if (getSaveAccessToken) {
      setAccessToken(getSaveAccessToken);
    }
  }, []);

  return (
    <div className="w-[95%] h-max-screen mr-7 my-7 p-5 bg-gradient-to-r from-red-500 to-sky-500 rounded-3xl shadow-2xl">
      <MainHero />
    </div>
  );
};

export default Hero;