import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

import Colors from "../constant/color";
import addressData from "../API/realestate/addressData.json";

export default function SearchScreen({ setSearchTextValue }) {
  const [filteredAddressData, setFilteredAddressData] = useState();
  const getTextInputValue = (value) => {
    let addressArr = [];
    addressData.forEach((v) => {
      if (value == v.시군구명 || value == v.읍면동명) {
        addressArr.push(v);
        setFilteredAddressData(addressArr);
      }
    });
  };
  console.log(filteredAddressData);

  return (
    <View>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={getTextInputValue}
        />
        {filteredAddressData
        ? 
        <View style={styles.findResultContainer}>
          <Text>hi</Text>
          {filteredAddressData.forEach(e => (
            <Text style={styles.findResultText}>{e.시도명} {e.시군구명} {e.읍면동명}</Text>
          ))}
        </View> 
        : undefined}
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.subtitleText}>
          어디 <Text style={styles.subtitleInnerText}>아파트 매매가</Text>
        </Text>
        <Text style={styles.subtitleText}>순위를 알고 싶으신가요?</Text>
        <Text style={styles.subtitleText}>
          <Text style={styles.subtitleInnerText}>궁금한 구/동</Text>을 검색해
          보세요!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    marginVertical: 15,
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
    marginRight: 7,
    borderColor: "transparent",
    backgroundColor: "white",
    borderRadius: 15,
  },
  findResultContainer: {
    //position: "absolute",
    //top: 50,
    //right: 50,
    backgroundColor: "white",
  },
  findResultText: {
    marginLeft: 10,
    fontFamily: "Light",
    fontSize: 15,
  }
});
