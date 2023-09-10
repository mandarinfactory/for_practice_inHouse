import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import getAptTradeAPI from "./API/RealEstate/aptIndex";
import HeaderScreen from "./screens/HeaderScreen";
import SearchScreen from "./screens/SearchScreen";
import HeroScreen from "./screens/HeroScreen";

export default function App() {
  const [apartmentData, setApartmentData] = useState();
  useFonts({
    "titleSans" : require("./assets/font/SCDream4.otf"),
    "HeroSans" : require("./assets/font/SCDream5.otf"),
  });

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  useEffect(() => {
    getAptTradeAPI();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <DismissKeyboard>
        <SafeAreaView style={styles.rootContainer}>
          <HeaderScreen />
          <SearchScreen />
          <HeroScreen apartmentData={apartmentData} />
        </SafeAreaView>
      </DismissKeyboard>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "black",
    height: 1000,
  },
});
