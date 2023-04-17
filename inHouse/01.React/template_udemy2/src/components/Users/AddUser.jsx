import React from 'react';
import Card from '../UI/Card';
import classes from '../../css/AddUser.module.css';

const AppUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">유저이름</label>
        <input id="username" type="text" />
        <label htmlFor="age">나이</label>
        <input id="age" type="number" />
        <button type="submit">유저추가하기</button>
      </form>
    </Card>
  );
};

export default AppUser;
