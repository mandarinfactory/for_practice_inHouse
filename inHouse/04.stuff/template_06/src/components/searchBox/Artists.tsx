import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  detailClickedInfosState,
  isDetailClickedState,
  musicValState,
} from "../../recoil/recoil/atom";
import { searchArtistFinderState } from "../../recoil/recoil/selector/searchSelectors";
import { useNavigate } from "react-router-dom";

const Artists: React.FC = () => {
  const navigate = useNavigate();
  const setIsClicked = useSetRecoilState(isDetailClickedState);
  const setDetailInfos = useSetRecoilState(detailClickedInfosState);
  const musicVal = useRecoilValue(musicValState);
  const artistData = useRecoilValue(searchArtistFinderState(musicVal));

  return (
    <>
      <h1 className="w-full h-auto text-3xl">아티스트</h1>
      <div className="w-full flex justify-start mt-5">
        {artistData ? (
          <div
            onClick={() => {
              const filteredArtistData = artistData.artists.items[0];
              setIsClicked(true);
              navigate("/DetailTracks");
              setDetailInfos(filteredArtistData);
            }}
          >
            <img
              src={artistData?.artists?.items[0]?.images[2]?.url}
              alt="artist"
              className="rounded-full shadow-xl hover:scale-105 duration-300 cursor-pointer"
            />
            <h1 className="mt-3 text-xl text-center">
              {artistData?.artists?.items[0]?.name}
            </h1>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Artists;
