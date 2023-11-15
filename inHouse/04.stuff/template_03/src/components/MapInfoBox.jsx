import { useEffect, useContext } from "react";

import { MapInfoContextStore } from "../../contexts";

import NoDataInfoBox from "./NoDataInfoBox";
import getCommercialInfosHandler from "../../API";

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
    <div className="w-full h-[800px] overflow-y-scroll">
      <div className="infoBox w-full h-auto flex flex-col justify-center items-center text-white body-font bg-slate-100 overflow-hidden">
        {MapInfosCtx.comData && MapInfosCtx.isfilteredNumber ? (
          MapInfosCtx.comData.body.items.map((e, key) => (
            <div className="w-full h-full flex justify-center" key={key}>
              <div
                className={`${e.bizesNm} w-[90%] my-3 px-2 py-5 flex flex-col justify-center items-center bg-slate-200 hover:bg-slate-300 cursor-pointer`}
                onClick={() => {
                  MapInfosCtx.setIsInfoBoxClicked(true);
                  MapInfosCtx.setClickedInfoBox({ lat: e.lat, lng: e.lon });
                  MapInfosCtx.setIsMarkerClicked(e.bizesNm);
                  MapInfosCtx.setClickedMarkerClass(e.ksicNm);
                  MapInfosCtx.setClickedMarkerAddress(e.lnoAdr);
                  MapInfosCtx.handleMarkerClick(key);
                }}
              >
                <h1 className="text-black text-2xl mb-5">{e.bizesNm}</h1>
                <p className="text-black text-lg">주소 : {e.lnoAdr}</p>
              </div>
              {MapInfosCtx?.isMarkerClicked === e?.bizesNm
                ? matchMedia("screen and (min-width: 768px)").matches
                  ? document
                      ?.querySelector(`.${e.bizesNm}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                  : undefined
                : undefined}
            </div>
          ))
        ) : (
          <NoDataInfoBox />
        )}
      </div>
    </div>
  );
}
