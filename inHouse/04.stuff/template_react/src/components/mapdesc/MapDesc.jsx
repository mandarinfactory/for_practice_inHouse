import { useEffect, useState } from "react";

export default function MapDesc() {
  const [mapDesc, setMapDesc] = useState(null);

  const apiGet = async (type, param) => {
    const CLIENT_ID = "97gi3wHYe0SVzbmFuIJW";
    const CLIENT_SECRET ="Q8IvuVzzbm";
    const apiUrl = `https://openapi.naver.com/v1/search/${type}?query=${param}&display=10&start=1&sort=random`;
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
    apiGet("local.json", "카페");
  },[])

  return (
    <>
        <h1></h1>
    </>
  );
};