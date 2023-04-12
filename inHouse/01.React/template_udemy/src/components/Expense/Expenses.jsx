/* eslint-disable */

import react, { useState } from "react";
import Card from "../Design/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList'
import ExpensesChart from "./ExpensesChart";
import "../../css/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          filterChHandler={filterChHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
