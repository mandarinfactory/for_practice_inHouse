import HeroScreen from "../screens/HeroScreen";
import SearchScreen from "../screens/SearchScreen";
import WeatherScreen from "../screens/WeatherScreen";
import Layout from "./Layout";

export default function Home({ apartmentData, weatherData, setIsAptPressed, setPressedAptData }) {
  return (
    <Layout>
      <WeatherScreen weatherData={weatherData} />
      <SearchScreen />
      <HeroScreen
        apartmentData={apartmentData}
        setIsAptPressed={setIsAptPressed}
        setPressedAptData={setPressedAptData}
      />
    </Layout>
  );
}
