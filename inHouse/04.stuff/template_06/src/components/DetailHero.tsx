import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  detailClickedInfoState,
  isClickedState,
} from "../recoil";
import { detailTrackFinderState } from "../recoil/store";

const DetailHero: React.FC = () => {
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);
  const clickedDetailInfos = useRecoilValue(detailClickedInfoState);

  return (
    <div className="w-[95%] h-full flex flex-col justify-center h-max-screen mr-7 my-7 p-5 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-3xl shadow-2xl">
      {isClicked ? (
        <>
          <div className="">
            <div className="w-full h-auto bg">
              <img
                className="w-auto h-auto"
                src={clickedDetailInfos.images[0].url}
                alt=""
              />
            </div>
            <h1>{clickedDetailInfos.name}</h1>
            <h1>{clickedDetailInfos.description}</h1>
          </div>
          <div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailHero;
