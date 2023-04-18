import React from "react";
import AppUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AppUser/>
      <UsersList users={[]}/>
    </div>
  );
}

export default App;
