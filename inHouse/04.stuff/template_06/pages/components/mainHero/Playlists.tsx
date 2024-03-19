import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import Link from "next/link";
import { searchBrowseState } from "@/recoil/selector/searchSelectors";
import {
  isClickedState,
  selectedMusicValState,
  detailClickedPlaylistsInfoState,
} from "@/recoil/atom";

const Playlists: React.FC = () => {
  const playlistsData = useRecoilValue(searchBrowseState(10));
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
          playlistsData.playlists?.items.map((v: any, i: number) => (
            <Link
              href="components/DetailPlaylists"
              key={i}
              className="w-[18%] sm:w-auto m-3 flex flex-col items-center cursor-pointer"
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
                  className="sm:w-[30%] my-1 sm:mr-1 rounded-lg object-cover hover:scale-105 duration-300 shadow-xl"
                />
                <h1 className="lg:text-lg md:text-base sm:text-sm">{v.name}</h1>
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
