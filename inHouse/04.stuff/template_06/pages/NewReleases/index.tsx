"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";

import Sidebar from "../components/Sidebar";
import { detailTrackState, isClickedState } from "../../recoil/atom";
import { searchBrowseState } from "../../recoil/selector/searchSelectors";
import { NewReleasesDataType } from "@/types/AlbumTypes";

const NewReleases = () => {
  const router = useRouter();
  const newReleasesData = useRecoilValue(searchBrowseState(25)) as NewReleasesDataType;
  const setIsClicked = useSetRecoilState(isClickedState);
  const setClickedAlbum = useSetRecoilState(detailTrackState);

  return (
    <Sidebar>
      <div className="w-full h-max-screen">
        <h1 className="my-1 text-3xl mb-7">최신앨범</h1>
        <div className="flex flex-wrap justify-center">
          {newReleasesData?.albums?.items?.map((v, i: number) => (
            <div
              className="h-full flex flex-col md:flex-wrap justify-center items-center cursor-pointer"
              key={i}
              onClick={() => {
                setIsClicked(true);
                router.replace("components/DetailAlbumTracks");
                setClickedAlbum(v);
              }}
            >
              <img
                className=" w-[70%] rounded-xl hover:scale-95 duration-150"
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
    </Sidebar>
  );
};

export default NewReleases;
