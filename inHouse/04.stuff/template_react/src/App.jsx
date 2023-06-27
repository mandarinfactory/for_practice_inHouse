import { useState, useEffect } from "react";
import Hero from "./components/screen/Hero";
import Layout from "./components/screen/Layout";
import { getPlacesData } from "./API";

function App() {

  const [type, setType] = useState("restaurants");
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []); // 현재 내 위치의 위경도 알려줌

  useEffect(() => {
    if(bounds) {
      setIsLoading(true);
      getPlacesData(type, bounds.ne, bounds.sw)
      .then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false);
      });
    };
    }, [type, coordinates, bounds]); // API 함수 부르기

  return (
    <Layout setCoordinates={setCoordinates}>
      <Hero
        type={type}
        setType={setType}
        places={places}
        isLoading={isLoading}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        childClicked={childClicked}
        setChildClicked={setChildClicked}
      />
    </Layout>
  );
}

export default App;
