import { createSlice } from "@reduxjs/toolkit";

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

  export default counterSlice;