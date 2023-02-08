import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "Brent Everett", age: 37 },
  reducers: {
    chName(state) {
      state.name = "Brent Corrigan";
    },
    plusAge(state, action) {
      state.age += action.payload;
    },
  },
});

export const { chName, plusAge } = user.actions;

export default user;
