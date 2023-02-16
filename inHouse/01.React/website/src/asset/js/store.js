import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "../store/userSlice";

const list = createSlice({
  name: "list",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    chStock(state, action) {
      let number = state.findIndex((e) => {
        return e.id === action.payload;
      });
      state[number].count++;
    },
    addItem (state, action) {
      state.push(action.payload)
    }
  }
});
export let { chStock, addItem } = list.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    list: list.reducer,
  },
});
