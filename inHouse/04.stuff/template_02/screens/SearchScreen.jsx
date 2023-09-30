import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { AptInfoContextStore } from "../context";
import addressData from "../API/realEstate/addressData.json";
import Colors from "../constant/color";

export default function SearchScreen() {
  const AptInfosCtx = useContext(AptInfoContextStore);
  const [filteredAddressData, setFilteredAddressData] = useState();

  const getTextInputValue = (value) => {
    let addressArr = [];
    if (value !== "") {
      addressData.forEach((v) => {
        if (value == v.시군구명) {
          addressArr.push(v);
          setFilteredAddressData(addressArr);
        }
      });
    } else {
      setFilteredAddressData(value);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerSearchContainer}>
      <Ionicons name="navigate-circle" color={Colors.subColor} size={30} style={styles.locationIcon} onPress={() => {
            AptInfosCtx.setSearchTextValue(undefined)
          }}/>
        <TextInput
          style={styles.searchInput}
          onChangeText={getTextInputValue}
        />
        {filteredAddressData ? (
          <Pressable style={styles.findResultContainer}>
            {filteredAddressData.map((e) =>
              e.읍면동명 == undefined ? (
                <Pressable style={({ pressed }) =>
                pressed
                  ? styles.pressedContainer
                  : undefined
              }
              onPress={() => {
                AptInfosCtx.setSearchTextValue(e);
                setFilteredAddressData(undefined);
              }}
              >
                  <Text style={styles.findResultText}>
                    {e.시도명} {e.시군구명}
                  </Text>
                </Pressable>
              ) : undefined
            )}
          </Pressable>
        ) : undefined}
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.subtitleText}>
          어디 <Text style={styles.subtitleInnerText}>아파트 매매가</Text>
        </Text>
        <Text style={styles.subtitleText}>순위를 알고 싶으신가요?</Text>
        <Text style={styles.subtitleText}>
          <Text style={styles.subtitleInnerText}>궁금한 구</Text>를 검색해
          보세요!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    zIndex: 1,
  },
  innerSearchContainer: {
    alignItems: "center",
    marginVertical: 15,
    zIndex: 3,
  },
  innerContainer: {
    alignItems: "center",
    marginVertical: 15,
    zIndex: 2,
  },
  subtitleText: {
    color: "white",
    fontSize: 25,
    fontFamily: "Light",
  },
  subtitleInnerText: {
    color: Colors.primaryColor,
    fontSize: 25,
  },
  searchInput: {
    width: 300,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "transparent",
    backgroundColor: "white",
    borderRadius: 15,
  },
  findResultContainer: {
    position: "absolute",
    width: "80%",
    top: 40,
    right: 40,
    backgroundColor: "white",
    elevation: 3,
  },
  pressedContainer: {
    backgroundColor: Colors.subColor,
    color: "white"
  },
  findResultText: {
    padding: 7,
    margin: 3,
    fontFamily: "Regular",
    fontSize: 15,
  },
  locationIcon: {
    position: "absolute",
    top: -35,
    right: 45,
  },
});
