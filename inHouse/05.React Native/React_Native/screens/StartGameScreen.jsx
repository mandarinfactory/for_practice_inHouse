import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>리셋</PrimaryButton>
      <PrimaryButton>확인</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 15,
    marginTop: 100,
    marginHorizontal: 25,
    borderRadius: 13,
    backgroundColor: "#4e0329",
    elevation: 5, // android box-shadow
    shadowColor: "black", //iphone box-shadow(그림지의 색상)
    shadowOffset: { width: 0, height: 2 }, //iphone box-shadow(그림자의 크키, 우치)
    shadowRadius: 7, //iphone box-shadow(그림자의 번짐의 크기)
    shadowOpacity: 0.25, //iphone box-shadow(그림자의 투명도)
  },
  textInput: {
    width: 50,
    height: 50,
    fontSize: 35,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 3,
    color: "#ddb52f",
    marginVertical: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
});
