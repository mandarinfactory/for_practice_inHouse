import { useRef, useEffect } from "react";
import { useResultContext } from "../contexts/MapDataContext";

const Map = ({ setLatInfo, setLngInfo }) => {
  const mapElement = useRef(null);
/*   const { setResult } = useResultContext(); */

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;
    /* console.log(setResult()); */

    //로케이션표시 Google maps에서 원하는 장소 찾은 후 주변검색을 누르면 좌표를 찾을 수 있다.
    const location = new naver.maps.LatLng(37.5663, 126.9779);

    //네이버 지도 옵션 선택
    const mapOptions = {
      center: location,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    //지도상에 핀 표시 할 부분
    new naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  return <div ref={mapElement} className="w-[80%] h-screen" />;
};
export default Map;
