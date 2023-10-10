import { useState, useEffect, useContext } from "react";
import { NaverMap, Container, Marker, InfoWindow } from "react-naver-maps";

import { MapInfoContextStore } from "../../contexts";
import createMapMarkerBox from "./marker/MapMarkerBox";
import createMapMarkerActiveBox from "./marker/MapMarkerActiveBox";

export default function NaverMapBox({ mapRef }) {
  const MapInfosCtx = useContext(MapInfoContextStore);

  const [map, setMap] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isMouseMove, setIsMouseMove] = useState(false);
  const [infowindow, setInfowindow] = useState(null);
  const [clickedMarkerIndex, setClickedMarkerIndex] = useState(null);

  function onSuccessGeolocation(position) {
    if (!map || !infowindow) return;

    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    map.setCenter(location);
    map.setZoom(16);
    MapInfosCtx.setIsLocation(location);
  }

  function onErrorGeolocation() {
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
        minZoom={16}
        maxZoom={17}
        enableWheelZoom={false}
        ref={setMap}
        onBoundsChanged={(e) =>
          MapInfosCtx.setBounds({ max: e._max, min: e._min })
        }
      >
        {MapInfosCtx.comData ? (
          MapInfosCtx.comData.body.items.map((e, key) => (
            <Marker
              position={{ lat: e.lat, lng: e.lon }}
              clickable={true}
              key={key}
              onMouseover={(v) => {
                if (clickedMarkerIndex !== key) {
                  setIsMouseMove(true);
                  v.originalEvent.target.parentNode.style.zIndex = 3;
                }
              }}
              onMouseout={(v) => {
                if (clickedMarkerIndex !== key) {
                  setIsMouseMove(false);
                  v.originalEvent.target.parentNode.style.zIndex = 1;
                }
              }}
              onClick={(v) => {
                //setClickedMarkerIndex(key);
                setIsClicked(!isClicked);
                if (isClicked) {
                  v.overlay.eventTarget.children[0].children[0].children[1].style.color = "#0f766e";
                  v.overlay.eventTarget.children[0].style.zIndex = 2;
                  map.panTo({ lat: e.lat, lng: e.lon });
                } else {
                  // 클릭 해제 시, 스타일을 초기화하고 지도를 원래 위치로 복원
                  setIsClicked(!isClicked);
                  v.overlay.eventTarget.children[0].children[0].children[1].style.color =
                  "black";
                  v.overlay.eventTarget.children[0].style.zIndex = 1;
                }
              }}
              icon={{
                content: [createMapMarkerBox(e.bizesNm)].join("")
              }}
            />
          ))
        ) : (
          <></>
        )}
        <InfoWindow ref={setInfowindow} />
      </NaverMap>
    </Container>
  );
}
