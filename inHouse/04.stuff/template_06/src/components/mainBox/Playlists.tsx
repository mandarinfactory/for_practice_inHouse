import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  accessTokenState,
  detailClickedInfoState,
  isClickedState,
  selectedMusicValState,
} from "../../recoil";
import { browseHandler } from "../../recoil";
import { detailTrackHandlerState } from "../../recoil/store";

const Playlists: React.FC = () => {
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);
  const [selectedVal, setSelectedVal] = useRecoilState(selectedMusicValState);
  const [clickedDetailInfos, setClickedDetailInfos] = useRecoilState(
    detailClickedInfoState
  );
  const accessToken = useRecoilValue<any>(accessTokenState);
  const [playlistsData, setPlaylistsData] = useState<any>("");

  useEffect(() => {
    if (accessToken) {
      const playlistsResultData = browseHandler(
        accessToken,
        "featured-playlists"
      );
      playlistsResultData.then((data) => setPlaylistsData(data));
    }
    const detailTrackFinder = useRecoilValue(
      detailTrackHandlerState(selectedVal)
    );
  }, [accessToken]);

  return (
    <>
      <h1 className="my-1 text-3xl">플레이리스트</h1>
      <div className="flex flex-wrap justify-center">
        {playlistsData ? (
          playlistsData.playlists.items.map((v: any, i: number) => (
            <div
              key={i}
              className="flex flex-col items-center w-[18%] h-auto cursor-pointer"
              onClick={() => {
                setIsClicked(true);
                setSelectedVal(v.id);
                setClickedDetailInfos(v);
              }}
            >
              <img
                src={v.images[0].url}
                alt="playlists"
                className="my-1 w-[60%] h-auto rounded-lg hover:scale-105 duration-300 shadow-xl"
              />
              <h1>{v.name}</h1>
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
