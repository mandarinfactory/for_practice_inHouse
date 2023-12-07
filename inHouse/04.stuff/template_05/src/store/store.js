import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./user";

// component가 공유가 필요없으면 그냥 useState()를 쓰는게 낫다!



let stock = createSlice({
  name: "stock",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ], // initialState에는 뭐든 넣을수 있다.
});

export default configureStore({
  reducer: {
    user: user.reducer, //그냥 꼭 .reducer를 붙여줘야한다.(redux방법!)
    stock: stock.reducer,
  },
});
