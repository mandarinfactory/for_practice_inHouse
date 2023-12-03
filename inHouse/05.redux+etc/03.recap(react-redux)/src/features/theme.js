import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
  // createSlice를 사용해서(toolkit)보다 쉽게 reducer를 생성할 수 있다.
  name: "theme",
  initialState: { value: initialStateValue }, // 초기state값(=기본 useState)
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    }, //각각의 reducer들
  }, // 실제로 값을 변경할때 쓰일수 있는 reducer들을 생성해 놓는다.(=setState)
});
// 여기에 user에서 쓸 useState(reducer)를 만든다!

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
