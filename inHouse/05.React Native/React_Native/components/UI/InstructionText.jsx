import { Text, StyleSheet } from "react-native";

export default function InstructionText({children, style}) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "gameSans",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
