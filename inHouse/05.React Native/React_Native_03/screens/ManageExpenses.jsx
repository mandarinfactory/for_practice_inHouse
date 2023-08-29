import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/style";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";

export default function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const deleteExpenseHandler = () => {
    navigation.goBack();
  };
  const cancelExpenseHandler = () => {
    navigation.goBack();
  };
  const confirmExpenseHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.btns}>
        <Button style={styles.btn} onPress={confirmExpenseHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
        <Button mode="flat" style={styles.btn} onPress={cancelExpenseHandler}>
          Dismiss
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={33}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    minWidth: 120,
    marginHorizontal: 10,
  },
  deleteContainer: {
    alignItems: "center",
    marginTop: 15,
    paddingTop: 7,
    borderTopWidth: 3,
    borderTopColor: GlobalStyles.colors.primary200,
  },
});
