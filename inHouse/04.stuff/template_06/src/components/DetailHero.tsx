import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  detailClickedInfoState,
  detailTrackFinderState,
  detailTrackState,
  isClickedState,
} from "../state";

const DetailHero: React.FC = () => {
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);
  const trackData = useRecoilValue(detailTrackState);
  const clickedDetailInfos = useRecoilValue(detailClickedInfoState);
  const [load, setLoad] = useState(true);
  
  useEffect(() => {
    if (isClicked) {
      const testRecoilState = useRecoilValue(detailTrackFinderState);
    }
  },[isClicked])

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
            {/* {load ? (
              <h1>로딩중입니다.....</h1>
            ) : (
              trackData.items?.map((v: any, i: number) => (
                <div className="my-2 bg-yellow-200" key={i}>
                  <h1>{v?.track?.name}</h1>
                  <h1>{v?.track?.artists[0]?.name}</h1>
                </div>
              ))
            )} */}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailHero;
