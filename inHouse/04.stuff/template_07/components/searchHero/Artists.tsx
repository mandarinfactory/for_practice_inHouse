import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";

import { detailClickedInfosState, isClickedState, musicValState } from "@/recoil/atom";
import { searchArtistFinderState } from "@/recoil/selector/searchSelectors";

const Artists:React.FC = () => {
  const router = useRouter();
  const setIsClicked = useSetRecoilState(isClickedState);
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
              router.push("/DetailTracks");
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
