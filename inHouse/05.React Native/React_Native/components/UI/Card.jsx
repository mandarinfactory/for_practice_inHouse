import { View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    fontFamily: "gameSans",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 30,
    marginHorizontal: 25,
    borderRadius: 13,
    backgroundColor: Colors.purple300,
    elevation: 5, // android box-shadow
    shadowColor: "black", //iphone box-shadow(그림지의 색상)
    shadowOffset: { width: 0, height: 2 }, //iphone box-shadow(그림자의 크기, 위치)
    shadowRadius: 7, //iphone box-shadow(그림자의 번짐의 크기)
    shadowOpacity: 0.25, //iphone box-shadow(그림자의 투명도)
  },
});
