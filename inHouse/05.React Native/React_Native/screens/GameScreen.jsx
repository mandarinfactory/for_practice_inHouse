import { useState, useEffect } from "react";
import { View, Alert, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import InstructionText from "../components/UI/InstructionText";
import Card from "../components/UI/Card";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "잘못된 방식입니다.",
        "정했던 숫자를 확인하고 다시 버튼을 눌러주세요.",
        [{ text: "확인", style: "cancel" }]
      );
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>추측한 숫자가 선택한 숫자와 같나요?</Title>
      <Card>
        <NumberContainer>{currentGuess}</NumberContainer>
        <InstructionText style={styles.instructionText}>
          더 작을까요? 더 클까요? 눌러주세요!
        </InstructionText>
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={25}/>
            </PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={25}/>
            </PrimaryButton>
          </View>
        </View>
        <View>{/* log rounds */}</View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 10,
  },
});
