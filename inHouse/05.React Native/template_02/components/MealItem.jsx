import {
  Text,
  Pressable,
  View,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  const selectedtemHandler = () => {};

  navigation.navigate("MealDetail", {
    mealId: id,
  });

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectedtemHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? pressed && styles.btnPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.details}>{duration}Min.</Text>
            <Text style={styles.details}>{complexity.toUpperCase()}</Text>
            <Text style={styles.details}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 15,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  btnPressed: {
    opacity: 0.5,
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
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  detailItem: {
    marginHorizontal: 3,
    fontSize: 13,
  },
});
