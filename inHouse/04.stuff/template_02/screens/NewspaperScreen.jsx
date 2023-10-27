import { Text, View, StyleSheet } from "react-native";

import Colors from "../constant/color";

export default function NewspaperScreen() {
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.titleText}>부동산뉴스</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    width: "90%",
    marginVertical: 15,
    marginLeft: 45,
  },
  titleText: {
    color: Colors.subColor,
    fontFamily: "Light",
    fontSize: 20,
  },
});
