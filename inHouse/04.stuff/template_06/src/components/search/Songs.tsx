import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  accessTokenState,
  musicValState,
  searchMusicHandler,
} from "../../state";

const Songs: React.FC = () => {
  const accessToken = useRecoilValue(accessTokenState);
  const musicVal = useRecoilValue(musicValState);

  const [songData, setSongData] = useState("");
  if (musicVal && accessToken) {
    const albumResultData = searchMusicHandler(accessToken, musicVal, "tracks");
    albumResultData.then((response) => setSongData(response));
  }

  return (
    <div className="flex my-3">
      {/* {songData ? (
        songData.map((v: any) => (
          <div className="flex flex-wrap">
            <img src={v.images[1].url} alt="앨범아트" className="w-[120px]" />
            <div className="flex flex-col">
              <h1>{v.artists[0].name}</h1>
              <h1 className="overflow-hidden">{v.name}</h1>
              <p>{v.release_date}</p>
            </div>
          </div>
        ))
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Songs;
