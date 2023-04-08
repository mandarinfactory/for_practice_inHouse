import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Design/Card";
import "../../css/ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("UPDATED!!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}원</div>
      </div>
      <button onClick={clickHandler}>제목 바꾸기</button>
    </Card>
  );
};

export default ExpenseItem;
