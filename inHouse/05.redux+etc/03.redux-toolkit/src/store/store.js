import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

/*
const reducer = (currentState, action) => {
  if (action.type === "up") {
    return { ...currentState, value: currentState.value + action.step };
    // 그냥 ...로 복제후 value값을 action.step만큼 더해서 새로운 state로 변환시켜줌!
  }
  return currentState;
};
const initialState = { value: 0 };
const store = createStore(reducer, initialState);
--> react-redux를 쓸때 쓰는법
*/


const store = configureStore({
  reducer: {
    // configureStore내 reducer에는 각각의 slice내 reducers을 써주면 된다.
    // store에서는 reducer로! slice에서는 reducers로 써줘야한다!
    counter: counterSlice.reducer, // counterSlice내에 있는 모든 reducers를 말한다.
  },
});

export default store;