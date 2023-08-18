import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function DescriptionCard({ style }) {
  return (
    <View style={styles.descriptionCard}>
      <Text style={styles.titleText}>게임이용방법</Text>
      <Text style={styles.descriptionText}>
        1. 원하는 숫자를 입력 후 확인버튼을 누릅니다.
      </Text>
      <Text style={styles.descriptionText}>
        2. 확인버튼을 누르면 임의로 추측되는 번호를 확인하며 + / -를 누르면서
        조정합니다.
      </Text>
      <Text style={styles.descriptionText}>
        3. 게임오버가 되더라도 다시시작하여 게임을 할 수 있습니다.
      </Text>
      <Text style={styles.descriptionText}>그럼 즐거운 게임하세요!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionCard: {
    width: "88%",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: "white",
  },
  titleText: {
    marginBottom: 7,
    fontFamily: "gameSans",
    fontSize: 25,
    color: Colors.purple100,
    fontWeight: "bold",
  },
  descriptionText: {
    marginVertical: 5,
    fontFamily: "gameSans",
    fontSize: 19,
    width: "90%",
  },
});
