import {
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Platform
} from "react-native";
import { StatusBar } from "expo-status-bar";

import Main from "./components/Main";
import AptInfoContext from "./context";

export default function App() {
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <>
      <DismissKeyboard>
        <SafeAreaView style={[styles.rootContainer, styles.androidSafeArea]}>
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
  androidSafeArea: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS == "android" ? 50 : 0,
  },
});
