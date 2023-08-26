import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/style";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

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

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 25,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
});