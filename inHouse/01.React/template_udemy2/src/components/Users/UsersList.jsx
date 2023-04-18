import React from "react";
import Card from "../UI/Card";
import classes from "../../css/UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} 세)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
