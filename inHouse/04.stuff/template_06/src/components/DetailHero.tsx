import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  detailClickedInfoState,
  isClickedState,
  selectedMusicValState,
} from "../recoil/atom";
import { detailTrackHandlerState } from "../recoil/selector/store";

const DetailHero: React.FC = () => {
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);
  const [selectedVal, setSelectedVal] = useRecoilState(selectedMusicValState);
  const clickedDetailInfos = useRecoilValue(detailClickedInfoState);
  const detailTracksData = useRecoilValue(
    detailTrackHandlerState(selectedVal || "")
  );

  useEffect(() => {
    if (selectedVal) {
      detailTracksData;
    }
  }, [isClicked, selectedVal]);

  return (
    <div className="w-[95%] h-full flex flex-col justify-center h-max-screen mr-7 my-7 p-5 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-3xl shadow-2xl">
      {isClicked ? (
        <>
          <div className="flex mb-5">
            <div className="w-auto h-auto">
              <img
                className="rounded-2xl shadow-xl"
                src={clickedDetailInfos.images[0].url}
                alt=""
              />
            </div>
            <div className="ml-5 flex flex-col justify-end items-start">
              <h1 className="text-5xl font-bold">{clickedDetailInfos.name}</h1>
              <h1 className="mt-1 text-2xl font-bold">
                {clickedDetailInfos.description}
              </h1>
            </div>
          </div>
          <div>
            {detailTracksData.items.map((value: any, index: number) => (
              <div
                className="my-3 p-2 flex justify-between items-center bg-white bg-opacity-30 hover:bg-opacity-50 rounded-xl cursor-pointer duration-150"
                key={index}
              >
                <div className="w-full flex">
                  <img className="w-[60px] h-auto ml-3 object-cover rounded-md" src={value.track.album.images[1].url} alt="" />
                  <div className="w-[80%] h-auto mx-auto flex justify-between items-center truncate">
                    <h1 className="text-xl">{value.track.name}</h1>
                    <h1 className="text-lg">{value.track.album.artists[0].name}</h1>
                    <h1 className="text-lg">{value.track.album.name}</h1>
                  </div>
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailHero;
