import { useState, useEffect, useContext } from "react";
import { NaverMap, Container, Marker, InfoWindow } from "react-naver-maps";

import { MapInfoContextStore } from "../../contexts";
import createMapMarkerBox from "./MapMarkerBox";

export default function NaverMapBox({ mapRef }) {
  const MapInfosCtx = useContext(MapInfoContextStore);

  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [infowindow, setInfowindow] = useState(null);
  const [isMarkerOver, setIsMarkerOver] = useState(null);

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
              zIndex={1}
              onMouseover={(v) => {
                v.originalEvent.target.parentNode.style.zIndex = 2;
                console.log(v.originalEvent.target.parentNode.style.zIndex);
              }}
              onMouseout={(v) =>
                (v.originalEvent.target.parentNode.style.zIndex = 1)
              }
              onClick={() => {
                //mapRef.current?.scrollIntoView({ behavior: "smooth" });
                let clickedLocation = { lat: e.lat, lng: e.lon };
                map.panTo(clickedLocation);
              }}
              icon={{
                content: [createMapMarkerBox(e.bizesNm)].join(""),
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
