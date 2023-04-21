import React, { useState } from "react";
import AppUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: userAge, id: Math.random().toString() }];
    });
  };

  return (
    <React.Fragment>
      <AppUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
};

export default App;
