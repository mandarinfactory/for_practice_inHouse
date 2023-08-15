import { Text, StyleSheet } from "react-native";

export default function InstructionText({children}) {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
