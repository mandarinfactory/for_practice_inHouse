import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useQuery } from "react-query";

import { accessTokenState, musicValState } from "../recoil/atom";
import { getAccessTokenData } from "../recoil/selector/store";
import SearchBox from "./SearchBox";
import MainBox from "./MainBox";

const Hero: React.FC = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
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

  let screen;
  if (!musicVal) {
    screen = <MainBox />
  } else {
    screen = <SearchBox />
  }

  return (
    <div className="w-[95%] h-max-screen mr-7 my-7 p-5 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-3xl shadow-2xl">
      {screen}
    </div>
  );
};

export default Hero;
