import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    "increase": (state, action) => {
      console.log(action);
      state.value = state.value + action.payload;
    }
  },
});
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }
});

export {store, counterSlice};