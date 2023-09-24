import { Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import Colors from "../constant/color";

export default function DetailScreen({
  isAptPressed,
  setIsAptPressed,
  pressedAptData,
  pressedAptLocData,
}) {
  let coordinates;
  pressedAptLocData ? (
    ((coordinates = {
      latitude: parseFloat(pressedAptLocData[0]).toFixed(5),
      longitude: parseFloat(pressedAptLocData[1]).toFixed(5),
    }),
    (initialCoord = {
      latitude: parseFloat(pressedAptLocData[0]).toFixed(5),
      longitude: parseFloat(pressedAptLocData[1]).toFixed(5),
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }))
  ) : (
    <></>
  );
  const rollBackToHomeScreen = () => {
    setIsAptPressed(false);
  };
  const aptTradeData = pressedAptData?.거래금액
    .toString()
    .trim()
    .replace(/,/g, "0000")
    .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  const aptSizeData = parseFloat(pressedAptData.전용면적?.toString()).toFixed(
    2
  );

  const aptNewAddressData = () => {
    if (parseInt(pressedAptData.도로명건물부번호코드) !== 0) {
      return `${pressedAptData.도로명} ${pressedAptData?.도로명건물본번호코드
        .toString()
        .replace(/000?/, "")} - ${pressedAptData?.도로명건물부번호코드
        .toString()
        .replace(/000?/, "")}`;
    } else
      return `${pressedAptData.도로명} ${pressedAptData?.도로명건물본번호코드
        .toString()
        .replace(/000?/, "")}`;
  };
  const aptOldAddressData = () => {
    if (parseInt(pressedAptData.법정동부번코드) !== 0) {
      return `${pressedAptData.법정동} ${pressedAptData?.법정동본번코드
        .toString()
        .replace(/00?/, "")} - ${pressedAptData?.법정동부번코드
        .toString()
        .replace(/00?/, "")}`;
    } else {
      return `${pressedAptData.법정동} ${pressedAptData?.법정동본번코드
        .toString()
        .replace(/00?/, "")}`;
    }
  };

  return (
    <>
      {isAptPressed && (
        <View>
          <Text style={styles.titleText}>{pressedAptData.아파트}아파트</Text>
          <View>
            <Text style={styles.innerText}>거래금액 : {aptTradeData}원</Text>
            <Text style={styles.innerText}>
              거래날짜 : 20{pressedAptData.년.toString().replace("20", "")}년
              {pressedAptData.월 < 10
                ? ` 0${pressedAptData.월}`
                : pressedAptData.월}
              월
              {pressedAptData.일 < 10
                ? ` 0${pressedAptData.일}`
                : pressedAptData.일}
              일
            </Text>
            <Text style={styles.innerText}>
              주소 : {aptNewAddressData()} / {aptOldAddressData()}
            </Text>
            <Text style={styles.innerText}>
              건축년도 : {pressedAptData.건축년도}년
            </Text>
            <Text style={styles.innerText}>전용면적 : {aptSizeData}㎡</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={rollBackToHomeScreen}>
              <Text style={styles.buttonText}>홈으로!</Text>
            </Pressable>
          </View>
          <View style={styles.mapContainer}>
            {pressedAptLocData && (
              <>
                <MapView style={styles.map} initialRegion={initialCoord}>
                  <Marker coordinate={coordinates} pinColor={Colors.primaryColor} />
                </MapView>
              </>
            )}
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    marginTop: 25,
    marginBottom: 15,
    fontFamily: "ExtraBold",
    fontSize: 35,
    color: Colors.primaryColor,
    textAlign: "center",
  },
  innerText: {
    marginVertical: 8,
    color: "white",
    fontFamily: "ExtraLight",
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
  mapContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  map: {
    width: "80%",
    height: 400,
    borderRadius: 15,
  },
});
