import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "../../css/AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AppUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const userName = nameInputRef.current.value;
    const userAge = ageInputRef.current.value;
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "유효하지 않은 이름",
        message: "유효한 이름과 나이를 기재해 주세요!(빈칸없이)",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "유효하지 않은 나이",
        message: "유효한 나이를 기재해 주세요!(0보다 큰수로)",
      });
      return;
    }
    props.onAddUser(userName, userAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            ref={nameInputRef}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">유저추가하기</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AppUser;
