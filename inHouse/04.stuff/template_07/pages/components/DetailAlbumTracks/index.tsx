"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

import Sidebar from "../Sidebar";
import {
  detailTrackState,
  isClickedState,
  confirmedURIState,
  authenticationTokenState,
} from "../../../recoil/atom";
import { searchDetailTrackState } from "../../../recoil/selector/searchSelectors";
import {
  AlbumDataType,
  DetailAlbumTrackDataType,
} from "../../../types/AlbumTypes";

const DetailAlbumTracks: React.FC = () => {
  const isClicked = useRecoilValue(isClickedState);
  const albumData = useRecoilValue(detailTrackState) as AlbumDataType;
  const detailAlbumTrackLoadable = useRecoilValueLoadable(
    searchDetailTrackState(albumData.id)
  );
  const detailAlbumTrackData = (
    detailAlbumTrackLoadable.state === "hasValue" &&
    detailAlbumTrackLoadable.contents
      ? detailAlbumTrackLoadable.contents
      : undefined
  ) as DetailAlbumTrackDataType;
  const setConfirmedURI = useSetRecoilState(confirmedURIState);
  const savedAuthToken: string = useRecoilValue(authenticationTokenState);

  useEffect(() => {
    if (!detailAlbumTrackData || detailAlbumTrackLoadable.state !== "hasValue") {
      detailAlbumTrackLoadable
    }
  },[detailAlbumTrackData])

  return (
    <Sidebar>
      {isClicked && detailAlbumTrackData ? (
        <div className="w-full h-full flex justify-center">
          <div className="w-[95%] h-max-screen">
            <div className="flex">
              <Image
                className="w-[400px] h-auto rounded-xl shadow-lg"
                src={`${albumData.images[0].url}`}
                width={500}
                height={500}
                alt=""
              />
              <div className="flex flex-col justify-end ml-3 text-3xl">
                <h1 className="lg:text-3xl md:text-2xl sm:hidden">
                  {albumData.name}
                </h1>
                <div className="flex my-3">
                  {albumData.artists.map((v, i: number) => (
                    <h1
                      className="mr-3 lg:text-3xl md:text-2xl sm:hidden"
                      key={i}
                    >
                      {v.name}
                    </h1>
                  ))}
                </div>
                <h1 className="lg:text-3xl md:text-2xl sm:hidden">
                  {albumData.release_date}
                </h1>
              </div>
            </div>
            <div>
              {detailAlbumTrackData.items.map((v, i: number) => (
                <div
                  className="my-3 p-2 flex justify-between items-center bg-white bg-opacity-30 hover:bg-opacity-50 rounded-xl cursor-pointer duration-150"
                  key={i}
                  onClick={() => {
                    setConfirmedURI(v?.uri);
                    savedAuthToken ? (
                      <></>
                    ) : (
                      alert("로그인 후 재생해주시기 바랍니다!")
                    );
                  }}
                >
                  <Image
                    className="w-[60px] h-auto ml-3 object-cover rounded-md"
                    src={`${albumData.images[1].url}`}
                    width={100}
                    height={100}
                    alt=""
                  />
                  <div className="w-[80%] h-auto mx-auto ml-1 flex justify-between items-center truncate">
                    <h1 className="lg:text-xl md:text-lg sm:text-base truncate">
                      {v.name}
                    </h1>
                    <h1 className="lg:text-lg md:text-base sm:text-sm truncate">
                      {v.artists[0].name}
                    </h1>
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
        </div>
      ) : (
        <></>
      )}
    </Sidebar>
  );
};

export default DetailAlbumTracks;
