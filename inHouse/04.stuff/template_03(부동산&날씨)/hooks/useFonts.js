import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    ExtraLight: require("../assets/font/SCDream3.otf"),
    Light: require("../assets/font/SCDream4.otf"),
    Regular: require("../assets/font/SCDream5.otf"),
    Bold: require("../assets/font/SCDream6.otf"),
    ExtraBold: require("../assets/font/SCDream7.otf"),
    Black: require("../assets/font/SCDream8.otf"),
  });
};
