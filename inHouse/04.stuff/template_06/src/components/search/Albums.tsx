import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  accessTokenState,
  musicValState,
  searchMusicHandler,
} from "../../state";

const Albums: React.FC = () => {
  const accessToken = useRecoilValue(accessTokenState);
  const musicVal = useRecoilValue(musicValState);

  const [albumData, setAlbumData] = useState("");
  if (musicVal && accessToken) {
    const albumResultData = searchMusicHandler(accessToken, musicVal);
    albumResultData.then((response) => setAlbumData(response));
  }

  return (
    <>
      {albumData ? (
        albumData?.map((v) => (
          <div className="flex flex-wrap">
            <img src={v.images[1].url} alt="앨범아트" className="w-[300px]"/>
            <div className="flex flex-col">
              <h1>{v.artists[0].name}</h1>
              <h1>{v.name}</h1>
              <p>{v.release_date}</p>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default Albums;
