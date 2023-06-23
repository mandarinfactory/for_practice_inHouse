import { useRef, useEffect } from "react";
import { useResultContext } from "../contexts/MapDataContext";

const Map = () => {
  const mapElement = useRef(null);
  const { resultLat, resultLng } = useResultContext();

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;
    console.log(parseInt(resultLat[1]), parseInt(resultLng[1]));
    const point = new naver.maps.Point(
      parseInt(resultLat[1]),
      parseInt(resultLng[1])
    );
    const latLng = naver.maps.TransCoord.fromTM128ToLatLng(point);

    //네이버 지도 옵션 선택
    const mapOptions = {
      center: latLng,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    //지도상에 핀 표시 할 부분
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: latLng,
      map: map,
      icon: {
        url: "../../../public/marker.svg",
        size: new naver.maps.Size(50, 26),
        anchor: new naver.maps.Point(5, 10)
      },
      clickable: true,
    });
  }, []);
  return <div ref={mapElement} className="w-[80%] h-screen" />;
};
export default Map;
