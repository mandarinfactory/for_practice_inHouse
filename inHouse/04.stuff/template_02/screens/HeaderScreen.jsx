import { Text, View, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Colors from "../constant/color";

export default function HeaderScreen() {
  return (
    <View style={styles.headerOuterContainer}>
      <View style={styles.headerInnerContainer}>
        <View style={styles.headerElementContainer}>
          <Pressable style={styles.IconTitleContainer}>
            <Ionicons name="business" size={25} color="black" />
          </Pressable>
          <Text style={styles.headerFirstText}>집순위</Text>
        </View>
        <View style={styles.headerElementContainer}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerOuterContainer: {
    backgroundColor: "black",
  },
  headerInnerContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerElementContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  IconTitleContainer: {
    padding: 5,
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
  },
  headerFirstText: {
    marginLeft: 5,
    color: "white",
    fontSize: 24,
    fontFamily: "Bold",
  },
});
