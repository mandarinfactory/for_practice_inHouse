import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: { name: "Brent Everett", age: 29 },
    reducers: {
      chName(state) {
        // 여기서 state는 기존 initialState
        state.name = "Brent Corrigan";
      },
      chAge(state, action) {
        state.age += action.payload;
      },
    },
  }); // useState역할이다. --> state하나를 slice라고 부름
  // redux의 state 변경하는법
  // state 수정해주는 함수를 만들고(reducers내에 그 함수들을 action이라고함)원할 때 그 함수를 실행해 댈라고 store.js에 요청해야 한다.

  export let { chName, chAge } = user.actions; // reducers들을 다 뺄때 actions로 빼면 {}화해서 나온다.
  export default user;