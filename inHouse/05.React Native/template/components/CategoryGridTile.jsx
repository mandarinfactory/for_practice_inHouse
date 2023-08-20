import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";

export default function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          pressed ? styles.btnPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 3, // android_shadow
    backgroundColor: "white", // iphone은 따로 backgroundColor가 지정되어야 boxShadow가 반영된다.
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
},
btn: {
    flex: 1,
},
btnPressed: {
    opacity : 0.7,
},
innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
