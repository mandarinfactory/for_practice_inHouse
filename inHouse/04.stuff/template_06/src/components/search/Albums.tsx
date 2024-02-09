import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  accessTokenState,
  musicValState,
  searchAlbumHandler,
} from "../../state";

const Albums: React.FC = () => {
  const accessToken = useRecoilValue(accessTokenState);
  const musicVal = useRecoilValue(musicValState);

  const [albumData, setAlbumData] = useState("");
  if (musicVal && accessToken) {
    const albumResultData = searchAlbumHandler(accessToken, musicVal);
    albumResultData.then((response) => setAlbumData(response));
  }

  return (
    <div className="flex my-3">
      {albumData ? (
        albumData.map((v: any, i:number) => (
          <div className="flex flex-wrap" key={i}>
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
      )}
    </div>
  );
};

export default Albums;
