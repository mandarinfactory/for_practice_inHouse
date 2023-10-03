import { useEffect, useContext } from "react";

import { MapInfoContextStore } from "../../../contexts";
import NoDataInfoBox from "../NoDataInfoBox";
import getCommercialInfosHandler from "../../../API";

export default function MapInfoBox() {
  const MapInfosCtx = useContext(MapInfoContextStore);

  useEffect(() => {
    if (MapInfosCtx.isLocation && MapInfosCtx.isfilteredNumber) {
     getCommercialInfosHandler(
        MapInfosCtx,
        MapInfosCtx.isfilteredNumber.largeClass,
        MapInfosCtx.isfilteredNumber.middleClass,
        MapInfosCtx.isfilteredNumber.smallClass
      );
    }
  }, [MapInfosCtx.isLocation, MapInfosCtx.isfilteredNumber]);
  return (
    <div className="w-full h-[800px] flex flex-col justify-center items-center text-white body-font bg-slate-100 overflow-auto">
        {MapInfosCtx.comData && MapInfosCtx.isfilteredNumber ? (
          MapInfosCtx.comData.body.items.map((e, key) => (
            <div
              className="w-[90%] my-5 px-2 py-5 flex flex-col justify-center items-center bg-slate-200"
              key={key}
            >
              <h1 className="text-black text-2xl mb-5">{e.bizesNm}</h1>
              <p className="text-black text-xl">주소 : {e.lnoAdr}</p>
            </div>
          ))
        ) : (
          <NoDataInfoBox />
        )}
    </div>
  );
}
