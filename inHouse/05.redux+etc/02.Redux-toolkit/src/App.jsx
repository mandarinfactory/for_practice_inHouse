import { Provider, useSelector, useDispatch } from "react-redux";
import * as store from "./store";

/* const reducer = (state, action) => {
  if (action.type === "increase") {
    return { ...state, value: state.value + action.number };
  }
  return state;
};
const initialState = { value: 0 };
const store = createStore(reducer, initialState);
--> 기본적인 react-redux방법
*/

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value
  });
  return (
    <div>
      <button
        onClick={() => {
          //dispatch({ type: 'counterSlice/increase', number: 2 });
          dispatch(store.counterSlice.actions.increase(2))
        }}
      >
        +
      </button>
      {count}
    </div>
  );
};

function App() {
  return (
    <Provider store={store.store}>
      <div>
        <h1>Counter!</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
