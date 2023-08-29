import { useContext } from "react";

import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utility/date";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date > date7daysAgo;
  });

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />;
}
