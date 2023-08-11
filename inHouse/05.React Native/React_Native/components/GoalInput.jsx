import { View, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const handleTheAddGoalHandler = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="할일을 적어주세요!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="할일추가!" onPress={handleTheAddGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 5,
    padding: 5,
  },
});
