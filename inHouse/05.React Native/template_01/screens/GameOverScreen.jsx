import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { useEffect, useRef } from "react";

import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

export default function GamaOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const gameOverAnimation = useRef(new Animated.Value(1)).current;

    Animated.sequence([
      Animated.loop(
        Animated.timing(gameOverAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        })
      ),
    ]).start();

  return (
    <View style={styles.screen}>
      <Title>게임오버!</Title>
      <Animated.View
        style={[styles.imageConatiner, { opacity: gameOverAnimation }]}
      >
        <Image
          source={require("../assets/images/gameover.png")}
          style={styles.image}
        />
      </Animated.View>
      <Text style={styles.summaryText}>
        당신이 고른 숫자인 <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        를 맞추기 위해 <Text style={styles.highlight}>{userNumber}</Text>번
        추측했네요.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>다시시작</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  imageConatiner: {
    width: deviceWidth < 400 ? 250 : 350,
    height: deviceWidth < 400 ? 250 : 350,
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
