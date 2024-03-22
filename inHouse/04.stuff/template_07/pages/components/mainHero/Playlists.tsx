import React from "react";
import Link from "next/link";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";

import { searchBrowseState } from "../../recoil/selector/searchSelectors";
import {
  isClickedState,
  selectedMusicValState,
  detailClickedPlaylistsInfoState,
} from "../../recoil/atom";
import { PlaylistsDataType } from "../../types/AlbumTypes";

const Playlists: React.FC = () => {
  const playlistsLoadable = useRecoilValueLoadable(searchBrowseState(10));
  const playlistsData = (
    playlistsLoadable.state === "hasValue" && playlistsLoadable.contents
      ? playlistsLoadable.contents
      : undefined
  ) as PlaylistsDataType;
  const setIsClicked = useSetRecoilState(isClickedState);
  const setSelectedVal = useSetRecoilState(selectedMusicValState);
  const setClickedDetailInfos = useSetRecoilState(
    detailClickedPlaylistsInfoState
  );

  return (
    <div className="sm:w-[50%] flex flex-col">
      <h1 className="my-1 lg:text-3xl md:text-2xl sm:text-xl">플레이리스트</h1>
      <div className="flex sm:flex-col flex-wrap justify-center">
        {playlistsData ? (
          playlistsData.playlists?.items.map((v, i: number) => (
            <Link
              href="components/DetailPlaylists"
              key={i}
              className="w-[18%] sm:m-1 sm:w-auto flex flex-col items-center cursor-pointer"
              onClick={() => {
                setIsClicked(true);
                setSelectedVal(v.id);
                setClickedDetailInfos(v);
              }}
            >
              <div className="w-[80%] sm:flex sm:justify-start cursor-pointer">
                <img
                  src={v.images[0].url}
                  alt="playlists"
                  className="sm:w-[35%] my-1 sm:mr-1 rounded-lg object-cover hover:scale-105 duration-300 shadow-xl"
                />
                <h1 className="lg:text-lg md:text-base sm:text-xs">{v.name}</h1>
                <p className="w-[60%] truncate lg:text-lg md:text-sm sm:hidden">
                  {v.description}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Playlists;
