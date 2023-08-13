import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

export default function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <View>
        <Title>수수께끼 숫자</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <View>
        <Text>높을까요? 낮을까요?</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
