"use client";

import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  searchDescriptionState,
  searchSongFinderState,
} from "@/recoil/selector/searchSelectors";
import Sidebar from "../Sidebar";
import { detailClickedInfosState, isClickedState, confirmedURIState, authenticationTokenState } from "@/recoil/atom";
import { DetailInfosDataType} from "@/types/AlbumTypes";

const DetailTracks: React.FC = () => {
  const isDetailClicked = useRecoilValue(isClickedState);
  const detailInfosData = useRecoilValue(detailClickedInfosState) as DetailInfosDataType & React.ReactNode;
  const artistData = detailInfosData.name;
  const detailSongsData = useRecoilValue(searchSongFinderState(artistData));
  const detailDescData = useRecoilValue(searchDescriptionState(artistData));
  const setConfirmedURI = useSetRecoilState(confirmedURIState);
  const savedAuthToken:string = useRecoilValue(authenticationTokenState);  

  return (
    <Sidebar>
      <div className="w-full h-full flex justify-center">
        {isDetailClicked ? (
          <div className="w-[95%] h-max-screen">
            <div className="w-full h-auto flex">
              <img
                className="w-[30%] h-auto rounded-xl object-cover shadow-xl"
                src={detailInfosData?.images[0].url}
                alt=""
              />
              <div className="flex flex-col justify-between">
                <h1 className="ml-5 lg:text-[4rem] md:text-4xl sm:text-3xl">{detailInfosData?.name}</h1>
                <div>
                  {detailInfosData.genres ? (
                    <>
                      <h1 className="lg:w-[40%] md:w-[45%] sm:hidden ml-5 mb-2 p-1 lg:text-[1.2rem] md:text-lg sm:text-lg text-center rounded-2xl bg-slate-50 shadow-lg">
                        소개 및 장르
                      </h1>
                      <h1 className="ml-5 lg:text-[1.8rem] md:text-lg sm:hidden">
                        {detailDescData?.pages[0].description}
                      </h1>
                      <h1 className="truncate ml-5 flex lg:text-base md:hidden sm:hidden">
                        {detailInfosData.genres.map(
                          (genre: string, i: number) => (
                            <p className="mr-3" key={i}>
                              {genre}
                            </p>
                          )
                        )}
                      </h1>
                    </>
                  ) : (
                    detailInfosData
                  )}
                </div>
              </div>
            </div>
            <div>
              {detailSongsData?.items.map((v: any, i: number) => (
                <div
                  className="my-3 p-2 flex justify-between items-center bg-white bg-opacity-30 hover:bg-opacity-50 rounded-xl cursor-pointer duration-150"
                  key={i}
                  onClick={() => {
                    setConfirmedURI(v.uri);
                    savedAuthToken ? <></> : alert("로그인 후 재생해주시기 바랍니다!");
                  }}
                >
                  <img
                    className="w-[60px] h-auto ml-3 object-cover rounded-md"
                    src={v.album.images[1].url}
                    alt=""
                  />
                  <div className="w-[80%] h-auto mx-auto ml-1 flex justify-between items-center truncate">
                    <h1 className="lg:text-xl md:text-lg sm:text-base truncate">{v.name}</h1>
                    <h1 className="lg:text-lg md:text-base sm:text-sm truncate">{v.artists[0].name}</h1>
                    <h1 className="lg:text-lg md:text-base sm:text-sm truncate">{v.album.name}</h1>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 mr-10 opacity-60"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Sidebar>
  );
};

export default DetailTracks;
