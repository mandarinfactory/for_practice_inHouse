"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { detailTrackState, isClickedState } from "../recoil/atom";
import { searchBrowseState } from "../recoil/selector/searchSelectors";

const NewReleases = () => {
  const router = useRouter();
  const newReleasesData = useRecoilValue(searchBrowseState(25));
  const setIsClicked = useSetRecoilState(isClickedState);
  const setClickedAlbum = useSetRecoilState(detailTrackState);

  return (
    <div className="w-full h-full flex justify-center">
        <div className="w-[95%] h-max-screen mr-7 my-7 p-5 bg-gradient-to-r from-red-500 to-sky-500 rounded-3xl shadow-2xl">
          <h1 className="my-1 text-3xl">최신앨범</h1>
          <div className="flex flex-wrap">
            {newReleasesData.albums.items.map((v: any, i: number) => (
              <div
                className="flex flex-col justify-center items-center my-1 cursor-pointer"
                key={i}
                onClick={() => {
                  setIsClicked(true);
                  router.push("/DetailAlbumTracks");
                  setClickedAlbum(v);
                }}
              >
                <img
                  className="w-[70%] rounded-xl hover:scale-95 duration-150"
                  src={v.images[0].url}
                  alt="앨범아트"
                />
                <div className="mt-1 text-lg flex flex-col justify-start">
                  <h1>{v.name}</h1>
                  <h1>{v.artists[0].name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default NewReleases;
