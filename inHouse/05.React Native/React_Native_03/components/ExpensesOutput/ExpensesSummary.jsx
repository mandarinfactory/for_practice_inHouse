import { Text, View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/style";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 5,
  },
  period: {
    fontSize: 13,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 17,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
