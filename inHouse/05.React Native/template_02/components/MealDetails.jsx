import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.details}>{duration}Min.</Text>
      <Text style={styles.details}>{complexity.toUpperCase()}</Text>
      <Text style={styles.details}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
