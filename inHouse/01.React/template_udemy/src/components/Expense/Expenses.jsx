import ExpenseItem from "./ExpenseItem";
import Card from "../Design/Card";
import "../../css/Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const dateHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <ExpensesFilter dateHandler={dateHandler} />
      <Card className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </>
  );
}

export default Expenses;
