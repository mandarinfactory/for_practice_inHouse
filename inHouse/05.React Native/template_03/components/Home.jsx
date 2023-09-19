import { ScrollView, StyleSheet } from "react-native";

import HeroScreen from "../screens/HeroScreen";
import SearchScreen from "../screens/SearchScreen";
import WeatherScreen from "../screens/WeatherScreen";
import Layout from "./Layout";

export default function Home({
  recentLocation,
  apartmentData,
  weatherData,
  setIsAptPressed,
  setPressedAptData,
  setSearchTextValue,
}) {
  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.heroScrollView}>
        <WeatherScreen
          recentLocation={recentLocation}
          weatherData={weatherData}
        />
        <SearchScreen setSearchTextValue={setSearchTextValue} />
        <HeroScreen
          recentLocation={recentLocation}
          apartmentData={apartmentData}
          setIsAptPressed={setIsAptPressed}
          setPressedAptData={setPressedAptData}
        />
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  heroScrollView: {
    height: 1000,
  },
});
