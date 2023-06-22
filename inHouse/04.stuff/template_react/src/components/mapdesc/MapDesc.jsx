import { useEffect, useState } from "react";
import { useResultContext } from "../../contexts/MapDataContext";

const MapDescRawData = (props) => {
  const { resultLat, resultLng } = useResultContext();
  const title = props.row.title;
  const instaLink = props.row.link;
  const category = props.row.category;
  const address = props.row.address;
  const lat = props.row.mapx;
  const lng = props.row.mapy;

  //global context에 각각 위, 경도 useContext로 추가함
  resultLat.push(lat);
  resultLng.push(lng);
  console.log(resultLat, resultLng);

  return (
    <div className="py-10">
      <h1>{title}</h1>
      <h1>{instaLink}</h1>
      <h1>{category}</h1>
      <h1>{address}</h1>
      <h1>{lat}</h1>
      <h1>{lng}</h1>
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
      method: "GET",
      headers: {
        Content_Type: "application/json",
        "X-Naver-Client-Id": CLIENT_ID,
        "X-Naver-Client-Secret": CLIENT_SECRET,
      },
    });
    resp.json().then((data) => {
      setMapDesc(data.items);
    });
  };
  useEffect(() => {
    apiGet("local.json", "카페,맛집,관광명소");
    /* 인수 하드코딩! */
  }, []);
  return (
    <div className="w-[20%] h-screen overflow-auto">
      {mapDesc &&
        mapDesc.map((v, index) => {
          return <MapDescRawData key={index} row={v} />;
        })}
    </div>
  );
}
