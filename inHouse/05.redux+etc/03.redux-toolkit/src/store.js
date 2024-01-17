import { createSlice, configureStore } from "@reduxjs/toolkit";

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
*/

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 452 },
  reducers: {
    // 복수형인 reducers이다!
    up: (state, action) => {
      console.log(action);
      // 따로 if문 쓰지 않아도 type이 up일때를 말한다!
      state.value = state.value + action.payload;
      // 따로 불변성을 위해 복사하지 않아도 자동으로 복사 후 state변환이 일어난다!
      // actions를 쓰면 자동으로 type으로 가져올 값을 payload로 가져온다!
    },
  },
});
const store = configureStore({
  reducer: {
    // configureStore내 reducer에는 각각의 slice내 reducers을 써주면 된다.
    // store에서는 reducer로! slice에서는 reducers로 써줘야한다!
    counter: counterSlice.reducer, // counterSlice내에 있는 모든 reducers를 말한다.
  },
});

export {store, counterSlice};