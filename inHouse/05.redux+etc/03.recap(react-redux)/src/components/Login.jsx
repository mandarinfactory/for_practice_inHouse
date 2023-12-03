import React from "react";
import { useDispatch } from "react-redux";

import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Brent", age: 29, email: "Everett.porn.gay" })
          );
        }}
      >
        click!
      </button>
      <button
        onClick={() => { 
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Login;
