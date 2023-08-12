import { View, Text, Pressable, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#1877f2" }} // android
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem} // iphone
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 7,
    backgroundColor: "#00a1df",
    fontWeight: "700",
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#1877f2"
  }, // iphone
  goalText: {
    padding: 5,
    color: "white",
  },
});
