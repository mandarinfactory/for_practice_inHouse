import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App.jsx";
import userReducer from "./features/user.js";
import themeReducer from "./features/theme.js"

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  }, // dispatch로 받은 action-data를 이용해서 state를 변경해주는 function!
  // reducer내에 있는 slice들은 전역적인 store내에 있으면서 작게작게 그룹화 된 store들이라고 생각하면 될듯!
  // action --> dispath(action-data) --> reducer(state, action-data) --> state를 newState로 변경
  // React에서는 dispatch를 useDispatch로 사용한다.
}); // configureStore로 전역적인 store를 만든다. (=createStore)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
