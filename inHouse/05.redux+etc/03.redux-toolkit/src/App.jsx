import { Provider, useSelector, useDispatch } from "react-redux";

import counterSlice from "./store/counterSlice";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const Counter = () => {
  const count = useSelector((state) => {
    return state.counter.value
  });
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.up(2));
          // dispatch에 따로 type객체형태를 주지않고 actions.해당type이름(해당type으로 가져올 값)을 넣어줄수 있다.
        }}
      >
        +
      </button>{" "}
      {count}
    </div>
  );
};
