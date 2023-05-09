import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식을 당신에게 바로 배달해드립니다!</h2>
      <p>당신이 좋아하는 음식을 선택해 집에서 맛저를 즐겨보세요!</p>
      <p>
        저희의 음식들은 모두 수준높은 재료와 주방장들로 이루어져 바로바로
        만들어서 고객님들에게 대접하고 있습니다!
      </p>
    </section>
  );
};

export default MealsSummary;
