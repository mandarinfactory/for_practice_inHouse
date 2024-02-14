import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  accessTokenState,
  musicValState,
  searchArtistFinder,
} from "../../recoil";

const Artists: React.FC = () => {
  const accessToken = useRecoilValue(accessTokenState);
  const musicVal = useRecoilValue(musicValState);
  const [artistData, setArtistData] = useState("");
  if (musicVal && accessToken) {
    const artistResultData = searchArtistFinder(accessToken, musicVal);
    artistResultData.then((response) => setArtistData(response[0]));    
  }

  return (
    <>
      <h1 className="w-full h-auto text-3xl">아티스트</h1>
      <div className="w-full flex justify-start mt-5">
        {artistData ? (
          <div>
            <img src={artistData.images[2].url} alt="artist" className="rounded-full shadow-xl hover:scale-105 duration-300 cursor-pointer" />
            <h1 className="mt-3 text-xl text-center">{artistData.name}</h1>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Artists;
