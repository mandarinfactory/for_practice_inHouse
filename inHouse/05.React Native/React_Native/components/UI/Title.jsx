import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
  },
});
