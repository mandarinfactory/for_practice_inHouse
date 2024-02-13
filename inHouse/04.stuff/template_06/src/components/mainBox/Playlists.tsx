import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  accessTokenState,
  detailClickedInfoState,
  detailTrackFinder,
  detailTrackState,
  isClickedState,
  selectedMusicValState,
} from "../../state";
import { browseHandler } from "../../state";

const Playlists: React.FC = () => {
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);
  const [trackData, setTrackData] = useRecoilState(detailTrackState);
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
  }, [accessToken]);

  const clickedPlaylist = async (token: string, value: any) => {
    if (isClicked) {
      detailTrackFinder(token, value).then((data) => {
        setTrackData(data);
      });
    }
  };

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
                clickedPlaylist(accessToken, v.id);
                setSelectedVal(v.id);
                setClickedDetailInfos(v);
                console.log(v.id)
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
