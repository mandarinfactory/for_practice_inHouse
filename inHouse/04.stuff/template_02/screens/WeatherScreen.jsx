import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

import { AptInfoContextStore } from "../context";
import Colors from "../constant/color";

export default function WeatherScreen() {
  const AptInfosCtx = useContext(AptInfoContextStore);

  return (
    <>
      {AptInfosCtx.weatherData !== undefined ? (
        <View style={styles.innerContainer}>
          <Text style={styles.weatherText}>{AptInfosCtx.recentLocation !== undefined ? AptInfosCtx.recentLocation[0].district : AptInfosCtx.recentLocation}의</Text>
          <Text style={styles.innerText}>
            현재 온도는{" "}
            <Text style={styles.weatherText}>{AptInfosCtx.weatherData[3]?.obsrValue}</Text>
            도 입니다.
          </Text>
          {AptInfosCtx.weatherData[2]?.obsrValue == 0 ? (
            <View>
              <Text style={styles.innerText}>
                오늘은 비 또는 눈이 오지 않습니다.
              </Text>
              <Text style={styles.innerText}>
                우산을 챙기지 않으셔도 됩니다.
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles.innerText}>
                오늘은 <Text style={styles.weatherText}>비 또는 눈이 옵니다.</Text>
              </Text>
              <Text style={styles.innerText}>우산을 챙기시길 바랍니다.</Text>
            </View>
          )}
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "flex-start",
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 45,
  },
  innerText: {
    marginBottom: 3,
    fontFamily: "Light",
    fontSize: 18,
    color: Colors.graycolor,
  },
  weatherText: {
    marginBottom: 3,
    fontFamily: "Light",
    fontSize: 18,
    color: Colors.subColor,
  },
});
