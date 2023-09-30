import { ScrollView, StyleSheet } from "react-native";

import HeroScreen from "../screens/HeroScreen";
import SearchScreen from "../screens/SearchScreen";
import WeatherScreen from "../screens/WeatherScreen";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.heroScrollView}>
        <WeatherScreen />
        <SearchScreen />
        <HeroScreen />
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  heroScrollView: {
    height: 1000,
  },
});
