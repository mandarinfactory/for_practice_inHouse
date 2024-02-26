import React from "react";
import { useRecoilValue } from "recoil";

import Sidebar from "./Sidebar";
import { searchSongFinderState } from "../recoil/selector/searchStore";
import { detailClickedInfosState, isDetailClickedState } from "../recoil/atom";

const DetailHero: React.FC = () => {
  const isClicked = useRecoilValue(isDetailClickedState);
  const detailInfosData = useRecoilValue<any>(detailClickedInfosState);
  const artistData = detailInfosData.name;
  const detailSongsData = useRecoilValue(searchSongFinderState(artistData));

  return (
    <div className="w-full h-full flex justify-center">
      {isClicked ? (
        <>
          <Sidebar />
          <div className="w-[95%] h-max-screen mr-7 my-7 p-5 bg-gradient-to-r from-red-500 to-sky-500 rounded-3xl shadow-2xl">
            <div className="w-full h-auto flex">
              <img
                className="w-[400px] h-auto rounded-xl object-cover shadow-xl"
                src={detailInfosData?.images[0].url}
                alt=""
              />
              <h1 className="ml-5 text-[4rem]">{detailInfosData?.name}</h1>
            </div>
            <div>
              {detailSongsData?.items.map((v: object) => (
                <div className="my-3 p-2 flex justify-between items-center bg-white bg-opacity-30 hover:bg-opacity-50 rounded-xl cursor-pointer duration-150">
                  <img
                    className="w-[60px] h-auto ml-3 object-cover rounded-md"
                    src={v.album.images[1].url}
                    alt=""
                  />
                  <div className="w-[80%] h-auto mx-auto flex justify-between items-center truncate">
                    <h1 className="text-xl">{v.name}</h1>
                    <h1 className="text-lg">{v.artists[0].name}</h1>
                    <h1 className="text-lg">{v.album.name}</h1>
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailHero;
