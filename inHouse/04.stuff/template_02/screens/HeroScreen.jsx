import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { AptInfoContextStore } from "../context";
import Colors from "../constant/color";

export default function HeroScreen() {
  const AptInfosCtx = useContext(AptInfoContextStore);
  const onPress = () => {
    AptInfosCtx.setIsAptPressed(true);
  };

  return (
    <>
      {AptInfosCtx.apartmentData !== undefined &&
      AptInfosCtx.apartmentData.sort(function (x, y) {
        return parseInt(y.거래금액) - parseInt(x.거래금액);
      }) ? (
        <View style={styles.outerConatiner}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.subtitleText}>
              현재{" "}
              <Text style={styles.titleText}>
                {AptInfosCtx.searchTextValue
                  ? AptInfosCtx.searchTextValue.시도명
                  : AptInfosCtx.recentLocation[0].city}{" "}
                {AptInfosCtx.searchTextValue
                  ? AptInfosCtx.searchTextValue.시군구명
                  : AptInfosCtx.filteredDistrict}{" "}
              </Text>
              아파트 순위
            </Text>
          </View>
          {AptInfosCtx.apartmentData?.map((aptData, index) => (
            <Pressable
              style={({ pressed }) =>
                pressed
                  ? [styles.innerContainer, styles.pressed]
                  : styles.innerContainer
              }
              key={index}
              onPress={() => {
                onPress();
                AptInfosCtx.setPressedAptData(aptData);
              }}
              android_ripple={{ color: Colors.primaryColor }}
            >
              <Text style={styles.innerText}>
                {aptData.아파트.toString().includes("아파트")
                  ? aptData.아파트
                  : `${aptData.아파트}아파트`}
              </Text>
              <Text style={styles.innerText}>
                {aptData.거래금액
                  .toString()
                  .trim()
                  .replace(/,/g, "0000")
                  .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}
                원
              </Text>
              <Text style={styles.innerText}>
                {aptData.년.toString().replace("20", "")}.
                {aptData.월 < 10 ? `0${aptData.월}` : aptData.월}.
                {aptData.일 < 10 ? `0${aptData.일}` : aptData.일}
              </Text>
            </Pressable>
          ))}
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  outerConatiner: {
    alignItems: "center",
    marginVertical: 20,
  },
  pressedIcon: {
    color: Colors.primaryColor,
  },
  pressed: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
  },
  innerContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 3,
    paddingVertical: 15,
    paddingHorizontal: 3,
  },
  titleTextContainer: {
    width: "80%",
    alignItems: "flex-start",
  },
  titleText: {
    marginBottom: 5,
    fontFamily: "Bold",
    fontSize: 24,
    color: Colors.primaryColor,
  },
  subtitleText: {
    fontFamily: "ExtraLight",
    fontSize: 24,
    color: "white",
  },
  innerText: {
    fontFamily: "ExtraLight",
    fontSize: 13,
    color: "white",
  },
});
