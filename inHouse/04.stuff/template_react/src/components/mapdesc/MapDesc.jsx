import { useEffect, useState } from "react";
import { useResultContext } from "../../contexts/MapDataContext";

const MapDescRawData = (props) => {
  const {
    resultTitle,
    resultInstaLink,
    resultCategory,
    resultAddress,
    resultLat,
    resultLng,
  } = useResultContext();

  const title = props.row.title;
  const instaLink = props.row.link;
  const category = props.row.category;
  const address = props.row.address;
  const lat = props.row.mapx;
  const lng = props.row.mapy;

  resultTitle.push(title);
  resultInstaLink.push(instaLink);
  resultCategory.push(category);
  resultAddress.push(address);
  resultLat.push(lat);
  resultLng.push(lng);

  return (
    <div className="py-10">
      <h1 className="flex justify-center py-7 text-xl font-extrabold">{title}</h1>
      <div className="flex items-center justify-center">
      <a href={instaLink} target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 448 512"
          >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>
      <h1 className="px-5 py-3 text-lg font-lg">{category}</h1>
          </div>
      <h1 className="flex justify-center py-3 text-sm font-lg">{address}</h1>
    </div>
  );
};

export default function MapDesc() {
  const [mapDesc, setMapDesc] = useState(null);

  const apiGet = async (type, param) => {
    const CLIENT_ID = "97gi3wHYe0SVzbmFuIJW";
    const CLIENT_SECRET = "Q8IvuVzzbm";
    const apiUrl = `https://openapi.naver.com/v1/search/${type}?query=${param}&display=5&sort=random`;
    const resp = await fetch(apiUrl, {
      mode: "cors",
      method: "GET",
      headers: {
        Content_Type: "application/json",
        "X-Naver-Client-Id": CLIENT_ID,
        "X-Naver-Client-Secret": CLIENT_SECRET,
      },
    });
    resp.json().then((data) => {
      setMapDesc(data.items);
    })
  };
  useEffect(() => {
    apiGet("local.json", "부천카페");
    /* 인수 하드코딩! */
  }, []);
  return (
    <div className="w-[30%] h-screen overflow-auto">
      {mapDesc &&
        mapDesc.map((v, index) => {
          return <MapDescRawData key={index} row={v} />;
        })}
    </div>
  );
}
