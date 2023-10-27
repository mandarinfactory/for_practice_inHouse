import {
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import Main from "./components/Main";
import AptInfoContext from "./context";
import { useEffect } from "react";
import filteredNewspaperAPI from "./API/newspaper";


export default function App() {
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  
  useEffect(() => {
    filteredNewspaperAPI();
  },[])
  
  return (
    <>
      <DismissKeyboard>
        <SafeAreaView style={styles.rootContainer}>
          <StatusBar style="light" />
          <AptInfoContext>
            <Main />
          </AptInfoContext>
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
