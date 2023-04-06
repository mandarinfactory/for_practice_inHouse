import ExpenseDate from "./ExpenseDate";
import "../css/ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate
        date={props.date}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;