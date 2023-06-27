import GoogleMapReact from "google-map-react";
import MapStyles from "./screen/MapInfoBox/MapStyles";

export default function MapBox({
  places,
  coordinates,
  setCoordinates,
  setBounds,
  setChildClicked
}) {

  return (
    <div className="flex-[0.7]  w-auto h-[800px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBYd6DJGHfDDHicLsEvRyssDr3Ps6dfWGg" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI : true, zoomControl : true, styles : MapStyles }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className=""
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            ket={i}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 384 512"
              className="fill-green-400"
            >
              <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
            </svg>
            <div className="flex flex-col items-center w-[100px] h-[120px] bg-slate-100 shadow-lg">
              <p className="py-2 text-lg font-bold">{place.name}</p>
              <img
                className="p-2 w-[100%] h-[55%]"
                src={
                  place.photo
                  ? place.photo.images.large.url
                  : "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                }
                alt={place.name}
              />
            </div>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}
