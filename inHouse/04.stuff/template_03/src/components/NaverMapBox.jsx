import { useState, useEffect, useContext } from "react";
import { NaverMap, Container, Marker, InfoWindow } from "react-naver-maps";

import { MapInfoContextStore } from "../../contexts";

import createMapMarkerBox from "./marker/MapMarkerBox";
import InfoDetailBox from "./InfoDetailBox";

export default function NaverMapBox() {
  const MapInfosCtx = useContext(MapInfoContextStore);

  const [map, setMap] = useState(null);
  const [isMouseMove, setIsMouseMove] = useState(false);
  const [infowindow, setInfowindow] = useState(null);

  const onSuccessGeolocation = (position) => {
    if (!map || !infowindow) return;

    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    map.setCenter(location);
    map.setZoom(16);
    MapInfosCtx.setIsLocation(location);
  }

  const onErrorGeolocation = () => {
    if (!map || !infowindow) return;

    const center = map.getCenter();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      const center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  }

  useEffect(() => {
    if (!map || !infowindow) {
      return;
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      var center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  }, [map, infowindow]);

  return (
    <Container
      style={{
        width: "100%",
        height: "800px",
      }}
    >
      <NaverMap
        defaultZoom={16}
        centerPoint={
          MapInfosCtx?.inputVal
            ? map.panTo({
                lat: MapInfosCtx?.filteredLat,
                lng: MapInfosCtx?.filteredLng,
              })
            : MapInfosCtx.clickedInfoBox
            ? map.panTo({
                lat: MapInfosCtx.clickedInfoBox.lat,
                lng: MapInfosCtx.clickedInfoBox.lng,
              })
            : undefined
        }
        minZoom={16}
        maxZoom={17}
        enableWheelZoom={false}
        ref={setMap}
        onBoundsChanged={(e) => {
          MapInfosCtx.setBounds({ max: e._max, min: e._min });
        }}
        onCenterChanged={() => {
          MapInfosCtx.setInputVal(false);
          MapInfosCtx.setClickedInfoBox(undefined);
        }}
      >
        {MapInfosCtx.comData ? (
          MapInfosCtx.comData.body.items.map((e, key) => (
            <Marker
              position={{ lat: e.lat, lng: e.lon }}
              clickable={true}
              key={key}
              onMouseover={(v) => {
                if (MapInfosCtx.clickedMarkerIndex !== key) {
                  setIsMouseMove(true);
                  v.originalEvent.target.parentNode.style.zIndex = 3;
                }
              }}
              onMouseout={(v) => {
                if (MapInfosCtx.clickedMarkerIndex !== key) {
                  setIsMouseMove(false);
                  v.originalEvent.target.parentNode.style.zIndex = 1;
                }
              }}
              onClick={() => {
                MapInfosCtx.handleMarkerClick(key);
                map.panTo({ lat: e.lat, lng: e.lon });
                MapInfosCtx.setIsMarkerClicked(e.bizesNm);
                MapInfosCtx.setClickedMarkerClass(e.ksicNm);
                MapInfosCtx.setClickedMarkerAddress(e.lnoAdr);
              }}
              icon={{
                content: [createMapMarkerBox(e.bizesNm, key)].join(""),
              }}
            />
          ))
        ) : (
          <></>
        )}
        <InfoWindow ref={setInfowindow} />
        {MapInfosCtx.isMarkerClicked !== undefined ? <InfoDetailBox /> : <></>}
      </NaverMap>
    </Container>
  );
}
