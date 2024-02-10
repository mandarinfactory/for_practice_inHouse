import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { accessTokenState } from "../../state";
import { browseHandler } from "../../state";

const Playlists: React.FC = () => {
  const accessToken = useRecoilValue(accessTokenState);
  const [playlistsData, setPlaylistsData] = useState<any>();

  if (accessToken) {
    const playlistsResultData = browseHandler(
      accessToken,
      "featured-playlists"
    );
    playlistsResultData.then((response) => setPlaylistsData(response));
  }
  return (
    <>
      <h1 className="my-1 text-3xl">플레이리스트</h1>
      <div className="flex flex-wrap justify-center">
        {playlistsData ? (
          playlistsData.playlists.items.map((v: any) => (
            <div className="flex flex-col items-center w-[18%] h-auto cursor-pointer">
              <img
                src={v.images[0].url}
                alt="playlists"
                className="my-1 w-[60%] h-auto rounded-lg hover:scale-105 duration-300 shadow-xl"
              />
              <h1 >{v.name}</h1>
              <p className="w-[60%] truncate">{v.description}</p>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Playlists;
