import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const 초기값 = { count: 0, user: "kim" };

const counterSlice = createSlice({
  name: "counter",
  initialState: 초기값,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counter1: counterSlice.reducer,
  },
});

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState = ReturnType<typeof store.getState>;

//수정방법 만든거 export
export let { increment, decrement, incrementByAmount } = counterSlice.actions;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
