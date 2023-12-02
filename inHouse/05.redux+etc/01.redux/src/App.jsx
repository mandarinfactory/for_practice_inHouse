import React, { useState } from "react";
import "./style.css";
import { createStore } from "redux"; // toolkit의 configureStore로 대체되고 있다.
import { Provider, useSelector, useDispatch, connect } from "react-redux";
// Provider : state를 어떤 component에 넣어줄것인지에 대한 가장 껍데기 부분에 해당한다.
// useSelector :
// useDispatch :

const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  if (action.type === "increase") {
    newState.number++;
  }
  return newState;
};

const store = createStore(reducer);

function App() {
  return (
    <div className="container">
      <h1>Root</h1>
      <div className="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

export default App;

const Left1 = () => {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  );
};

const Left2 = () => {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
};

const Left3 = () => {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
};

const Right1 = () => {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
};

const Right2 = () => {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
};

const Right3 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      />
    </div>
  );
};
