import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    padding: deviceWidth < 400 ? 20 : 30,
    backgroundColor: "white",
    borderRadius : 20,
  },
  numberText: {
    fontFamily: "gameSans",
    color: Colors.yellow100,
    fontSize: deviceWidth < 400 ? 60 : 70,
    fontWeight: "bold",
  },
});
