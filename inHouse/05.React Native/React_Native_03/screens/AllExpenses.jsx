import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpenses() {
  const expenssesContext = useContext(ExpensesContext);

  return <ExpensesOutput expenses={ExpensesContext.expenses} expensesPeriod="Total" />;
}
