import React, { useEffect } from "react";
import { useQuery } from "react-query";

import { accessTokenState, getAccessTokenData, musicValState, searchMusicHandler } from "../state";
import { useRecoilState } from "recoil";

const Hero: React.FC = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [musicVal, setMusicVal] = useRecoilState(musicValState);
  const { data, isLoading, isError } = useQuery("accessTokenData", getAccessTokenData);
  
  useEffect(() => {
    if (isLoading) return data;
    if (isError) return undefined;
    setAccessToken(data);
    if (musicVal && accessToken) {
    searchMusicHandler(accessToken, musicVal)
    }
    
  }, [data, isLoading, isError, musicVal]);

  return (
    <div className="w-[95%] h-[900px] mr-7 my-7 p-5 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-3xl shadow-2xl">
      <div className="w-full h-full flex flex-col flex-wrap justify-center">
        <div>
          <h1 className="text-3xl">노래</h1>
        </div>
        <div>
          <h1 className="text-3xl">앨범</h1>
        </div>
        <div>
          <h1 className="text-3xl">아티스트</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
