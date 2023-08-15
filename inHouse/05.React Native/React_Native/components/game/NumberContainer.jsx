import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    padding: 25,
    backgroundColor: "white",
  },
  numberText: {
    color: Colors.yellow100,
    fontSize: 60,
    fontWeight: "bold",
  },
});
