import { useRef, useEffect } from "react";
import { useResultContext } from "../contexts/MapDataContext";

const Map = () => {
  const mapElement = useRef(null);
  const { resultTitle, resultInstaLink, resultCategory, resultAddress, resultLat, resultLng } = useResultContext();

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const point1 = new naver.maps.Point(
      parseInt(resultLat[0]),
      parseInt(resultLng[0])
    );
    const point2 = new naver.maps.Point(
      parseInt(resultLat[1]),
      parseInt(resultLng[1])
    );
    const point3 = new naver.maps.Point(
      parseInt(resultLat[2]),
      parseInt(resultLng[2])
    );
    const point4 = new naver.maps.Point(
      parseInt(resultLat[3]),
      parseInt(resultLng[3])
    );
    const point5 = new naver.maps.Point(
      parseInt(resultLat[4]),
      parseInt(resultLng[4])
    );

    const latLng1 = naver.maps.TransCoord.fromTM128ToLatLng(point1);
    const latLng2 = naver.maps.TransCoord.fromTM128ToLatLng(point2);
    const latLng3 = naver.maps.TransCoord.fromTM128ToLatLng(point3);
    const latLng4 = naver.maps.TransCoord.fromTM128ToLatLng(point4);
    const latLng5 = naver.maps.TransCoord.fromTM128ToLatLng(point5);

    //네이버 지도 옵션 선택
    const mapOptions = {
      center: latLng1,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    //지도상에 핀 표시 할 부분
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    const marker1 = new naver.maps.Marker({
      position: latLng1,
      map: map,
      icon: {
        url: "../../../public/marker.svg",
        size: new naver.maps.Size(50, 26),
        anchor: new naver.maps.Point(5, 10)
      },
      clickable: true,
    });
    new naver.maps.Marker({
      position: latLng2,
      map: map,
      icon: {
        url: "../../../public/marker.svg",
        size: new naver.maps.Size(50, 26),
        anchor: new naver.maps.Point(5, 10)
      },
      clickable: true,
    });
    new naver.maps.Marker({
      position: latLng3,
      map: map,
      icon: {
        url: "../../../public/marker.svg",
        size: new naver.maps.Size(50, 26),
        anchor: new naver.maps.Point(5, 10)
      },
      clickable: true,
    });
    new naver.maps.Marker({
      position: latLng4,
      map: map,
      icon: {
        url: "../../../public/marker.svg",
        size: new naver.maps.Size(50, 26),
        anchor: new naver.maps.Point(5, 10)
      },
      clickable: true,
    });
    new naver.maps.Marker({
      position: latLng5,
      map: map,
      icon: {
        url: "../../../public/marker.svg",
        size: new naver.maps.Size(50, 26),
        anchor: new naver.maps.Point(5, 10)
      },
      clickable: true,
    });

    const markerInfoBox = [
      ` <div className="w-auto h-auto bg-slate-50 shadow-lg">
            <h2>${resultTitle}</h2>
            <a href=${resultInstaLink}>인스타그램 링크</a>
            <h4>${resultCategory}</h4>
            <h4>${resultAddress}</h4>
        </div>`
    ].join(``);
    const InfoWindowBox = new naver.maps.InfoWindow({
      content : markerInfoBox
    });
    naver.maps.Event.addListener(marker1, "click", function(){
      if(InfoWindowBox.getMap()) {
        InfoWindowBox.close();
      } else {
        InfoWindowBox.open(map, marker1);
      }
    });

    InfoWindowBox.open(map, marker1);
  }, []);
  return <div ref={mapElement} className="w-[80%] h-screen" />;
};
export default Map;
