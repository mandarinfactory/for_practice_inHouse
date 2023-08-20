import { useState } from "react";
import {
  TextInput,
  View,
  Alert,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton";
import InstructionText from "../components/UI/InstructionText";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import DescriptionCard from "./DescriptionCard";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

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

  const marginTopDistance = height < 400 ? 50 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title style={styles.titleText}>숫자QUIZ</Title>
          <Card>
            <InstructionText>원하는 숫자를 입력해주세요!</InstructionText>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  확인
                </PrimaryButton>
              </View>
            </View>
          </Card>
          <DescriptionCard style={styles.descriptionCard} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //marginTop: deviceHeight < 400 ? 50 : 100,
    alignItems: "center",
  },
  titleText: {
    fontSize: 35,
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
