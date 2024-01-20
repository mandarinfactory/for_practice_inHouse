import React, { useEffect, useState } from "react";

import { MapLocation } from "../model/basic";

const Map: React.FC = () => {
  const { naver } = window;

  const [myLocation, setMyLocation] = useState<MapLocation>("");
  const [clickedLocation, setClickedLocation] = useState<MapLocation>("");
  const [isMarkerSaved, setIsMarkerSaved] = useState<boolean>(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재의 위치를 알 수 없습니다.");
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = [myLocation.latitude, myLocation.longitude];
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
        zoom: 15,
      });
      naver.maps.Event.addListener(map, "click", (v) => {
        setClickedLocation({ latitude: v.coord._lat, longitude: v.coord._lng });
      });
      if (typeof clickedLocation !== "string") {
        const markerPosition = [
          clickedLocation.latitude,
          clickedLocation.longitude,
        ];

        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(markerPosition[0], markerPosition[1]),
          map,
        });
      }
    }
  }, [myLocation, clickedLocation]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "800px" }}></div>
    </>
  );
};

export default Map;
