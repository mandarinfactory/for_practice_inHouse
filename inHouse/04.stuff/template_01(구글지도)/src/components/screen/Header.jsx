import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

export default function Header({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <header className="text-slate-200 body-font bg-green-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex flex-row title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 384 512"
          >
            <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
          </svg>
          <span className="ml-3 text-2xl font-bold text-gray-900">
            관광정보알리미
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 font-bold cursor-pointer">
            카페
          </a>
          <a className="mr-5 hover:text-gray-900 font-bold cursor-pointer">
            맛집
          </a>
          <a className="mr-5 hover:text-gray-900 font-bold cursor-pointer">
            디저트
          </a>
          <a className="mr-5 hover:text-gray-900 font-bold cursor-pointer">
            관광명소
          </a>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              className="bg-green-400 p-2 text-black placeholder:text-black rounded-md"
              placeholder="도시를 입력해주십시오."
            />
          </Autocomplete>
        </nav>
      </div>
    </header>
  );
}
