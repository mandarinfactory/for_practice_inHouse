import { View, Text, StyleSheet } from "react-native";
import Colors from "../constant/color";

export default function HeroScreen({ apartmentData }) {
  let deAptData;
  return (
    <>
      {apartmentData !== undefined ? (
        <View style={styles.outerConatiner}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>현재 종로구 아파트 순위</Text>
          </View>
          {apartmentData?.map((aptData, index) => (
            <View style={styles.innerContainer} key={index}>
              <Text style={styles.innerText}>{aptData.아파트}아파트</Text>
              <Text style={styles.innerText}>
                {aptData.거래금액
                  .toString()
                  .trim()
                  .substring(0, 3)
                  .replace(/,/g, "")}억
              </Text>
              <Text style={styles.innerText}>
                {aptData.년.toString().replace("20", "")}.
                {aptData.월 < 10 ? `0${aptData.월}` : aptData.월}.{aptData.일}
              </Text>
            </View>
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
    marginVertical: 30,
  },
  innerContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  titleTextContainer: {
    width: "80%",
    alignItems: "flex-start",
  },
  titleText: {
    marginBottom: 10,
    fontFamily: "Bold",
    fontSize: 24,
    color: Colors.subColor,
  },
  innerText: {
    fontFamily: "ExtraLight",
    fontSize: 14,
    color: "white",
  },
});
