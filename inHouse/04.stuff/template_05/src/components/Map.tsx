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
        setIsMarkerSaved(true);
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
      <div id="map" style={{ width: "100%", height: "800px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="p-3 absolute bottom-10 right-10 w-15 h-12 text-white bg-red-500 rounded-full z-[2]">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
      </div>
    </>
  );
};

export default Map;
