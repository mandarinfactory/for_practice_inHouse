import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  detailClickedInfoState,
  isClickedState,
  selectedMusicValState,
} from "../../recoil/atom";

import { searchBrowseState } from "../../recoil/selector/searchStore";

const Playlists: React.FC = () => {
  const findPlaylistsData = useRecoilValue(searchBrowseState(10));
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);
  const [selectedVal, setSelectedVal] = useRecoilState(selectedMusicValState);
  const [clickedDetailInfos, setClickedDetailInfos] = useRecoilState(
    detailClickedInfoState
  );

  return (
    <>
      <h1 className="my-1 text-3xl">플레이리스트</h1>
      <div className="flex flex-wrap justify-center">
        {findPlaylistsData ? (
          findPlaylistsData.playlists.items.map((v: any, i: number) => (
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
