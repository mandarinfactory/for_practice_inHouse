import {
  View,
  Button,
  TextInput,
  Modal,
  Image,
  StyleSheet,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ visible, addGoalHandler, endGoalModalHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const handleTheAddGoalHandler = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={styles.imageIcon}/>
        <TextInput
          style={styles.textInput}
          placeholder="할일을 적어주세요!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonIcon}>
            <Button title="할일추가" onPress={handleTheAddGoalHandler} />
          </View>
          <View style={styles.buttonIcon}>
            <Button title="닫기" onPress={endGoalModalHandler}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#61dafb",
  },
  imageIcon: {
    width : 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    width: "90%",
    marginRight: 5,
    padding: 7,
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  buttonIcon: {
    width: "100",
    marginHorizontal: 10,
  },
});
