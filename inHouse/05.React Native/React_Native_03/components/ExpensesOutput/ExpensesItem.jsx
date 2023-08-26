import { Pressable, Text, View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/style";
import { getFormattedDate } from "../../utility/date";

export default function ExpensesItem({ description, amount, date }) {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 13,
    marginVertical: 10,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 7,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: "bold",
  },
  amountContainer: {
    minWidth: 70,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 13,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
  amountText: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
