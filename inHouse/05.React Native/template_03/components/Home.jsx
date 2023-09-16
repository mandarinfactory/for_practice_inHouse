import HeroScreen from "../screens/HeroScreen";
import SearchScreen from "../screens/SearchScreen";
import WeatherScreen from "../screens/WeatherScreen";
import Layout from "./Layout";

export default function Home({ apartmentData, weatherData, setIsAptPressed }) {
  return (
    <Layout>
      <WeatherScreen weatherData={weatherData} />
      <SearchScreen />
      <HeroScreen
        apartmentData={apartmentData}
        setIsAptPressed={setIsAptPressed}
      />
    </Layout>
  );
}
