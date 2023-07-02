import GoogleMapReact from "google-map-react";
import CinemaInfos from "../assets/KRCinemaInfo.json";

export default function CinemaMap() {
  const cinemaMarker = () => {
    for (let i = 0; i < CinemaInfos.length; i++) {
      const latitude = { lat: CinemaInfos[i].LC_LA };
      const longitude = { lng: CinemaInfos[i].LC_LO };
      const cinemaLocation = [{ ...latitude, ...longitude }];
      <div lat={cinemaLocation[0].lat} lng={cinemaLocation[0].lng} key={i}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 384 512"
          className="fill-red-600"
        >
          <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
        </svg>
      </div>;
    }
  };

  const coordinates = {
    lat: 37.487648,
    lng: 126.752896,
  };

  return (
    <div className="w-[50%] h-[500px] my-10 py-5">
      <h1 className="my-5 text-3xl font-bold">내위치에서 가까운 영화관</h1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBYd6DJGHfDDHicLsEvRyssDr3Ps6dfWGg" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={15}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {cinemaMarker()}
          <div lat="37.487648" lng="126.752896">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 384 512"
              className="fill-red-600"
            >
              <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
            </svg>
          </div>
        </GoogleMapReact>
    </div>
  );
}
