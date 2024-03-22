"use client";

import React, { useEffect } from "react";
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil";

import { getAccessTokenData } from "../api/token";
import MainHero from "./MainHero";
import SearchHero from "./SearchHero";
import { accessTokenState, musicValState } from "../recoil/atom";

const Hero: React.FC = () => {
  const setAccessToken:SetterOrUpdater<string> = useSetRecoilState(accessTokenState);
  const musicVal = useRecoilValue(musicValState);

  useEffect(() => {
    const getSaveAccessToken = localStorage.getItem("accessToken");
    const filteredAccessToken = async () => {
      try {
        const data = await getAccessTokenData();
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

  return <>{!musicVal ? <MainHero /> : <SearchHero />}</>;
};

export default Hero;
