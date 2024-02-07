import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";

import { accessTokenState, getAccessTokenData, musicValState } from "../state";
import SearchBox from "./SearchBox";
import MainBox from "./MainBox";

const Hero: React.FC = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [musicVal] = useRecoilState(musicValState);
  const { data, isLoading, isError } = useQuery(
    "accessTokenData",
    getAccessTokenData
  );

  useEffect(() => {
    if (isLoading) return data;
    if (isError) return undefined;
    setAccessToken(data);
  }, [data, isLoading, isError, musicVal]);

  return (
    <div className="w-[95%] h-[900px] mr-7 my-7 p-5 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-3xl shadow-2xl">
      <MainBox />
      <SearchBox />
    </div>
  );
};

export default Hero;
