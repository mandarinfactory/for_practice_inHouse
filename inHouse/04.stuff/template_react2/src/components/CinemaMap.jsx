import { useState } from "react";
import GoogleMapReact from "google-map-react";

export default function CinemaMap() {
  const coordinates = {
    lat : 37.487648,
    lng : 126.752896
  }


  return (
    <div className="w-[50%] h-[500px] my-10 py-5">
        <h1 className="my-5 text-3xl font-bold">내위치에서 가까운 영화관</h1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBYd6DJGHfDDHicLsEvRyssDr3Ps6dfWGg" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={15}
          margin={[50, 50, 50, 50]}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        ></GoogleMapReact>
    </div>
  );
}
