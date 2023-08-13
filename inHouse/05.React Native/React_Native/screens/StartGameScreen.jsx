import { useState } from "react";
import { TextInput, View, Alert, StyleSheet } from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../constants/colors";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "유효하지 않은 숫자입니다.",
        "1과 99 사이의 숫자이여야 합니다. 다시 입력해주십시오.",
        [{ text: "확인", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={resetInputHandler}>리셋</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPressing={confirmInputHandler}>확인</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 100,
    marginHorizontal: 25,
    borderRadius: 13,
    backgroundColor: Colors.purple300,
    elevation: 5, // android box-shadow
    shadowColor: "black", //iphone box-shadow(그림지의 색상)
    shadowOffset: { width: 0, height: 2 }, //iphone box-shadow(그림자의 크기, 위치)
    shadowRadius: 7, //iphone box-shadow(그림자의 번짐의 크기)
    shadowOpacity: 0.25, //iphone box-shadow(그림자의 투명도)
  },
  textInput: {
    width: 50,
    height: 50,
    fontSize: 35,
    borderBottomColor: Colors.yellow100,
    borderBottomWidth: 3,
    color: Colors.yellow100,
    marginVertical: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
