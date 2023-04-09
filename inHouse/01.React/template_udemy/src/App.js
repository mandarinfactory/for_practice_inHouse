/* eslint-disable */

import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "화장지",
      amount: "5,000",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "삼성TV",
      amount: "1,230,000",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "차보험료",
      amount: "563,000",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "식기세척기",
      amount: "890,000",
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
