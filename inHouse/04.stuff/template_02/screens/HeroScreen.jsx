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
        // 아파트실거래가API데이터를 가져와서 해당 데이터를 내림차순으로 다시 정렬했습니다.
        return parseInt(y.거래금액) - parseInt(x.거래금액);
      }) ? (
        <View style={styles.outerConatiner}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.subtitleText}>
              현재{" "}
              <Text style={styles.titleText}>
                {AptInfosCtx.searchTextValue
                // 시/도검색칸에서 검색할경우의 state와 아닐때를 나눠놨습니다.
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
                  //단위가 만원단위라서 아예 0000을 붙여 1원단위부터 나오게 했습니다.
                  .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")
                  // (\d)는 숫자를, (?=(?:\d{3})+(?!\d))는 숫자뒤에는 3자리마다 하나의 숫자가 있어야한다는거고,
                  // $1,은 숫자($1)뒤에 ,를 추가하게 합니다. --> 천 단위로 ,로 숫자를 구분하게 해줍니다.
                  }
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
