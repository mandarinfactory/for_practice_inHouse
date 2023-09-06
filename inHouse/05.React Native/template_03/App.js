import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import getAptTradeAPI from "./API";
import HeaderScreen from "./screens/HeaderScreen";

export default function App() {
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  useEffect(() => {
      getAptTradeAPI();
  },[])
  
  return (
    <>
      <StatusBar style="light" />
      <DismissKeyboard>
        <SafeAreaView style={styles.rootContainer}>
          <HeaderScreen />
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