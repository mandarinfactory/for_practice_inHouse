import GoogleMapReact from "google-map-react";
import CinemaInfos from "../assets/KRCinemaInfo.json";
import { useState } from "react";

export default function CinemaMap() {

  const [cinemaMapBox, setCinemaMapBox] = useState(false);

var pos
navigator.geolocation.getCurrentPosition((position) => {
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  });
  console.log(pos);

  const coordinates = {
    lat: 37.487648,
    lng: 126.752896,
  };

  return (
    <div className="w-[50%] h-auto">
      <h1 className="my-5 text-3xl font-bold">내위치에서 가까운 영화관</h1>
      <div className="flex items-center">
        <div className="w-[70%] h-[500px] my-10 py-5">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBYd6DJGHfDDHicLsEvRyssDr3Ps6dfWGg",
            }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={15}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
          >
            {CinemaInfos.map((info, i) => (
              <div lat={info.LC_LA} lng={info.LC_LO} key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2.5em"
                  viewBox="0 0 384 512"
                  className="fill-blue-500"
                >
                  <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
                </svg>
              </div>
            ))}
          </GoogleMapReact>
        </div>
        <div className="w-[30%] h-[500px] bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-xl">
          <h1></h1>
        </div>
      </div>
    </div>
  );
}
