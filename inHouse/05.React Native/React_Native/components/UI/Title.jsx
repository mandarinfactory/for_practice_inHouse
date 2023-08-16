import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "gameSans",
    fontSize: 33,
    fontWeight: "bold",
    backgroundColor: Colors.yellow100,
    color: "white",
    textAlign: "center",
    borderWidth: 1,
    borderColor: Colors.yellow100,
    padding: 10,
  },
});
