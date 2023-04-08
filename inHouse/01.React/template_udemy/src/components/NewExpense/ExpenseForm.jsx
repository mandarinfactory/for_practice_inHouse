import react from "react";
import "../../css/ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>제목</label>
          <input type="text"/>
        </div>
        <div className="new-expense__control">
          <label>총량</label>
          <input type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input type="date" min="2019-01-01" max="2023-12-31"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">지출 추가하기</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
