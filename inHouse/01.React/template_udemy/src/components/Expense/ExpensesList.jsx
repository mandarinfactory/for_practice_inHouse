import react from "react";
import ExpenseItem from './ExpenseItem';
import '../../css/ExpensesList.css'

const ExpensesList = (props) => {
  let expensesContent = <p>지출이 발견되지 않았습니다.</p>;
  if(props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">어떤 지출도 찾지 못했습니다.</h2>
  }
  return <ul className="expenses-list">
    {
        props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))};
  </ul>
};

export default ExpensesList;
