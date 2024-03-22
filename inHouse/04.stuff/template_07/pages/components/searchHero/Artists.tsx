import React from "react";
import Link from "next/link";
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";

import {
  detailClickedInfosState,
  isClickedState,
  musicValState,
} from "../../recoil/atom";
import { ArtistsDataType } from "../../types/AlbumTypes";
import { searchArtistFinderState } from "../../recoil/selector/searchSelectors";

const Artists: React.FC = () => {
  const setIsClicked = useSetRecoilState(isClickedState);
  const setDetailInfos = useSetRecoilState(detailClickedInfosState);
  const musicVal = useRecoilValue(musicValState);
  const artistDataLoadable = useRecoilValueLoadable(searchArtistFinderState(musicVal));

  const artistData = (
    artistDataLoadable.state === "hasValue" && artistDataLoadable.contents
      ? artistDataLoadable.contents
      : undefined
  ) as ArtistsDataType;

  return (
    <div className="w-full h-full">
      <h1 className="w-full h-auto text-3xl sm:text-center">아티스트</h1>
      <div className="w-full flex justify-start sm:justify-center mt-5">
        {artistData ? (
          <Link
            href="components/DetailTracks"
            onClick={() => {
              const filteredArtistData = artistData.artists.items[0];
              setIsClicked(true);
              setDetailInfos(filteredArtistData);
            }}
          >
            <img
              src={artistData?.artists.items[0].images[2].url}
              alt="artist"
              className="rounded-full shadow-xl hover:scale-105 duration-300 cursor-pointer"
            />
            <h1 className="mt-3 text-xl text-center">
              {artistData?.artists.items[0].name}
            </h1>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Artists;
