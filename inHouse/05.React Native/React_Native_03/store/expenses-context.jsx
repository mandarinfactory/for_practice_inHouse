import { createContext, useReducer } from "react";

const DUMMY = [
  {
    id: "e1",
    description: "shoes",
    amount: 59.99,
    date: new Date("2023-08-20"),
  },
  {
    id: "e2",
    description: "shirts",
    amount: 27.99,
    date: new Date("2023-08-22"),
  },
  {
    id: "e3",
    description: "USB connector",
    amount: 15.1,
    date: new Date("2023-08-24"),
  },
  {
    id: "e4",
    description: "book",
    amount: 6.7,
    date: new Date("2023-08-24"),
  },
  {
    id: "e5",
    description: "apples",
    amount: 13.25,
    date: new Date("2023-08-25"),
  },
  {
    id: "e6",
    description: "apples",
    amount: 13.25,
    date: new Date("2023-08-25"),
  },
  {
    id: "e7",
    description: "apples",
    amount: 13.25,
    date: new Date("2023-08-25"),
  },
  {
    id: "e8",
    description: "apples",
    amount: 13.25,
    date: new Date("2023-08-25"),
  },
  {
    id: "e9",
    description: "apples",
    amount: 13.25,
    date: new Date("2023-08-25"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date.toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state(updatableExpenseIndex);
      const updatedItem = { ...updatableExpense, ...aciton.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
