import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useQuery } from "react-query";

import { accessTokenState, musicValState } from "../api/recoil/atom";
import { getAccessTokenData } from "../api/login/token";
import SearchBox from "./hero/SearchBox";
import MainBox from "./hero/MainBox";

const Hero: React.FC = () => {
  const [accessToken, setAccessToken] = useRecoilState<any>(accessTokenState);

  const saveAccessToken = localStorage.setItem("accessToken", accessToken?.data?.access_token);
  const getSaveAccessToken = localStorage.getItem("accessToken");

  const musicVal = useRecoilValue(musicValState);
  const { data, isLoading, isError } = useQuery(
    "accessTokenData",
    getAccessTokenData
  );

  useEffect(() => {
    if (isLoading) return data;
    if (isError) return undefined;
    setAccessToken(data);
  }, [data, isLoading, isError, accessToken]); // Spotify API token 가져오는걸 react-query를 사용함

  return (
    <div className="w-[95%] h-max-screen mr-7 my-7 p-5 bg-gradient-to-r from-red-500 to-sky-500 rounded-3xl shadow-2xl">
      {!musicVal ? <MainBox /> : <SearchBox />}
    </div>
  );
};

export default Hero;
