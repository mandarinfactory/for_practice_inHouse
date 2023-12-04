import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import MovieInfoContext from "./contexts/index.jsx";
import topComponentReducer from "./features/topComponent.js"

const store = configureStore({
  reducer: {
    topComponent: topComponentReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MovieInfoContext>
      <App />
    </MovieInfoContext>
  </Provider>
);
