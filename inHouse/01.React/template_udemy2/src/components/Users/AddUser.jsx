import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "../../css/AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AppUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "유효하지 않은 이름",
        message: "유효한 이름과 나이를 기재해 주세요!(빈칸없이)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "유효하지 않은 나이",
        message: "유효한 나이를 기재해 주세요!(0보다 큰수로)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">유저이름</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChHandler}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChHandler}
          />
          <Button type="submit">유저추가하기</Button>
        </form>
      </Card>
    </div>
  );
};

export default AppUser;
