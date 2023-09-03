import { Text, View, Pressable, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HeaderScreen() {
  return (
    <View style={styles.headerOuterContainer}>
      <View style={styles.headerInnerContainer}>
        <View style={styles.headerElementContainer}>
          <Pressable style={styles.IconPlayContainer}>
            <Ionicons name="play" size={25} color="black" />
          </Pressable>
          <Text style={styles.headerFirstText}>OurTube</Text>
        </View>
        <View style={styles.headerElementContainer}>
          <TextInput style={styles.searchInput} />
          <Pressable style={styles.IconPersonContainer}>
            <Ionicons name="person-circle" size={25} color="black" />
          </Pressable>
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
  IconPlayContainer: {
    padding: 5,
    backgroundColor: "#40a68f",
    borderRadius: 20,
  },
  IconPersonContainer: {
    padding: 3,
    backgroundColor: "#40a68f",
    borderRadius: 20,
  },
  headerFirstText: {
    marginLeft: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  searchInput: {
    width: 100,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 7,
    borderColor: "transparent",
    backgroundColor: "white",
    borderRadius: 15,
  },
});
