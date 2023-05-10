import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvaliableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "초밥",
    description: "최상의 물고기와 밥으로 만들었습니다!",
    price: 18500,
  },
  {
    id: "m2",
    name: "슈니첼",
    description: "독일식 돈까스! 맛있습니다!",
    price: 12000,
  },
  {
    id: "m3",
    name: "바베큐버커",
    description: "미국스러운 아주 기름진맛!",
    price: 5900,
  },
  {
    id: "m4",
    name: "풀때기들",
    description: "다이어터들을 위해 만든 풀때기 메뉴!",
    price: 7800,
  },
];

const AvaliableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvaliableMeals;
