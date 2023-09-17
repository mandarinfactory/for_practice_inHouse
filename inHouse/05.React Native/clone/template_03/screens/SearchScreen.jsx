import { View, Text, TextInput, StyleSheet } from "react-native";

import Colors from "../constant/color";

export default function SearchScreen() {
  return (
    <View>
      <View style={styles.innerContainer}>
        <TextInput style={styles.searchInput} />{/* API랑 신호 받을 Input */}
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.subtitleText}>
          어디 <Text style={styles.subtitleInnerText}>아파트 매매가</Text>
        </Text>
        <Text style={styles.subtitleText}>순위를 알고 싶으신가요?</Text>
        <Text style={styles.subtitleText}>
          <Text style={styles.subtitleInnerText}>원하는 구</Text>를 검색해
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
    fontSize: 30,
    fontFamily: "Light",
  },
  subtitleInnerText: {
    color: Colors.primaryColor,
    fontSize: 30,
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
});
