import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constant/color";

export default function DetailScreen({
  isAptPressed,
  setIsAptPressed,
  pressedAptData,
}) {
  const rollBackToHomeScreen = () => {
    setIsAptPressed(false);
  };
  const aptTradeData = pressedAptData.거래금액
    .toString()
    .trim()
    .replace(/,/g, "0000")
    .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  const aptSizeData = parseFloat(pressedAptData.전용면적.toString()).toFixed(2);

  const aptAddressData = () => {
    if (parseInt(pressedAptData.법정동부번코드) !== 0) {
      return `${pressedAptData.법정동} ${pressedAptData.법정동본번코드
        .toString()
        .replace(/00?/, "")} - ${pressedAptData.법정동부번코드
        .toString()
        .replace(/00?/, "")}`;
    } else {
      return `${pressedAptData.법정동} ${pressedAptData.법정동본번코드
        .toString()
        .replace(/00?/, "")}`;
    }
  };

  return (
    <>
      {isAptPressed}
      <View>
        <Text style={styles.titleText}>{pressedAptData.아파트}아파트</Text>
        <View>
          <Text style={styles.innerText}>거래금액 : {aptTradeData}원</Text>
          <Text style={styles.innerText}>주소 : {aptAddressData()}</Text>
          <Text style={styles.innerText}>
            건축년도 : {pressedAptData.건축년도}년
          </Text>
          <Text style={styles.innerText}>전용면적 : {aptSizeData}㎡</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={rollBackToHomeScreen}>
          <Text style={styles.buttonText}>홈으로!</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    marginVertical: 10,
    fontFamily: "ExtraLight",
    fontSize: 30,
    color: Colors.primaryColor,
    textAlign: "center",
  },
  innerText: {
    marginVertical: 5,
    color: "white",
    fontFamily: "Light",
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    margin: "auto",
    width: "30%",
    marginVertical: 10,
    paddingVertical: 13,
    backgroundColor: Colors.subColor,
    borderRadius: 18,
  },
  buttonText: {
    fontFamily: "Regular",
    fontSize: 20,
    color: "white",
  },
});
