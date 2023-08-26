import { FlatList } from "react-native";

import ExpensesItem from "./ExpensesItem";

const renderExpensesItem = (itemData) => {
  return <ExpensesItem {...itemData.item} />;
}


export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item) => item.id}
    />
  );
}
