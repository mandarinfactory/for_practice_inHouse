import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals - {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
