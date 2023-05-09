import React from "react";

import MealsSummary from "./MealsSummary";
import AvaliableMeals from "./AvaliableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvaliableMeals />
    </React.Fragment>
  );
};

export default Meals;
