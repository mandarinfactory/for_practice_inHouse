import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "../src/js/userSlice";

const stock = createSlice({
  name: "user",
  initialState: [10, 11, 12],
});

const cart = createSlice({
  name: "user",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
