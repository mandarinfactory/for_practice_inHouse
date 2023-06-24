import { useRef, useEffect } from "react";
import { useResultContext } from "../contexts/MapDataContext";

const Map = () => {
  const mapElement = useRef(null);
  const { resultTitle, resultInstaLink, resultCategory, resultAddress, resultLat, resultLng } = useResultContext();
  console.log(resultTitle);

  useEffect(() => {
    console.log(location.origin);
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
    const marker2 = new naver.maps.Marker({
      position: latLng2,
      map: map,
      icon: {
        url: "../../../public/marker.svg",
        size: new naver.maps.Size(50, 26),
        anchor: new naver.maps.Point(5, 10)
      },
      clickable: true,
    });
    const marker3 = new naver.maps.Marker({
      position: latLng3,
      map: map,
      icon: {
        url: "../../../public/marker.svg",
        size: new naver.maps.Size(50, 26),
        anchor: new naver.maps.Point(5, 10)
      },
      clickable: true,
    });
    const marker4 = new naver.maps.Marker({
      position: latLng4,
      map: map,
      icon: {
        url: "../../../public/marker.svg",
        size: new naver.maps.Size(50, 26),
        anchor: new naver.maps.Point(5, 10)
      },
      clickable: true,
    });
    const marker5 = new naver.maps.Marker({
      position: latLng5,
      map: map,
      icon: {
        url: "../../../public/marker.svg",
        size: new naver.maps.Size(50, 26),
        anchor: new naver.maps.Point(5, 10)
      },
      clickable: true,
    });

    const markerInfoBox1 = [
      ` <div class="flex flex-col justify-center items-start p-5 w-auto h-auto bg-slate-50 shadow-xl font-bold text-sm">
            <h2 class="py-2 text-lg font-extrabold">${resultTitle[0]}</h2>
            <a href=${resultInstaLink[0]}>인스타그램 링크</a>
            <h4>${resultCategory[0]}</h4>
            <h4>${resultAddress[0]}</h4>
        </div>`
    ].join(``);
    const InfoWindowBox1 = new naver.maps.InfoWindow({
      content : markerInfoBox1
    });
    naver.maps.Event.addListener(marker1, "click", function(){
      if(InfoWindowBox1.getMap()) {
        InfoWindowBox1.close();
      } else {
        InfoWindowBox1.open(map, marker1);
      }
    });

    const markerInfoBox2 = [
      ` <div class="flex flex-col justify-center items-start p-5 w-auto h-auto bg-slate-50 shadow-xl font-bold text-sm">
            <h2 class="py-2 text-lg font-extrabold">${resultTitle[1]}</h2>
            <a href=${resultInstaLink[1]}>인스타그램 링크</a>
            <h4>${resultCategory[1]}</h4>
            <h4>${resultAddress[1]}</h4>
        </div>`
    ].join(``);
    const InfoWindowBox2 = new naver.maps.InfoWindow({
      content : markerInfoBox2
    });
    naver.maps.Event.addListener(marker2, "click", function(){
      if(InfoWindowBox2.getMap()) {
        InfoWindowBox2.close();
      } else {
        InfoWindowBox2.open(map, marker2);
      }
    });

    const markerInfoBox3 = [
      ` <div class="flex flex-col justify-center items-start p-5 w-auto h-auto bg-slate-50 shadow-xl font-bold text-sm">
            <h2 class="py-2 text-lg font-extrabold">${resultTitle[2]}</h2>
            <a href=${resultInstaLink[2]}>인스타그램 링크</a>
            <h4>${resultCategory[2]}</h4>
            <h4>${resultAddress[2]}</h4>
        </div>`
    ].join(``);
    const InfoWindowBox3 = new naver.maps.InfoWindow({
      content : markerInfoBox3
    });
    naver.maps.Event.addListener(marker3, "click", function(){
      if(InfoWindowBox3.getMap()) {
        InfoWindowBox3.close();
      } else {
        InfoWindowBox3.open(map, marker3);
      }
    });

    const markerInfoBox4 = [
      ` <div class="flex flex-col justify-center items-start p-5 w-auto h-auto bg-slate-50 shadow-xl font-bold text-sm">
            <h2 class="py-2 text-lg font-extrabold">${resultTitle[3]}</h2>
            <a href=${resultInstaLink[3]}>인스타그램 링크</a>
            <h4>${resultCategory[3]}</h4>
            <h4>${resultAddress[3]}</h4>
        </div>`
    ].join(``);
    const InfoWindowBox4 = new naver.maps.InfoWindow({
      content : markerInfoBox4
    });
    naver.maps.Event.addListener(marker4, "click", function(){
      if(InfoWindowBox4.getMap()) {
        InfoWindowBox4.close();
      } else {
        InfoWindowBox4.open(map, marker4);
      }
    });

    const markerInfoBox5 = [
      ` <div class="flex flex-col justify-center items-start p-5 w-auto h-auto bg-slate-50 shadow-xl font-bold text-sm">
            <h2 class="py-2 text-lg font-extrabold">${resultTitle[4]}</h2>
            <a href=${resultInstaLink[4]}>인스타그램 링크</a>
            <h4>${resultCategory[4]}</h4>
            <h4>${resultAddress[4]}</h4>
        </div>`
    ].join(``);
    const InfoWindowBox5 = new naver.maps.InfoWindow({
      content : markerInfoBox5
    });
    naver.maps.Event.addListener(marker5, "click", function(){
      if(InfoWindowBox5.getMap()) {
        InfoWindowBox5.close();
      } else {
        InfoWindowBox5.open(map, marker5);
      }
    });

    InfoWindowBox1.open(map, marker1);
    InfoWindowBox2.open(map, marker2);
    InfoWindowBox3.open(map, marker3);
    InfoWindowBox4.open(map, marker4);
    InfoWindowBox5.open(map, marker5);
  }, []);
  return <div ref={mapElement} className="w-[80%] h-screen" />;
};
export default Map;
