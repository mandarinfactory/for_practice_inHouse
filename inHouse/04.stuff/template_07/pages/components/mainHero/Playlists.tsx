import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import Link from "next/link";
import { searchBrowseState } from "@/recoil/selector/searchSelectors";
import { isClickedState, selectedMusicValState, detailClickedPlaylistsInfoState } from "@/recoil/atom";

const Playlists: React.FC = () => {
  const playlistsData = useRecoilValue(searchBrowseState(10));
  const setIsClicked = useSetRecoilState(isClickedState);
  const setSelectedVal = useSetRecoilState(selectedMusicValState);
  const setClickedDetailInfos = useSetRecoilState(
    detailClickedPlaylistsInfoState
  );

  return (
    <>
      <h1 className="my-1 text-3xl">플레이리스트</h1>
      <div className="flex flex-wrap justify-center">
        {playlistsData ? (
          playlistsData.playlists?.items.map((v: any, i: number) => (
            <Link
              href="components/DetailPlaylists"
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
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Playlists;
