import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/style";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses}/>
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