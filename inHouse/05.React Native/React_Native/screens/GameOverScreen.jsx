import { View, Image, StyleSheet } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";

export default function GamaOverScreen() {
  return (
    <View>
      <Title>게임오버!</Title>
      <View style={styles.imageConatiner}>
        <Image source={require("../assets/images/gameover.png")} style={styles.image}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageConatiner: {
    width: 250,
    height: 250,
    margin : 65,
  },
  image : {
    width : "100%",
    height : "100%",
  }
});
