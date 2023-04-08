import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  return (
    <div>
      <NewExpense/>
      <Expenses/> 
    </div>
  );
};

export default App;