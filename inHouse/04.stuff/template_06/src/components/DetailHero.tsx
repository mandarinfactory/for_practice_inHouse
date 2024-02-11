import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { detailTrackState, isClickedState } from "../state";

const DetailHero: React.FC = () => {
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);
  const trackData = useRecoilValue(detailTrackState);

  useEffect(() => {
    trackData
  },[trackData])

  return (
    <div>
      {isClicked ? (
        <div>
          {trackData?.items?.map((v) => (
            <div className="my-2 bg-yellow-200">
              <h1>{v?.track?.name}</h1>
              <h1>{v?.track?.artists[0]?.name}</h1>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailHero;
