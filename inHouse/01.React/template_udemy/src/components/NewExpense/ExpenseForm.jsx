/* eslint-disable */
import react, { useState } from "react";
import "../../css/ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /* const [userInput, setUserInput ] = useState({
    enteredTitle :'',
    enteredAmount : '',
    enteredDate : ''
  }); */
  const titleChHandler = (event) => {
    setEnteredTitle(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredTitle : event.target.value,
    }); */
  };
  const amountChHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredAmount : event.target.value,
    }); */
  };
  const dateChHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredDate : event.target.value,
    }); --> 주석 처리된것들은 다른 방법의 여러개의 useState를 쓰는 방법! 
    이렇게 하면 이전state(...userInput으로 복사)에 의존하게 된다. 따라서 기존값이 손상되거나 없어지면
    모두 영향을 받게 된다. 의존하고 또 새로운 값으로 바꾸게 되면 꽤나 state가 불안정해진다.
    따라서,
    setUserInput(prevState => {
     return {
       ...prevState,
       enteredDate : event.target.value;
     };
    });
    꼴로 써야 안정적으로 변환이 된다.
    */
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>제목</label>
          <input type="text" value={enteredTitle} onChange={titleChHandler} />
        </div>
        <div className="new-expense__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">지출 추가하기</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
