let winW = window.innerWidth;
let winH = window.innerHeight;

let mapOptions = {
  zoom: 10,
  center: new naver.maps.LatLng(37.4876, 126.7528),
  size: new naver.maps.Size(winW, winH),
};
let map = new naver.maps.Map("map", mapOptions);

let markerOptions = {
  position: map.getCenter(),
  map: map,
};
let marker = new naver.maps.Marker(markerOptions);

let mapElement = map.getElement();
let listener = naver.maps.Event.addDOMListener(
  mapElement,
  "click",
  function () {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
    naver.maps.Event.removeDOMListener(listener);
  }
);
