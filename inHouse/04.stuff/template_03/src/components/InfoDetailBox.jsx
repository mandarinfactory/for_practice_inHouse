import { useContext, useEffect, useState } from "react";

import { MapInfoContextStore } from "../../contexts";

export default function InfoDetailBox() {
  const MapInfosCtx = useContext(MapInfoContextStore);
  const [randomNum, setRandomNum] = useState();
  const [matchedStoreClass, setMatchedStoreClass] = useState();

  useEffect(() => {
    const randomNumber = Math.ceil(Math.random() * 10);
    setRandomNum(randomNumber);
    switch (MapInfosCtx.filteredStoreClass) {
      case "cafe":
        setMatchedStoreClass("cafe");
        break;
      case "restaurant":
        setMatchedStoreClass("restaurant");
        break;
      case "cvs":
        setMatchedStoreClass("cvs");
        break;
      case "hospital":
        setMatchedStoreClass("hospital");
        break;
      case "pharmacy":
        setMatchedStoreClass("pharmacy");
        break;
    }
  }, [MapInfosCtx.isMarkerClicked]);

  return (
    <div className="absolute top-[15%] right-[40%] w-[15%] h-[35%] bg-slate-200 rounded-lg shadow-lg">
      <div
        className="absolute right-[-14%] width-[10px] height-[10px] px-2 bg-white cursor-pointer hover:bg-black"
        onClick={() => MapInfosCtx.setIsMarkerClicked(undefined)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 384 512"
          className="fill-black hover:fill-white"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      <div className="w-auto h-auto m-5">
        <img
          src={`../images/${matchedStoreClass}/${matchedStoreClass}${randomNum}.jpg`}
          alt=""
        />
      </div>
      <h1 className="my-2 text-lg text-center">
        {MapInfosCtx.isMarkerClicked}
      </h1>
      <p className="my-1 text-sm text-center">
        {MapInfosCtx.clickedMarkerClass}
      </p>
      <p className="my-1 text-sm text-center">
        {MapInfosCtx.clickedMarkerAddress}
      </p>
    </div>
  );
}
