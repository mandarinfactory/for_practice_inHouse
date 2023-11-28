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
          // API에서 나온 결과값을 comData state값으로 넣어줬으며, 해당 메뉴를 클릭한 값이 있으면
          MapInfosCtx.comData.body.items.map((e, key) => (
            // comData값을 map function을 이용해 각각의 데이터가 구현되게 했습니다.
            <div className="w-full h-full flex justify-center" key={key}>
              <div
                className={`${e.bizesNm} w-[90%] my-3 px-2 py-5 flex flex-col justify-center items-center bg-slate-200 hover:bg-slate-300 cursor-pointer`}
                onClick={() => {
                  MapInfosCtx.setIsInfoBoxClicked(true);
                  MapInfosCtx.setClickedInfoBox({ lat: e.lat, lng: e.lon });
                  // 해당 상점리스트에서 상점을 클릭하면 위, 경도를 받아 해당 상점으로 마커를 움직이게 하기 위한 state입니다.
                  MapInfosCtx.setIsMarkerClicked(e.bizesNm);
                  // 마커를 클릭하면 해당 상점이 가장 윗면에 올라오게 하기 위해 state값을 줬습니다.
                  MapInfosCtx.setClickedMarkerClass(e.ksicNm);
                  MapInfosCtx.setClickedMarkerAddress(e.lnoAdr);
                  MapInfosCtx.handleMarkerClick(key);
                }}
              >
                <h1 className="text-black text-2xl mb-5">{e.bizesNm}</h1>
                <p className="text-black text-lg">주소 : {e.lnoAdr}</p>
              </div>
              {MapInfosCtx?.isMarkerClicked === e?.bizesNm
              // 해당 state값과 상점이름이 같을경우 scrollIntoView를 받도록 구현했습니다.(768px이상일경우만)
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
