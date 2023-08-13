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
    margin: 25,
    padding: 25,
    borderWidth: 3,
    borderColor: Colors.yellow100,
    borderRadius: 10,
  },
  numberText: {
    color: Colors.yellow100,
    fontSize: 40,
    fontWeight: "bold",
  },
});
