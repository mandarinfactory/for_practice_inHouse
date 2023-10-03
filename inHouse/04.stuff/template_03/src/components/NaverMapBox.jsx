import { useState, useEffect } from "react";
import { NaverMap, Container, Marker, InfoWindow } from "react-naver-maps";

export default function NaverMapBox() {
  const [map, setMap] = useState(null);
  const [infowindow, setInfowindow] = useState(null);

  function onSuccessGeolocation(position) {
    if (!map || !infowindow) return;

    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    map.setCenter(location);
    map.setZoom(16);
    let {lat, lng} = location.toString();
    console.log({lat, lng});
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
        defaultCenter={{ lat: 37.4876336, lng: 126.7530568 }}
        defaultZoom={15}
        minZoom={12}
        enableWheelZoom={false}
        ref={setMap}
      >
        <Marker
          position={{ lat: 37.4876336, lng: 126.7530568 }}
          title="송내역"
          clickable={true}
        />
        <InfoWindow ref={setInfowindow} />
      </NaverMap>
    </Container>
  );
}
