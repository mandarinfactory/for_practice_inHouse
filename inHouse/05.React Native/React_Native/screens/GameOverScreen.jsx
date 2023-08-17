import { Text, View, Image, StyleSheet } from "react-native";

import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

export default function GamaOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.screen}>
      <Title>게임오버!</Title>
      <View style={styles.imageConatiner}>
        <Image
          source={require("../assets/images/gameover.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        당신이 고른 숫자인 <Text style={styles.highlight}>{roundsNumber}</Text> 를 맞추기
        위해 <Text style={styles.highlight}>{userNumber}</Text>번 추측했네요.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>다시시작</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  imageConatiner: {
    width: 250,
    height: 250,
    margin: 65,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "gameSans",
    marginBottom: 25,
    fontSize: 25,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "gameSans",
    color: Colors.purple100,
  },
});
