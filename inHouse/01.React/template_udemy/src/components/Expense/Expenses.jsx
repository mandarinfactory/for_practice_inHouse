import react, { useState } from 'react';
import Card from "../Design/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "../../css/Expenses.css";

const Expenses = (props) => {
  const [ filteredYear, setFilteredYear ] = useState('2019');
  const filterChHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} filterChHandler={filterChHandler} />
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
    </div>
  );
}

export default Expenses;
