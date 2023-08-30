import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

export default function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          pressed ? pressed && styles.btnPressed : null,
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
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  btn: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.5,
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
    fontSize: 18,
  },
});
