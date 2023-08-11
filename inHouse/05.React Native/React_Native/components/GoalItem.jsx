import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    padding: 5,
    borderRadius: 7,
    backgroundColor: "#00a1df",
    fontWeight: "700",
  },
  goalText: {
    color: "white",
  },
});
