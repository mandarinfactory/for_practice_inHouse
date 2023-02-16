import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "state이름",
    initialState: { name: "Brent", age: 29 },
    reducers: {
      chName(state) {
        state.name = "Jordan";
      },
      chAge(state, action) {
          state.age += action.payload;
      }
    },
  });
  export let { chName, chAge } = user.actions;

  export default user;