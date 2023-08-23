import { View, Pressable, Text, Image, StyleSheet } from "react-native";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}minutes</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 15,
    borderRadius: 15,
    backgroundColor: "white",
    elevation : 3,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 7,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
},
details: {
    flexDirection: "row",
    justifyContent : "center",
    alignItems: "center",
    margin: 10,
  },
  detailItem: {
    marginHorizontal: 5,
    fontSize : 15,
  },
});
