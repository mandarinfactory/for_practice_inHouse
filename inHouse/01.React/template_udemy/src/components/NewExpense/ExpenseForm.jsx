/* eslint-disable */
import react, { useState } from "react";
import "../../css/ExpenseForm.css";

const ExpenseForm = () => {
  const [ enteredTitle, setEnteredTitle ] = useState('');
  const [ enteredAmount, setEnteredAmount ] = useState('');
  const [ enteredDate, setEnteredDate ] = useState('');
  const titleChHandler = event => {
    setEnteredTitle(event.target.value);
  };
  const amountChHandler = event => {
    setEnteredAmount(event.target.value);
  };
  const dateChHandler = event => {
    setEnteredDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>제목</label>
          <input type="text" onChange={titleChHandler} />
        </div>
        <div className="new-expense__control">
          <label>총량</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChHandler}/>
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">지출 추가하기</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
