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
    <div
      className="absolute top-[15%] lg:right-[40%] md:right-[25%] sm:right-[30%] lg:w-[15%] md:w-[40%] sm:w-[30%] h-[35%] flex flex-col items-center justify-center bg-slate-100 rounded-lg shadow-xl cursor-pointer"
      onClick={() => {
        MapInfosCtx.setIsMarkerClicked(undefined);
      }}
    >
      <div className="w-auto h-auto m-5">
        <img
          src={matchedStoreClass ? `../images/${matchedStoreClass}/${matchedStoreClass}${randomNum}.jpg` : <></>}
          alt=""
        />
      </div>
      <h1 className="text-lg text-center">
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
