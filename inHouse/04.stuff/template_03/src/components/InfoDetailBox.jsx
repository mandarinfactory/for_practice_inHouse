import { useContext, useEffect, useState } from "react";

import { MapInfoContextStore } from "../../contexts";

export default function InfoDetailBox() {
    const MapInfosCtx = useContext(MapInfoContextStore);
    const [randomNum, setRandomNum] = useState();
    
    useEffect(() => {
        const randomNumber = Math.ceil(Math.random() * 10);
        setRandomNum(randomNumber);
  },[MapInfosCtx.isMarkerClicked])

  return (
    <div className="absolute w-[20%] h-full bg-slate-200 shadow-sm">
      <div
        className="absolute right-[-10%] width-[10px] height-[10px] px-2 bg-white cursor-pointer"
        onClick={() => MapInfosCtx.setIsMarkerClicked(undefined)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 384 512"
          className="fill-black"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      <div className="w-auto h-auto m-5">
        <img src={`../images/cafe/카페${randomNum}.jpg`} alt="" />
      </div>
      <h1 className="my-5 text-3xl text-center">
        {MapInfosCtx.isMarkerClicked}
      </h1>
      <h1 className="my-5 text-xl text-center">
        {MapInfosCtx.clickedMarkerClass}
      </h1>
      <h1 className="my-5 text-xl text-center">
        {MapInfosCtx.clickedMarkerAddress}
      </h1>
    </div>
  );
}
