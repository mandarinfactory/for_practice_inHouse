import { Text } from "react-native";

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  return <Text>{mealId}</Text>;
}
