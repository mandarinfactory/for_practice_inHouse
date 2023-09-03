import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function MealDetailScreen({ route, navigation }) {
 // const favoriteMealsCtx = useContext(FavoritesContext);
 const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
 const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealIds.ids.includes(mealId);
  

  const favoriteStChangeHandler = () => {
    if (mealIsFavorite) {
      //favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id : mealId}));
    } else {
      //favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({id : mealId}));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={favoriteStChangeHandler}
          />
        );
      },
    });
  }, [navigation, favoriteStChangeHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    margin: 10,
    padding: 3,
    backgroundColor: "#847ede",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  detailText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    width: "80%",
  },
});
