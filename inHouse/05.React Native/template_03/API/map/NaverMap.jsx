import NaverMapView, {Circle, Path, Polyline, Polygon} from "react-native-nmap";

export default function NaverMap () {
  const P0 = { latitude: 37.564362, longitude: 126.977011 };
  const P1 = { latitude: 37.565051, longitude: 126.978567 };
  const P2 = { latitude: 37.565383, longitude: 126.976292 };

  return (
    <NaverMapView
      style={{ width: "100%", height: "100%" }}
      showsMyLocationButton={true}
      center={{ ...P0, zoom: 16 }}
      onTouch={(e) => console.warn("onTouch", JSON.stringify(e.nativeEvent))}
      onCameraChange={(e) => console.warn("onCameraChange", JSON.stringify(e))}
      onMapClick={(e) => console.warn("onMapClick", JSON.stringify(e))}
    >
      <Path
        coordinates={[P0, P1]}
        onClick={() => console.warn("onClick! path")}
        width={10}
      />
      <Polyline
        coordinates={[P1, P2]}
        onClick={() => console.warn("onClick! polyline")}
      />
      <Circle
        coordinate={P0}
        color={"rgba(255,0,0,0.3)"}
        radius={200}
        onClick={() => console.warn("onClick! circle")}
      />
      <Polygon
        coordinates={[P0, P1, P2]}
        color={`rgba(0, 0, 0, 0.5)`}
        onClick={() => console.warn("onClick! polygon")}
      />
    </NaverMapView>
  );
}
